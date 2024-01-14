import { DestinationCard } from "@/components/DestinationCard";
import { HotelCard } from "@/components/HotelCard";
import { SearchBar } from "@/components/SearchBar";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { IoAirplaneOutline } from 'react-icons/io5';
import { HiPaperAirplane } from "react-icons/hi2";
import { IoMdHelp } from "react-icons/io";

import maragogi from '../../public/assets/images/maragogi.webp';
import arraialDoCabo from '../../public/assets/images/atalaia.webp';
import buenosAires from '../../public/assets/images/buenos-aires.jpg';
import cancun from '../../public/assets/images/cancun.webp';
import roma from '../../public/assets/images/coliseu.jpg';
import rioDeJaneiro from '../../public/assets/images/cristo-redentor-rj.webp';
import collineDeFrance from '../../public/assets/images/colline de france.jpg';
import copacabanaPalace from '../../public/assets/images/copacaba-palace.jpg';
import hilton from '../../public/assets/images/hilton.jpg';
import fasano from '../../public/assets/images/fasano.jpg';
import traveler from '../../public/assets/images/traveler.svg';
import newsletterImg from '../../public/assets/images/newsletter.svg';
import { Testimony } from "@/components/Testimony";
import { FaCommentDollar, FaMap } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="mt-32 mb-2 w-full max-w-7xl mx-auto px-2 2xl:px-0 bg-mapa-mundi bg-center bg-no-repeat bg-contain text-center xl:text-left">
      <div className="flex items-start justify-center xl:justify-between">
        <section>
          <span className="text-lg border-2 p-3 rounded-full border-gray-300">Reserve conosco!</span>
          <h1 className="mt-9 font-bold text-4xl sm:text-6xl sm:leading-[1.4]">Aventure-se e <br /><span className="text-blue-500">experimente</span> novas<br /> viagens!</h1>
          <article className="mt-9 text-lg sm:text-xl max-w-xl sm:leading-[1.7]">Descubra lugares maravilhosos, culturas únicas e lugares interessantes ao redor do mundo.</article>
        </section>
        <Image className="max-w-[640px] hidden xl:block" src='/assets/images/airplane.svg' width={640} height={400} alt="traveler" />
      </div>

      <div className="w-full px-2 md:px-0 mt-16">
        <SearchBar />
      </div>

      <section className="mt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-center">Top<span className="text-blue-500"> Destinos</span></h1>
        <p className="text-center text-lg sm:text-xl mt-6 sm:leading-[1.7]">Explore nosso ranking de top destinos votados por mais 10.000 clientes de todo o Brasil.</p>
        <Link href='#' className="flex items-center justify-center text-lg border-2 p-3 rounded-full border-gray-300 w-fit mx-auto mt-6 gap-2">
          Todos os destinos
          <FiChevronRight size={20} />
        </Link>
        <div className="mt-10 grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <DestinationCard title="Maragogi" period="8 noites / 7 dias" price={8000} image={maragogi} />
          <DestinationCard title="Arraial do Cabo" period="5 noites / 4 dias" price={8000} image={arraialDoCabo} />
          <DestinationCard title="Buenos Aires" period="5 noites / 4 dias" price={6000} image={buenosAires} />
          <DestinationCard title="Cancún" period="8 noites / 7 dias" price={8000} image={cancun} />
        </div>
      </section>

      <section className="w-full mt-24 md:mt-40 bg-gray-50 p-10 flex flex-col md:flex-row items-center justify-between">
        <div>
          <span className="flex items-center gap-2 text-lg border-2 p-3 rounded-full border-gray-300 w-fit">
            <IoAirplaneOutline size={24} />
            Férias dos sonhos  
          </span>
          <h1 className="mt-9 font-bold text-4xl sm:text-6xl sm:leading-[1.4]">Planeje a <span className="text-blue-500">viagem</span><br /> da sua <span className="text-yellow-400">vida</span> com facilidade</h1>
          <p className="mt-9 text-lg sm:text-xl max-w-xl sm:leading-[1.7]">Um lugar romântico? Uma aventura familiar? Uma viagem solo para explorar o mundo? Nós temos todas as opções!</p>
          <button className="bg-blue-500 text-white text-xl px-6 py-4 rounded mt-6">Saiba mais</button>
        </div>
        <div className="mt-9 md:mt-0 flex flex-col items-center justify-end gap-7 bg-yellow-50 p-6 rounded">
          <Image src={roma} alt="roma" width={295} height={196.54} className="border-4 border-yellow-300 rounded" />
          <Image src={rioDeJaneiro} alt="Rio de Janeiro" width={295} height={196.54} className="border-4 border-yellow-300 rounded" />
        </div>
      </section>

      <section className="mt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-center">Hotéis</h1>
        <p className="text-center text-lg sm:text-xl mt-6 sm:leading-[1.7]">Explore nosso ranking de top hotéis votados por mais 10.000 clientes de todo o Brasil.</p>
        <Link href='#' className="bg-white flex items-center justify-center text-lg border-2 p-3 rounded-full border-gray-300 w-fit mx-auto mt-6 gap-2">
          Todos os hotéis
          <FiChevronRight size={20} />
        </Link>
        <div className="mt-10 grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <HotelCard title="Colline de France Hotel" reviews={20} price={500} image={collineDeFrance} />
          <HotelCard title="Copacabana Palace Hotel" reviews={20} price={400} image={copacabanaPalace} />
          <HotelCard title="Hilton Hotel" reviews={20} price={450} image={hilton} />
          <HotelCard title="Fasano Hotel" reviews={20} price={700} image={fasano} />
        </div>
      </section>

      <section className="mt-20">
        <div className="flex flex-col md:flex-row flex-wrap items-center gap-7">
          <div className="bg-blue-500 flex flex-1 items-center justify-start p-6 rounded h-60">
            <div className="flex flex-col items-start">
              <h2 className="text-white text-2xl font-medium">Veja promoções!</h2>
              <p className="text-white text-md mt-4">Não perca essas oportunidades incríveis!</p>
              <button className="bg-white text-blue-500 text-lg px-5 py-2 rounded mt-6">Ver viagens</button>
            </div>
            <Image src={traveler} alt="Newsletter" width={300} />
          </div>
          
          <div className="bg-yellow-400 flex flex-1 items-center justify-between p-6 rounded h-60">
            <div className="flex flex-col items-start">
              <h2 className="text-white text-2xl font-medium">Não perca nada!</h2>
              <p className="text-white text-md mt-4">Inscreva-se na nossa newsletter e fique por dentro das novidades!</p>
              
              <form className="mt-6">   
                  <div className="relative">
                      <input type="search" id="search" className="block w-full p-2 ps-4 text-lg text-gray-500 border-2 rounded-lg focus:border-blue-500 focus:outline-none h-12" placeholder="Seu e-mail" required />
                      <button type="submit" className="absolute end-6 bottom-3">
                          <HiPaperAirplane size={24} color='#3b82f6' />
                      </button>
                  </div>
              </form>

            </div>
            <Image src={newsletterImg} alt="Newsletter" width={300} />
          </div>
        </div>
      </section>

      <section className="mt-20 bg-gray-50 p-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center md:leading-[1.4]">O que<span className="text-blue-500"> nossos clientes</span> estão<br />dizendo sobre nós</h1>
        <div className="flex flex-col md:flex-row flex-1 items-center justify-center gap-7 mt-6">
          <Testimony customerName="John Doe" text="As viagens no site são ótimas! Eu realmente aproveitei com a minha família! O suporte do time funciona e eu realmente recomendo o Travel para todos os meus amigos!" />
          <Testimony customerName="Jane Doe" text="As viagens no site são ótimas! Eu realmente aproveitei com a minha família! O suporte do time funciona e eu realmente recomendo o Travel para todos os meus amigos!" />
          <Testimony customerName="Mary Doe" text="As viagens no site são ótimas! Eu realmente aproveitei com a minha família! O suporte do time funciona e eu realmente recomendo o Travel para todos os meus amigos!" />
        </div>
      </section>

      <section className="mt-20 p-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-24 text-center">
          <div className="border-2 border-blue-500 flex flex-col items-center justify-around px-3 py-16 rounded-2xl">
            <FaMap size={80} color='#3b82f6' />
            <h3 className="mt-4 font-bold text-2xl">Mais de 700 destinos</h3>
            <p className="mt-4 text-lg">Nosso time mantém nosso site sempre atualizado.</p>
          </div>

          <div className="border-2 border-yellow-500 flex flex-col items-center justify-around px-3 py-16 rounded-2xl">
            <FaCommentDollar size={80} color='#FACC13' />
            <h3 className="mt-4 font-bold text-2xl text-yellow-500">Melhor preço garantido</h3>
            <p className="mt-4 text-lg">Nosso time mantém nosso site sempre atualizado.</p>
          </div>

          <div className="border-2 border-blue-500 flex flex-col items-center justify-around px-3 py-16 rounded-2xl">
            <IoMdHelp size={80} color='#3b82f6' />
            <h3 className="mt-4 font-bold text-2xl">Suporte 24 horas</h3>
            <p className="mt-4 text-lg">Nosso time mantém nosso site sempre atualizado.</p>
          </div>

        </div>
      </section>
    </main>
  )
}
