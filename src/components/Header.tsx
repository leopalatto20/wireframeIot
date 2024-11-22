import Robot from './../assets/Robot.png'

interface Props {
    headerText: string;
}
export default function Header ({headerText}: Props) {
    return (
        <nav className="bg-black flex flex-row items-center justify-between p-3">
            <div className="flex items-center">
                <img src={Robot} alt={"Robot"} className="h-full w-16 ml-4"/>
                <h1 className="text-3xl font-bold lg:text-white text-black p-4">
                    Tec IoT
                </h1>
            </div>
            <div className="flex items-center bg-white rounded-lg">
                <h1 className="text-black p-4">
                    <b> Robot actual: {headerText}</b>
                </h1>
            </div>
        </nav>
    )
}