import { BsPeople } from "react-icons/bs";
import { LuHeartHandshake } from "react-icons/lu";

export default function HeroSection() {

    return (
        <div>
            <div className="flex items-center justify-center  py-20    bg-red-50  ">
                <div className="flex flex-col gap-6   items-center">
                    <h1 className="  font-semibold text-5xl ">Conectando Vidas,  <span className="text-red-500 ">Salvando Histórias</span></h1>
                    <p className="text-center text-slate-600 ">A plataforma que conecta doadores de sangue com hemocentros de forma inteligente, <br /> facilitando doações e salvando vidas através da tecnologia.</p>

                    <div className="flex flex-row   text-base   justify-center gap-5">
                        <button className="bg-[#DC2626] h-11 px-8 inline-flex items-center gap-2 rounded text-white  text-sm  shadow-md hover:bg-red-700   hover:cursor-pointer">
                            <LuHeartHandshake /> Quero doar sangue</button>
                        <button className="bg-[#ffff]  rounded  inline-flex items-center gap-2 text-black shadow-md  h-11 px-8 text-sm  hover:bg-gray-100 hover:cursor-pointer"> <BsPeople />Sou Hemocentro</button>
                    </div>
                </div>
            </div>
        </div>
    )
}