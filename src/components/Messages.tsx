interface Props {
    messages: string[];
}

export default function Messages ({messages}: Props) {
    return (
        <div className="p-4 bg-white flex flex-col items-center justify-center h-full shadow shadow-black rounded-lg">
            {messages.map((message, index) =>(
                <div key={index} className="bg-black text-white p-2 m-2 rounded-lg transform hover:scale-105 hover:bg-grisOscuro duration-300 w-full text-center">
                    {message}
                </div>
                ))}
        </div>
    )
}