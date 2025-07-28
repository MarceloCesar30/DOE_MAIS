import { Calendar, MapPin, Bell, Gift, Bot, BarChart2 } from "lucide-react";

// Dados das funcionalidades para facilitar a manutenção e evitar repetição
const features = [
  {
    icon: <Calendar className="h-8 w-8 text-red-500" />,
    title: "Agendamento Online",
    description:
      "Agende sua doação de forma rápida e prática, escolhendo o melhor horário.",
  },
  {
    icon: <MapPin className="h-8 w-8 text-blue-500" />,
    title: "Mapa de Unidades",
    description:
      "Encontre o hemocentro mais próximo com informações em tempo real.",
  },
  {
    icon: <Bell className="h-8 w-8 text-green-500" />,
    title: "Notificações Inteligentes",
    description:
      "Receba lembretes por email sobre suas doações e oportunidades.",
  },
  {
    icon: <Gift className="h-8 w-8 text-purple-500" />,
    title: "Sistema de Recompensas",
    description: "Ganhe selos e níveis de fidelidade a cada doação realizada.",
  },
  {
    icon: <Bot className="h-8 w-8 text-orange-500" />,
    title: "Assistente IA",
    description: "Chat inteligente para tirar dúvidas sobre doação de sangue.",
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-indigo-500" />,
    title: "Relatórios e Analytics",
    description: "Painéis completos para gestores com estatísticas detalhadas.",
  },
];

export default function FeaturesSection() {
  return (
    <section className=" bg-whiite py-16 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Bloco de Título e Descrição */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Funcionalidades Completas
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Nossa plataforma oferece tudo que você precisa para uma gestão
            eficiente da doação de sangue, conectando doadores e hemocentros.
          </p>
        </div>

        {/* Grid com os Cards de Funcionalidades */}
        <div className="mx-auto mt-16 max-w-none sm:mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-5">{feature.icon}</div>
                <h3 className="text-xl font-bold leading-7 text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
