import Image, { StaticImageData } from "next/image";

interface DestinationCardProps {
    title: string;
    period: string;
    price: number;
    image: StaticImageData;
}

export function DestinationCard({ title, period, price, image }: DestinationCardProps) {
    return (
        <div className="max-w-full rounded overflow-hidden shadow-lg bg-white">
            <Image className="w-full" src={image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl text-left mb-2">{title}</div>
            </div>
            <div className="flex justify-between px-6 pt-4 pb-2">
                <span className="font-medium">{period}</span>
                <span className="font-medium">{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
            </div>
        </div>
    );
}