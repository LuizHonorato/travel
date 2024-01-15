import { FaMapMarkerAlt, FaPhoneAlt, FaPrint, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="mt-20 mb-20 w-full mx-auto bg-gray-50">
            <div className="flex flex-col md:flex-row gap-5 mx-auto items-center justify-around max-w-7xl py-10 border-b-2 border-gray-200 mb-10">
                <h1 className="text-3xl md:text-5xl font-bold text-blue-500">
                    T⋅R⋅A⋅V⋅E⋅L⋅⊳
                </h1>
                <div>
                    <div className="flex items-center">
                        <FaMapMarkerAlt size={20} color='#3b82f6' />
                        <span className="text-sm ml-3">Rua 1, Ribeirão Preto, São Paulo</span>
                    </div>
                    <div className="flex mt-4">
                        <div className="flex">
                            <FaPhoneAlt size={20} color='#3b82f6' />
                            <span className="text-sm ml-3">(123) 4567-8910</span>
                        </div>
                        <div className="flex ml-4">
                            <FaPrint size={20} color='#3b82f6' />
                            <span className="text-sm ml-3">(123) 4567-8910</span>
                        </div>
                    </div>
                    <div className="flex mt-10 items-center justify-between">
                        <span className="text-sm">Redes Sociais</span>
                        <div className="flex space-x-3">
                            <FaFacebook size={20} color='#3b82f6'  />
                            <FaInstagram size={20} color='#3b82f6'  />
                            <FaYoutube size={20} color='#3b82f6'  />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between w-full mx-auto max-w-7xl px-2 pb-5">
                <div className="flex flex-col md:flex-row gap-5 text-center">
                    <span className="text-sm">Sobre nós</span>
                    <span className="text-sm">Contate-nos</span>
                    <span className="text-sm">Ajuda</span>
                    <span className="text-sm">Política de Privacidade</span>
                    <span className="text-sm">Reclamações</span>
                </div>
                <span className="text-center text-sm mt-5">Copyright © {new Date().getFullYear()}</span>
            </div>
        </footer>
    );
}