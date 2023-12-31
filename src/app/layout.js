import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer";
import "@/scss/main.scss";

import { Poppins, Nunito } from "next/font/google";

const poppins = Poppins({ subsets: ["latin-ext"], weight: ["400", "500", "600", "700", "800"] });
const nunito = Nunito({ subsets: ["latin-ext"], weight: ["400", "500", "600", "700", "800"] });

export const metadata = {
  title: "PetraOne - Apartament Turcjia, Avsallar",
  description: "Ekonomiczne wakacje z wysokim standardem w Turcji - Avsallar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${poppins.className} ${nunito.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
