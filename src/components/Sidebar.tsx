interface Props {
    images: string[];
    names: string[];
    setHeaderText: (text: string) => void;
}

export default function Sidebar({images, names, setHeaderText}:Props) {
    return (
        <div className="flex bg-white p-4 rounded-lg shadow flex-col justify-center h-full shadow-black">
            <ul className="grid lg:grid-cols-1 grid-cols-2 gap-4 h-full">
                {names.map((robot, index) => (
                    <li key={index} className="p-3 rounded-lg shadow transform hover:scale-105 duration-300 flex items-center justify-center flex-grow"
                        style= {{
                            backgroundImage: `url(${images[index]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            }}
                        onClick={() => setHeaderText(robot)}
                    >
                        <div className="text-xl font-semibold italic text-center mb-4 px-2 py-1 rounded bg-opacity-70 bg-black text-white">
                            {robot}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}