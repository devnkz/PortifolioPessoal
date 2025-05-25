'use client';

import { FaArrowUp } from "react-icons/fa6";
import { IBM_Plex_Mono } from 'next/font/google';
import { useEffect, useRef } from "react";

const ibm = IBM_Plex_Mono({ subsets: ['latin'], weight: '400' });

export function ButtonVoltar() {
    const btnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const btnReturn = btnRef.current;
        if (!btnReturn) return;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 300) {
                btnReturn.classList.add('Aparecer');
                btnReturn.classList.remove('Sumir');
            } else {
                btnReturn.classList.remove('Aparecer');
                btnReturn.classList.add('Sumir');
            }
        };

        const handleClick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        window.addEventListener('scroll', handleScroll);
        btnReturn.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            btnReturn.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <button
            ref={btnRef}
            className={`${ibm.className} btn-voltar Sumir fixed bottom-4 right-4 bg-zinc-600 text-white rounded-lg cursor-pointer p-4 hover:-translate-y-1 hover:text-blue-300 transition-all duration-300 group`}
        >
            <FaArrowUp />
            <span className="hidden group-hover:flex absolute top-1 left-[-170px] bg-zinc-900 text-white p-2 rounded-lg whitespace-nowrap">
                Voltar ao topo
            </span>
        </button>
    );
}
