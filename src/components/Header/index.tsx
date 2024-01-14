import Link from "next/link";
import { FiHelpCircle, FiUser } from 'react-icons/fi';
import { LinkItem } from "@/components/LinkItem";

export function Header() {
    return (
        <header className="w-full flex items-center px-2 py-4 bg-white h-24 shadow-md">
            <div className="w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
                <Link href='/'>
                    <h1 className="text-3xl md:text-2xl font-bold text-blue-500">
                        T⋅R⋅A⋅V⋅E⋅L⋅⊳
                    </h1>
                </Link>
                <nav>
                    <ul className="flex gap-6">
                        <LinkItem href="/" title="Home" />
                        <LinkItem href="/voos" title="Voos" />
                        <LinkItem href="/hoteis" title="Hotéis" />
                        <LinkItem href="/passeios" title="Passeios" />
                        <LinkItem href="/pacotes" title="Pacotes de Viagens" />
                    </ul>
                </nav>
                <div className="hidden md:flex mt-2 md:mt-0 gap-6">
                    <button>
                        <FiHelpCircle size={24} color='#454545' />
                    </button>
                    <button>
                        <FiUser size={24} color='#454545' />
                    </button>
                </div>
            </div>
        </header>
    );
}