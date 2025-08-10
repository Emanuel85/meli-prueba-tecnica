import type { Metadata } from "next";
import "./globals.css";
import HeaderCustom from "../ux-ui/Header/HeaderCustom";
import { Roboto, Work_Sans } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MELI Prueba Técnica",
  description: "SPA de prueba técnica de MELI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <HeaderCustom />
        <main>{children}</main>
      </body>
    </html>
  );
}
