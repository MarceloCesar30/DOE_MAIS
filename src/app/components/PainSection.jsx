export default function PainSection() {
    return (
        <div className="bg-white py-20 px-6 ">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-red-700">
                    O Problema é Real. A Urgência é Agora.
                </h2>
                <p className="mt-4 text-lg text-gray-700">
                    A cada 2 segundos, alguém precisa de uma transfusão de sangue. No Brasil, milhares de vidas estão em risco por causa da baixa adesão à doação. Os hemocentros enfrentam escassez crítica, especialmente em períodos como feriados, pandemias e emergências regionais.
                </p>
            </div>

            <div className="mt-12 grid  grid-cols-3 gap-8  text-center">
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-3xl font-bold text-red-600">60%</h3>
                    <p className="mt-2 text-gray-700">dos brasileiros nunca doaram sangue</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-3xl font-bold text-red-600">1 em cada 4</h3>
                    <p className="mt-2 text-gray-700">pessoas precisarão de sangue ao longo da vida</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-3xl font-bold text-red-600">Estoque crítico</h3>
                    <p className="mt-2 text-gray-700">em mais de 70% dos hemocentros do país</p>
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-lg text-gray-800 font-medium">
                    DOE+ surge para reverter esse cenário com tecnologia, engajamento social e gamificação.</p>
                <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">Faça Parte da Solução</button>
            </div>
        </div>
    );
}
