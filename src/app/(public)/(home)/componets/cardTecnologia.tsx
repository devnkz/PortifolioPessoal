interface CardTecnologiaProps {
    textButton: string,
    hoverButton: string
}

export function CardTecnologia({ textButton, hoverButton }: CardTecnologiaProps) {
    return (
        <div className={`bg-zinc-500 text-white px-6 py-3 cursor-default rounded-lg shadow ${hoverButton} hover:-translate-y-1 transition-all duration-300 font-bold flex items-center gap-2`}>
            <span>{textButton}</span>
        </div >
    )
}