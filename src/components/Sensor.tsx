interface Props {
    Sensores: string[];
}

export default function SensorGrid({ Sensores }: Props) {
    return (
        <div className="grid lg:grid-cols-2 gap-3 h-full">
            {Sensores.map((sensor, index) => (
                <div
                    key={index}
                    className="bg-grisClaro rounded-lg flex flex-col items-center justify-center h-full shadow shadow-black transform hover:scale-105 duration-300 p-4"
                >
                    <h1 className="text-center font-semibold bg-azulTec rounded-lg p-3 text-white">
                        Sensor ({sensor})
                    </h1>
                </div>
            ))}
        </div>
    );
}
