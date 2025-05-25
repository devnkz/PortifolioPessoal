import Image from "next/image"
import { Button } from "./button"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiTypescript } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { IBM_Plex_Mono } from 'next/font/google';

const ibm = IBM_Plex_Mono({ subsets: ['latin'], weight: '400' })

interface CardProjetosProps {
    NomeProjeto: string,
    urlImage: string,
    altImage: string,
    DescricaoProjeto: string
}

export function CardProjetos({ NomeProjeto, urlImage, altImage, DescricaoProjeto }: CardProjetosProps) {
    return (
        <div className='space-y-6 border-b-2 border-zinc-600 py-4'>
            <h1 className='text-white text-2xl'>{NomeProjeto}</h1>
            <div className={`text-zinc-300 text-lg leading-relaxed text-justify`}>
                <Image
                    src={urlImage}
                    alt={altImage}
                    height={350}
                    width={600}
                    style={{ objectFit: 'contain' }}
                    className="rounded-lg shadow-lg max-w-full h-auto"
                    priority
                />
            </div>
            <div>
                <div className="space-x-4 flex items-center">
                    <h1 className="text-white font-bold text-xl">Tecnologias: </h1>
                    <div className="relative hover:-translate-y-1 transition-all duration-300 group">
                        <RiNextjsFill className="text-white h-8 w-8" />
                        <span className="hidden group-hover:block absolute top-10 left-0 bg-zinc-800 text-white p-2 rounded-lg">Next.js</span>
                    </div>

                    <div className="relative hover:-translate-y-1 transition-all duration-300 group">
                        <SiTypescript className="text-white h-8 w-8" />
                        <span className="hidden group-hover:block absolute top-10 left-0 bg-blue-800 text-white p-2 rounded-lg">TypeScript</span>
                    </div>

                    <div className="relative hover:-translate-y-1 transition-all duration-300 group">
                        <RiTailwindCssFill className="text-white h-8 w-8" />
                        <span className="hidden group-hover:block absolute top-10 left-0 bg-blue-950 text-white p-2 rounded-lg">TailwindCSS</span>
                    </div>

                    <div className="relative hover:-translate-y-1 transition-all duration-300 group">
                        <TbApi className="text-white h-8 w-8" />
                        <span className="hidden group-hover:flex absolute top-10 left-0 bg-orange-600 text-white p-2 rounded-lg whitespace-nowrap">API REST</span>
                    </div>
                </div>

                <div className="flex flex-col">
                    <h1 className="font-bold text-white">Descrição:</h1>
                    <p className={`${ibm.className} text-zinc-400 w-3/4`}>{DescricaoProjeto}</p>
                </div>
            </div>
            <div className='flex gap-6'>
                <Button textButton='Ver deploy' />
                <Button textButton='Código' />
            </div>
        </div>
    )
}