import mqtt from 'mqtt';
import { useEffect, useState } from 'react';

interface Props {
    topic: string;
}

export default function Messages({ topic }: Props) {
    // Define el tipo explícito como string[]
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        // Conectar al broker MQTT
        const client = mqtt.connect('wss://broker.hivemq.com:8884/mqtt', {
            clientId: `client_${Math.random().toString(16).slice(2)}`,
        });
    
        client.on('connect', () => {
            client.subscribe(topic, { qos: 0 }, (err) => {
                if (!err) {
                    console.log(`Suscripción exitosa a ${topic}`);
                } else {
                    console.error('Error al suscribirse:', err);
                }
            });
        });
    
        client.on('message', (_, message) => {
            // Agregar el mensaje al estado
            setMessages((prevMessages) => [...prevMessages, message.toString()]);
        });
    
        // Limpieza al desmontar el componente
        return () => {
            if (client.connected) {
                client.end();
            }
        };
    }, [topic]);

    return (
        <div className="p-4 bg-white flex flex-col items-center justify-center h-full shadow shadow-black rounded-lg">
            <h1 className="text-center text-lg font-semibold">Mensajes del robot</h1>
            {messages.map((message, index) => (
                <div
                    key={index}
                    className="bg-black text-white p-2 m-2 rounded-lg transform hover:scale-105 hover:bg-grisOscuro duration-300 w-full text-center"
                >
                    {message}
                </div>
            ))}
        </div>
    );
}
