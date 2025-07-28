import { BsPeople } from "react-icons/bs";
import { LuHeartHandshake } from "react-icons/lu";

export default function HeroSection() {

    return (
        <div className="bg-red-50 py-20 px-4">
            <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
                    Conectando Vidas,{" "}
                    <span className="text-red-500">Salvando Histórias</span>
                </h1>

                <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
                    A plataforma que conecta doadores de sangue com hemocentros de forma inteligente,
                    <br className="hidden sm:block" />
                    facilitando doações e salvando vidas através da tecnologia.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                    <button className="bg-[#DC2626] h-11 px-8 inline-flex items-center justify-center gap-2 rounded text-white text-sm shadow-md hover:bg-red-700 transition-all">
                        <LuHeartHandshake />
                        Quero doar sangue
                    </button>

                    <button className="bg-white h-11 px-8 inline-flex items-center justify-center gap-2 rounded text-black text-sm shadow-md hover:bg-gray-100 transition-all">
                        <BsPeople />
                        Sou Hemocentro
                    </button>
                </div>
            </div>
        </div>
    );
}