import Link from "next/link";
import Image from "next/image";

import Logo from "@/img/Logo.png";
import LightPhone from "@/img/icons/lightPhoneIcon.png";

export default function Header() {
  return (
    <header className="Header">
      <div className="container">
        <div className="logo">
          <Image src={Logo} alt="Petra One" />
        </div>
        <nav className="nav">
          <Link href="#Description">OPIS</Link>
          <Link href="#Attractions">ATRAKCJE</Link>
          <Link href="#Contact">KONTAKT</Link>
          <Link href="#Advices">PORADY EKSPERTA</Link>
          <Link href="#Gallery">GALERIA</Link>
          <Link href="#Links">PRZYDATNE LINKI</Link>
        </nav>
        <div className="cta">
          <Image src={LightPhone} alt="Telefon" />
          <a href="tel:+48502736906">+48 502 736 906</a>
        </div>
      </div>
    </header>
  );
}
