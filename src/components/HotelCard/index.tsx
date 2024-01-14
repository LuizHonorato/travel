import Image, { StaticImageData } from "next/image";
import { FaBed, FaStar } from 'react-icons/fa6';
import { MdFreeBreakfast } from 'react-icons/md';

interface HotelCardProps {
    title: string;
    reviews: number;
    price: number;
    image: StaticImageData;
}

export function HotelCard({ title, reviews, price, image}: HotelCardProps) {
    return (
        <div className="max-w-full rounded overflow-hidden shadow-lg bg-white">
            <Image className="w-full" src={image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl text-left mb-2">{title}</div>
                <div className="flex justify-between mt-4">
                    <div className="flex gap-1">
                        <FaStar color='#FACC13' />
                        <FaStar color='#FACC13' />
                        <FaStar color='#FACC13' />
                        <FaStar color='#FACC13' />
                        <FaStar color='#FACC13' />
                    </div>
                    <span className="text-sm">{reviews} avaliações</span>
                </div>
                <div className="flex gap-4 mt-4">
                    <div className="flex items-center gap-1">
                        <FaBed size={24} color='#3b82f6' />
                        <span className="text-sm">King Size</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MdFreeBreakfast size={24} color='#3b82f6' />
                        <span className="text-sm">Café da manhã</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-between px-6 pt-4 pb-2">
                <span className="font-medium">Diária</span>
                <span className="font-medium">{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
            </div>
        </div>
    );
}