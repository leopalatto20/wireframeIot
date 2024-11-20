import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import mqtt from 'mqtt';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

// Registrar componentes necesarios de Chart.js
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

interface Props {
  Sensores: string[];
}

const SensorGrid = ({ Sensores }: Props) => {
  // Almacenar los datos de cada sensor en un objeto
  const [sensorData, setSensorData] = useState(
    Sensores.reduce((acc, sensor) => {
      acc[sensor] = { dataPoints: [], labels: [] };
      return acc;
    }, {} as { [key: string]: { dataPoints: number[]; labels: string[] } })
  );

  useEffect(() => {
    // Conectar al broker MQTT
    const client = mqtt.connect('wss://broker.hivemq.com:8884/mqtt', {
      clientId: `client_${Math.random().toString(16).slice(2)}`,
    });

    // Suscribirse a cada sensor (cada uno tiene su propio canal MQTT)
    Sensores.forEach((sensor) => {
      const topic = `TestIoT/${sensor}`;
      client.subscribe(topic, (err) => {
        if (err) {
          console.error(`Error al suscribirse a ${topic}:`, err);
        } else {
          console.log(`Suscripción exitosa a: ${topic}`);
        }
      });
    });

    // Manejar mensajes recibidos
    client.on('message', (topic, message) => {
      const sensor = topic.split('/')[1]; // Extraer el nombre del sensor desde el tópico
      const payload = parseFloat(message.toString());

      if (!isNaN(payload)) {
        setSensorData((prevData) => {
          const newData = { ...prevData };
          if (newData[sensor]) {
            newData[sensor].dataPoints = [
              ...newData[sensor].dataPoints,
              payload,
            ].slice(-20); // Mantener los últimos 20 puntos
            newData[sensor].labels = [
              ...newData[sensor].labels,
              new Date().toLocaleTimeString(),
            ].slice(-20); // Mantener las últimas 20 etiquetas
          }
          return newData;
        });
      }
    });

    // Manejar errores de conexión
    client.on('error', (err) => {
      console.error('Error de conexión:', err);
    });

    // Manejar intentos de reconexión
    client.on('reconnect', () => {
      console.log('Intentando reconectar...');
    });

    // Limpiar la conexión al desmontar el componente
    return () => {
      client.end();
    };
  }, [Sensores]);

  // Configuración común para los gráficos
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          text: 'Tiempo',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Valor',
        },
      },
    },
  };

  return (
    <div className="grid grid-cols-2 gap-3 h-full">
      {Sensores.map((sensor, index) => {
        const { dataPoints, labels } = sensorData[sensor] || { dataPoints: [], labels: [] };
        const chartData = {
          labels,
          datasets: [
            {
              label: `Datos del Sensor: ${sensor}`,
              data: dataPoints,
              fill: false,
              backgroundColor: 'black',
              borderColor: 'black',
            },
          ],
        };

        return (
          <div
            key={index}
            className="bg-white rounded-lg flex flex-col items-center justify-center h-full shadow shadow-black transform hover:scale-105 duration-300 p-4"
          >
            <h1 className="text-center font-semibold bg-black rounded-lg p-3 text-white mb-4">
              Sensor ({sensor})
            </h1>
            <div className="flex-1 w-full h-full">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SensorGrid;
