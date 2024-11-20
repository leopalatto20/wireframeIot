import directions from './../assets/direcciones.svg'

export default function Directions () {
    return (
        <div className="bg-white rounded-lg h-full shadow tranform hover:scale-105 duration-300 items-center p-4 shadow-negroSuave">
            <img src={directions} alt="Direcciones" className="w-full h-full"/>
        </div>
    )
}