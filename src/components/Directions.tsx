import mqtt from "mqtt";

interface DirectionsProps {
    topic: string; // El canal MQTT al que enviarás los mensajes
}

export default function Directions ({ topic } : DirectionsProps) {

    const sendMessage = (message: string) => {
        const client = mqtt.connect('wss://broker.hivemq.com:8884/mqtt', {
            clientId: `client_${Math.random().toString(16).slice(2)}`,
        });

        client.on("connect", () => {
            console.log(`Sending message: ${message} to topic: ${topic}`);
            client.publish(topic, message); // Publica el mensaje al topic
            client.end(); // Cierra la conexión
        });

        // Manejar errores de conexión
        client.on("error", (err) => {
            console.error("Error de conexión:", err);
        });

        // Manejar intentos de reconexión
        client.on("reconnect", () => {
            console.log("Intentando reconectar...");
        });
    };

    const handleDirectionClick = (dir: string) => {
        sendMessage(dir);
    };

    return (
        <div className="flex flex-col bg-white rounded-lg h-full w-full shadow items-center p-4 shadow-black justify-center">
            <h1 className="text-center text-lg font-semibold">Control de Dirección</h1>
            <div className="pt-2 grid grid-cols-1 gap-3 h-auto w-full">
                <button
                    className="bg-black text-white p-2 rounded-lg hover:scale-105 hover:bg-grisOscuro duration-300 h-full"
                    onClick={() => handleDirectionClick("forward")}
                >
                    Forward
                </button>
                <button
                    className="bg-black text-white p-2 rounded-lg hover:scale-105 hover:bg-grisOscuro duration-300"
                    onClick={() => handleDirectionClick("backward")}
                >
                    Backward
                </button>
                <button
                    className="bg-black text-white p-2 rounded-lg hover:scale-105 hover:bg-grisOscuro duration-300"
                    onClick={() => handleDirectionClick("left")}
                >
                    Left
                </button>
                <button
                    className="bg-black text-white p-2 rounded-lg hover:scale-105 hover:bg-grisOscuro duration-300"
                    onClick={() => handleDirectionClick("right")}
                >
                    Right
                </button>
            </div>
        </div>
    );
};
