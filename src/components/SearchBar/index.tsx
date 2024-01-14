'use client';

import { FiSearch } from "react-icons/fi";

export function SearchBar() {
    return (
        <form>   
            <div className="relative">
                <input type="search" id="search" className="block w-full p-2 ps-4 text-xl text-gray-500 border-2 rounded-lg focus:border-blue-500 focus:outline-none h-24" placeholder="Para onde você deseja ir?" required />
                <button type="submit" className="absolute end-6 bottom-8">
                    <FiSearch size={24} />
                </button>
            </div>
        </form>
    );
}