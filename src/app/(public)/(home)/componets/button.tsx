export function Button({ textButton, redirecionamento }: { textButton: string, redirecionamento: string }) {
    return (
        <a href={redirecionamento} className='text-white bg-zinc-800 p-4 rounded-lg hover:translate-x-2 hover:bg-blue-800 transition-all duration-300 cursor-pointer w-1/4'>{textButton}</a>
    )
}