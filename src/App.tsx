import Messages from './components/Messages.tsx';
import Header from './components/Header.tsx';
import Directions from './components/Directions.tsx'
import Sidebar from './components/Sidebar.tsx';
import SensorGrid from './components/Sensor.tsx'

import Cherno from './assets/cherno.jpg';
import Crimson from './assets/crimson.jpg';
import Striker from './assets/striker.jpg';
import Gipsy from './assets/Gipsy.jpg';


export default function App () {
    const messages = [
        "Fortnite",
        "Varbi",
        "Varbo",
        "Pollo feliz"
    ]
    const names = [
        "Cherno Alpha",
        "Crimson Typhoon",
        "Striker Eureka",
        "Gipsy Danger"
    ]
    const images = [
        Cherno,
        Crimson,
        Striker,
        Gipsy
    ]
    const sensores = [
        "Ultrasonico",
        "BMP",
        "Acelerometro",
        "ADC"
    ]
    return (
        <div className="h-screen grid grid-rows-[auto,1fr]">
                <Header />
            <div className="grid grid-cols-[0.5fr,3fr,0.5fr] h-auto bg-grisClaro">
                <div className="p-3">
                    <Sidebar images={images} names={names} />
                </div>
                <div className="p-3">
                    <SensorGrid Sensores={sensores} />
                </div>
                <div className="p-3 flex flex-col gap-3 h-full">
                    <Messages messages={messages} />
                    <Directions />
                </div>
            </div>
        </div>
    );
}