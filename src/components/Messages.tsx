interface Props {
    messages: string[];
}

export default function Messages ({messages}: Props) {
    return (
        <div className="p-4 bg-grisClaro flex flex-col items-center justify-center h-2/4 shadow shadow-negroSuave rounded-lg">
            {messages.map((message, index) =>(
                <div key={index} className="bg-azulTec text-white p-2 m-2 rounded-lg transform hover:scale-105 hover:bg-azulClaro duration-300 w-full text-center">
                    {message}
                </div>
                ))}
        </div>
    )
}