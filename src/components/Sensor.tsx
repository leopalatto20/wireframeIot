interface Props {
    Sensores: string[];
}

export default function SensorGrid({ Sensores }: Props) {
    return (
        <div className="grid grid-cols-2 gap-3 h-full">
            {Sensores.map((sensor, index) => (
                <div
                    key={index}
                    className="bg-white rounded-lg flex flex-col items-center justify-center h-full shadow shadow-black transform hover:scale-105 duration-300 p-4"
                >
                    <h1 className="text-center font-semibold bg-black rounded-lg p-3 text-white mb-4">
                        Sensor ({sensor})
                    </h1>
                    <div className="flex-1 flex items-center justify-center">
                        {/* Aqui meter las graficas*/}
                    </div>
                </div>
            ))}
        </div>
    );
}
