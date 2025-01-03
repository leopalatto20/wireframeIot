import {useState} from "react";

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

    const [headerText, setHeaderText] = useState("Gipsy Danger")

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
                <Header headerText={headerText}/>
            <div className="grid lg:grid-cols-[0.5fr,3fr,0.5fr] h-auto bg-grisClaro">
                <div className="p-3">
                    <Sidebar images={images} names={names} setHeaderText={setHeaderText}/>
                </div>
                <div className="p-3">
                    <SensorGrid Sensores={sensores} />
                </div>
                <div className="p-3 grid lg:grid-cols-1 grid-cols-2 gap-3 h-full">
                    <Messages topic={"TestIoT/mensajes"}/>
                    <Directions topic={"TestIoT/motores"}/>
                </div>
            </div>
        </div>
    );
}