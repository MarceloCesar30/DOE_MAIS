import { CiHeart } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa";
import { PiMedalLight } from "react-icons/pi";

export default function StatsSection() {
    return (
        <div className="bg-white py-16">
            <div className="flex items-center justify-around gap-10">
                {/* Card 1 */}
                <div className="flex flex-col items-center text-center gap-2">
                    <div className="bg-red-300/40 p-4 rounded-full flex items-center justify-center">
                        <CiHeart className="text-red-500 text-3xl" />
                    </div>
                    <h1 className="text-3xl  font-semibold text-gray-800">12.5k+</h1>
                    <p className="text-gray-600">Doadores Cadastrados</p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center text-center gap-2">
                    <div className="bg-blue-300/40 p-4 rounded-full flex items-center justify-center">
                        <LuMapPin className="text-blue-500 text-3xl" />
                    </div>
                    <h1 className="text-3xl font-semibold text-gray-800">150+</h1>
                    <p className="text-gray-600">Hemocentros Parceiros</p>
                </div>

                {/* card 3  */}

                <div>
                    <div className="flex flex-col items-center text-center gap-2">
                        <div className="bg-green-300/40 p-4 rounded-full flex items-center justify-center">
                            <FaRegCalendar className="text-green-800 text-3xl" />
                        </div>
                        <h1 className="text-3xl font-semibold text-gray-800">8.2k+</h1>
                        <p className="text-gray-600">Doações Realizadas</p>
                    </div>
                </div>

                {/* card 4  */}

                <div>
                    <div className="flex flex-col items-center text-center gap-2">
                        <div className="bg-purple-300/40 p-4 rounded-full flex items-center justify-center">
                            <PiMedalLight className="text-purple-800 text-3xl" />
                        </div>
                        <h1 className="text-3xl font-semibold text-gray-800">95%</h1>
                        <p className="text-gray-600">Taxa de Satisfação</p>
                    </div>
                </div>
            </div>
        </div>
    );
}