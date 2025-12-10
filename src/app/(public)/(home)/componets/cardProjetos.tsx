import Image from "next/image";
import { Button } from "./button";
import { IBM_Plex_Mono } from "next/font/google";
import { IconType } from "react-icons";

const ibm = IBM_Plex_Mono({ subsets: ["latin"], weight: "400" });

interface TecnologiaItem {
  nome: string;
  icon: IconType;
  cor?: string;
}

interface CardProjetosProps {
  NomeProjeto: string;
  urlImage: string;
  altImage: string;
  DescricaoProjeto: string;
  tecnologias: TecnologiaItem[];
  deploy?: string;
  codigo?: string;
}

export function CardProjetos({
  NomeProjeto,
  urlImage,
  altImage,
  DescricaoProjeto,
  tecnologias,
  deploy,
  codigo,
}: CardProjetosProps) {
  return (
    <div className="space-y-6 border-b-2 border-zinc-600 py-4">
      <h1 className="text-white text-2xl">{NomeProjeto}</h1>

      <Image
        src={urlImage}
        alt={altImage}
        height={350}
        width={600}
        style={{ objectFit: "contain" }}
        className="rounded-lg shadow-lg max-w-full h-auto bg-white"
        priority
      />

      <div>
        <div className="space-x-4 flex items-center">
          <h1 className="text-white font-bold text-xl">Tecnologias:</h1>

          {tecnologias.map((tec, index) => {
            const Icon = tec.icon;
            return (
              <div
                key={index}
                className="relative hover:-translate-y-1 transition-all duration-300 group"
              >
                <Icon className="text-white h-8 w-8" />

                <span
                  className={`hidden group-hover:block absolute top-10 left-0 text-white p-2 rounded-lg whitespace-nowrap ${
                    tec.cor ?? "bg-zinc-700"
                  }`}
                >
                  {tec.nome}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col mt-4">
          <h1 className="font-bold text-white">Descrição:</h1>
          <p className={`${ibm.className} text-zinc-400 w-full lg:w-3/4`}>
            {DescricaoProjeto}
          </p>
        </div>
      </div>

      <div className="flex gap-6">
        {deploy && <Button textButton="Ver deploy" redirecionamento={deploy} />}

        {codigo && <Button textButton="Código" redirecionamento={codigo} />}
      </div>
    </div>
  );
}
