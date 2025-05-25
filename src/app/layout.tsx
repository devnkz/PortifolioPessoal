import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nyckolas Vieira",
  description: "Bem-vindo ao meu portfólio pessoal! Aqui você encontrará informações sobre mim, meus projetos, experiências e habilidades como desenvolvedor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
