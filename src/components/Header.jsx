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
          <a href="#Description">OPIS</a>
          <a href="#Attractions">ATRAKCJE</a>
          <a href="#Contact">KONTAKT</a>
          <a href="#Advices">PORADY EKSPERTA</a>
          <a href="#Gallery">GALERIA</a>
          <a href="#Links">PRZYDATNE LINKI</a>
        </nav>
        <div className="cta">
          <Image src={LightPhone} alt="Telefon" />
          <a href="tel:+48502736906">+48 502 736 906</a>
        </div>
      </div>
    </header>
  );
}
