export default function ResponsibilitySection() {
    return (
        <div className="bg-red-50 py-20  px-20">
            <div className="  text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Compromissos da DOE+
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                    A DOE+ é uma startup de impacto social que promove a solidariedade através da tecnologia.
                    Nosso compromisso vai além da doação — oferecemos suporte, segurança e reconhecimento para
                    empresas e colaboradores.
                </p>

                <div className="grid  grid-cols-2 gap-10 text-left">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="font-semibold text-xl text-red-600 mb-2">
                            Plataforma Acessível
                        </h3>
                        <p className="text-gray-700">
                            Fornecemos acesso à nossa plataforma digital com funcionalidades gamificadas para empresas e colaboradores.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="font-semibold text-xl text-red-600 mb-2">
                            Segurança de Dados
                        </h3>
                        <p className="text-gray-700">
                            Garantimos a proteção e a privacidade dos dados dos usuários conforme a LGPD.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="font-semibold text-xl text-red-600 mb-2">
                            Reconhecimento Social
                        </h3>
                        <p className="text-gray-700">
                            Emitimos certificados e selos de reconhecimento com base na participação nas campanhas de doação.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="font-semibold text-xl text-red-600 mb-2">
                            Suporte e Relatórios
                        </h3>
                        <p className="text-gray-700">
                            Disponibilizamos suporte técnico contínuo e relatórios mensais sobre impacto social e desempenho.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
