import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
export default function Header() {
  return (
    <header className="flex justify-around items-center py-4 px-8 bg-white border-b border-gray-200">
      <div className="inline-flex items-center gap-2">
        <FaRegHeart className="text-red-500 text-2xl" />
        <h1 className="text-2xl font-bold text-slate-800">DOE+</h1>
      </div>
      <nav>
        <ul className="flex items-center gap-8">
          <li>
            <Link
              href="/para-doadores"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Para Doadores
            </Link>
          </li>
          <li>
            <Link
              href="/para-hemocentros"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Para Hemocentros
            </Link>
          </li>
          <li>
            <Link
              href="/unidades"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Unidades
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <Link href="/login">
          <button className="py-2 px-6 font-semibold rounded-md border-2 border-slate-800 text-slate-800 hover:bg-slate-100 transition-colors">
            Entrar
          </button>
        </Link>
        <Link href="/cadastro">
          <button className="py-2 px-6 font-semibold rounded-md bg-[#0d1b2a] text-white hover:bg-[#1b263b] transition-colors">
            Cadastrar
          </button>
        </Link>
      </div>
    </header>
  );
}
