import Robot from './../assets/Robot.png'
export default function Header () {
    return (
        <nav className="bg-black flex flex-row items-center justify-between p-3">
            <div className="flex items-center">
                <img src={Robot} alt={"Robot"} className="h-16 w-16 ml-4"/>
                <h1 className="text-3xl font-bold text-white p-4">
                    Tec IoT
                </h1>
            </div>
        </nav>
    )
}