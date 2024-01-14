import { FaStar } from 'react-icons/fa6';

interface TestimonyProps {
    customerName: string;
    text: string;
}

export function Testimony({ customerName, text }: TestimonyProps) {
    return (
        <div className='border-2 border-gray-100 p-10 flex flex-col rounded'>
            <h3 className='font-medium text-lg text-center'>{customerName}</h3>
            <div className="flex items-center justify-center gap-1 mt-4">
                <FaStar color='#FACC13' />
                <FaStar color='#FACC13' />
                <FaStar color='#FACC13' />
                <FaStar color='#FACC13' />
                <FaStar color='#FACC13' />
            </div>
            <p className='text-lg mt-4'>{text}</p>
        </div>
    );
}