import { IBM_Plex_Mono, Raleway } from "next/font/google";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";

import { Button } from "./componets/button";
import { CardTecnologia } from "./componets/cardTecnologia";
import { CardProjetos } from "./componets/cardProjetos";
import { ButtonVoltar } from "./componets/buttonVoltar";

const ibm = IBM_Plex_Mono({ subsets: ["latin"], weight: "400" });
const raleway = Raleway({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (
    <div className="bg-zinc-950 w-full flex flex-col justify-center items-center">
      <header
        className={`${ibm.className} w-4/5 xl:max-w-[1600px] h-fit p-4 bg-zinc-800 rounded-b-xl flex justify-center items-center`}
      >
        <nav className="w-full flex justify-evenly items-center p-4">
          <h1 className="text-zinc-300 font-bold">DEV NYCKZ</h1>
          <ul className="flex space-x-8 text-lg text-zinc-400">
            <li className="hover:text-white transition-all duration-300 cursor-pointer">
              <a href="#home">Início</a>
            </li>
            <li className="hover:text-white transition-all duration-300 cursor-pointer">
              <a href="#sobre">Sobre</a>
            </li>
            <li className="hover:text-white transition-all duration-300 cursor-pointer">
              <a href="#projetos">Projetos</a>
            </li>
            <li className="hover:text-white transition-all duration-300 cursor-pointer">
              <a href="#contato">Contato</a>
            </li>
          </ul>
          <div className="flex space-x-4 text-4xl">
            <a
              href="https://github.com/devnkz"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group cursor-pointer"
            >
              <VscGithub className="text-zinc-300 hover:-translate-y-1 hover:text-white transition-all duration-300" />
              <span className="hidden group-hover:flex absolute left-0 top-10 text-sm bg-zinc-500 text-white p-2 rounded-lg">
                Github
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/nyckolas-vieira-853b08297/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group cursor-pointer"
            >
              <FaLinkedin className="text-zinc-300 hover:-translate-y-1 hover:text-blue-400 transition-all duration-300 cursor-pointer" />
              <span className="hidden group-hover:flex absolute left-0 top-10 text-sm bg-zinc-500 text-white p-2 rounded-lg">
                LinkedIn
              </span>
            </a>
          </div>
        </nav>
      </header>

      <main className="p-4 my-24 w-full lg:max-w-[1200px]">
        <section id="home" className="flex justify-between items-center">
          <div className={`${raleway.className} space-y-6 w-2/4`}>
            <div>
              <h1 className="text-white text-6xl">Nyckolas Vieira</h1>
              <h2 className="text-zinc-400 text-3xl">FRONT-END DEVELOPER</h2>
            </div>

            <p className={`${ibm.className} text-zinc-400 text-justify`}>
              Atualmente atuo como freelancer, desenvolvendo soluções com as
              principais tecnologias do ecossistema web moderno, como{" "}
              <span className="font-bold text-white">
                Next.js, Tailwind CSS e TypeScript/JavaScript
              </span>
              . Tenho experiência no consumo de{" "}
              <span className="font-bold text-white">APIs REST</span> e foco em
              criar interfaces responsivas, performáticas e bem estruturadas.
              Apesar do meu foco ser o front-end, possuo conhecimentos em
              back-end que me permitem desenvolver aplicações básicas e
              integrações essenciais.
            </p>

            <div className="space-x-4 mt-12">
              <Button textButton="Ver projetos" redirecionamento="#projetos" />
              <Button
                textButton="Comece seu projeto comigo"
                redirecionamento="#contato"
              />
            </div>
          </div>

          <div className="flex justify-center items-center h-[400px] w-[400px]">
            <Image
              src={"/img_perfil.jpg"}
              alt="foto pessoal"
              height={400}
              width={400}
              style={{ objectFit: "cover" }}
              className="rounded-full w-[400px] h-[400px]"
            />
          </div>
        </section>

        <section
          id="sobre"
          className={`${raleway.className} flex justify-between mt-24`}
        >
          <div className="border-r-2 border-zinc-600 sticky top-14 h-fit space-y-4 pr-8">
            <h1 className="text-white text-xl text-center">
              Conhecimentos Técnicos
            </h1>
            <div className="flex flex-col justify-center space-y-6">
              <CardTecnologia
                textButton="Next.js"
                hoverButton="hover:bg-black"
              />
              <CardTecnologia
                textButton="TypeScript"
                hoverButton="hover:bg-blue-400"
              />
              <CardTecnologia
                textButton="JavaScript"
                hoverButton="hover:bg-yellow-400"
              />
              <CardTecnologia
                textButton="Tailwind CSS"
                hoverButton="hover:bg-blue-600"
              />
              <CardTecnologia
                textButton="Jest"
                hoverButton="hover:bg-red-600"
              />
              <CardTecnologia
                textButton="Git/Github"
                hoverButton="hover:bg-zinc-800"
              />
              <CardTecnologia
                textButton="APIs REST"
                hoverButton="hover:bg-orange-500"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 w-3/4">
            <div className="flex flex-col gap-8 border-b-2 border-zinc-600 py-8 px-4">
              <h1 className="text-4xl text-white">Sobre mim</h1>
              <div
                className={`${ibm.className} text-zinc-300 text-lg leading-relaxed text-justify`}
              >
                <p>
                  Sou apaixonado por tecnologia e desenvolvimento web, sempre
                  buscando aprender e evoluir minhas habilidades. Atualmente,
                  estou no 3º ano do ensino médio integrado com Informática para
                  Internet, onde tenho a oportunidade de aplicar meus
                  conhecimentos em projetos reais como estagiário. Gosto de
                  desafios, de trabalhar em equipe, prezando por código limpo,
                  boas práticas e interfaces intuitivas. Também sou fã de futsal
                  e jogos competitivos, que me ajudam a desenvolver espírito de
                  equipe e foco. Estou sempre aberto a novas experiências e
                  tecnologias que possam agregar ao meu crescimento
                  profissional.
                </p>
              </div>

              <Button
                textButton="Baixar curriculo"
                redirecionamento="/Curriculo.pdf"
              />
            </div>

            <div id="projetos" className="flex flex-col gap-8 px-4">
              <h1 className="text-4xl text-white">Projetos</h1>
              <CardProjetos
                NomeProjeto="Estudare Sistema"
                urlImage="/estudare_print.jpg"
                altImage="Print do projeto Estudare Sistema"
                DescricaoProjeto="Este sistema foi desenvolvido como projeto de conclusão de curso (TCC). O objetivo era criar uma plataforma complementar de ensino, onde alunos podem criar grupos, interagir, tirar dúvidas e desenvolver projetos extracurriculares."
              />
              <CardProjetos
                NomeProjeto="Delivery-Now"
                urlImage="/Delivery-now_print.jpg"
                altImage="Print do projeto Delivery-Now"
                DescricaoProjeto="Aplicação desenvolvida para facilitar pedidos de delivery, proporcionando uma experiência rápida e intuitiva tanto para clientes quanto para estabelecimentos."
              />
            </div>
          </div>
        </section>

        <section
          id="contato"
          className="flex flex-col md:flex-row justify-between items-center gap-8 mt-24 bg-zinc-900 rounded-xl p-8 shadow-lg"
        >
          <div className="flex-1 flex flex-col gap-4">
            <h1 className={`${raleway.className} text-3xl text-white mb-2`}>
              Se interessou no que viu? Fale comigo!
            </h1>
            <p className={`${ibm.className} text-zinc-400 text-lg`}>
              Estou disponível para novas oportunidades, parcerias ou apenas
              para trocar uma ideia sobre tecnologia. Sinta-se à vontade para
              entrar em contato!
            </p>
            <div className={`${raleway.className} flex gap-4 mt-4`}>
              <Button
                textButton="WhatsApp"
                redirecionamento="https://wa.me/5511974011996"
              />
            </div>
          </div>
          <form
            className={`${raleway.className} flex-1 flex flex-col gap-4 w-full max-w-md bg-zinc-800 p-6 rounded-lg`}
          >
            <input
              type="text"
              placeholder="Seu nome"
              className="bg-zinc-900 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
            <input
              type="email"
              placeholder="Seu email"
              className="bg-zinc-900 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
            <textarea
              placeholder="Sua mensagem"
              className="bg-zinc-900 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-600 resize-none"
              rows={4}
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold cursor-pointer py-3 rounded-lg transition-colors duration-300"
            >
              Enviar mensagem
            </button>
          </form>
        </section>
      </main>

      <footer className="w-full lg:max-w-[1200px] mx-auto py-8 flex flex-col md:flex-row justify-between items-center border-t border-zinc-700 mt-16 gap-4">
        <span className={`${ibm.className} text-zinc-400 text-sm`}>
          © {new Date().getFullYear()} Nyckolas Vieira. Todos os direitos
          reservados.
        </span>
        <div className="flex space-x-4 text-2xl">
          <a
            href="https://github.com/devnkz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <VscGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nyckolas-vieira-853b08297/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-400 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </footer>

      <ButtonVoltar />
    </div>
  );
}
