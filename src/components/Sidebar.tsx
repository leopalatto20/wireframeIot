interface Props {
    images: string[];
    names: string[];
}

export default function Sidebar({images, names}:Props) {
    return (
        <div className="flex bg-grisClaro p-4 rounded-lg shadow flex-col justify-center h-full shadow-black">
            <ul className="flex flex-col h-full space-y-4">
                {names.map((robot, index) => (
                    <li key={index} className="p-3 rounded-lg shadow transform hover:scale-105 duration-300 flex items-center justify-center flex-grow"
                        style= {{
                            backgroundImage: `url(${images[index]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            }}
                    >
                        <div className="text-xl font-semibold italic text-center mb-4 px-2 py-1 rounded bg-opacity-70 bg-azulTec text-white">
                            {robot}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}