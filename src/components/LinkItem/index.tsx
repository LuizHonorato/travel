'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkItemProps {
    href: string;
    title: string;
}

export function LinkItem({ href, title }: LinkItemProps) {
    const pathname = usePathname();
    
    return (
        <Link href={href}>
            <li 
                className={`font-medium 
                            text-xs mt-2 sm:text-lg md:mt-0 
                            cursor-pointer ${ pathname === href ? 'text-blue-500' : 'text-gray-500' } 
                            hover:text-blue-500 
                            duration-300`}>
                {title}
            </li>
        </Link>
    );
}