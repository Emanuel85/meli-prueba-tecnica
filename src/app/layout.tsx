import type { Metadata } from "next";
import "./globals.css";
import HeaderCustom from "../ux-ui/Header/HeaderCustom";
import { Roboto } from "next/font/google";
import favIcon from '../../public/favicon.ico'


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MELI Prueba Técnica",
  description: "SPA de prueba técnica de MELI",
  icons: {
    icon: "/favicon.ico", // Aquí defines el favicon
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href={favIcon.src} />
      </head>
      <body className={roboto.className}>
        <HeaderCustom />
        <main>{children}</main>
      </body>
    </html>
  );
}
