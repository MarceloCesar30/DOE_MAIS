import Link from "next/link";
import { Heart } from "lucide-react"; // Ícone para o botão
import { FaRegHeart } from "react-icons/fa"; // Reutilizando o ícone da logo do Header

export default function Footer() {
  return (
    <footer className="bg-white">

      {/* Seção de Chamada para Ação (CTA) */}
      
      <div className="bg-[#D92D20] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Pronto para Fazer a Diferença?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-red-100">
            Junte-se a milhares de pessoas que já estão salvando vidas através
            da nossa plataforma.
          </p>
          <div className="mt-8">
            <Link href="/cadastro">
              <button className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-red-600 shadow-sm transition-transform duration-300 hover:scale-105">
                Começar Agora
                <Heart className="h-5 w-5" aria-hidden="true" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Rodapé Principal */}

      <div className="bg-slate-800 text-white">
        <div className="mx-auto max-w-7xl px-8 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

            {/* Coluna 1: Logo e Descrição */}

            <div className="md:col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center gap-2">
                <FaRegHeart className="text-2xl text-red-500" />
                <span className="text-2xl font-bold text-white">DOE+</span>
              </Link>
              <p className="mt-4 text-sm text-slate-300">
                Conectando vidas através da doação de sangue consciente e
                tecnológica.
              </p>
            </div>

            {/* Coluna 2: Para Doadores */}

            <div>
              <h3 className="text-base font-semibold text-white">
                Para Doadores
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/como-doar"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    Como Doar
                  </Link>
                </li>
                <li>
                  <Link
                    href="/agendar"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    Agendar Doação
                  </Link>
                </li>
                <li>
                  <Link
                    href="/meu-historico"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    Meu Histórico
                  </Link>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Para Hemocentros */}

            <div>
              <h3 className="text-base font-semibold text-white">
                Para Hemocentros
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/gestao"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    Gestão
                  </Link>
                </li>
                <li>
                  <Link
                    href="/relatorios"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    Relatórios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/controle-estoque"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    Controle de Estoque
                  </Link>
                </li>
              </ul>
            </div>

            {/* Coluna 4: Suporte */}

            <div>
              <h3 className="text-base font-semibold text-white">Suporte</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/ajuda"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    Central de Ajuda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contato"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    Contato
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacidade"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}

          <div className="mt-16 border-t border-slate-700 pt-8 text-center">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} DOE+. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
