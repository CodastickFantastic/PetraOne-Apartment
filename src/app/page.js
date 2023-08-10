import Image from "next/image";

import CalendarIcon from "@/img/icons/calendarIcon.png";
import IconTile from "@/components/IconTile";
import GuestsIcon from "@/img/icons/guestsIcon.png";
import RoomIcon from "@/img/icons/roomIcon.png";
import ToiletIcon from "@/img/icons/toiletIcon.png";
import KitchenIcon from "@/img/icons/kitchenIcon.png";
import PoolIcon from "@/img/icons/poolIcon.png";
import TvIcon from "@/img/icons/tvIcon.png";
import ElevatorIcon from "@/img/icons/elevatorIcon.png";
import AirConditioningIcon from "@/img/icons/airConditioningIcon.png";
import LocationIcon from "@/img/icons/locationIcon.png";
import AirportIcon from "@/img/icons/airportIcon.png";
import BeachIcon from "@/img/icons/beachIcon.png";
import UserIcon from "@/img/icons/userIcon.png";
import PhoneIcon from "@/img/icons/darkPhoneIcon.png";
import MailIcon from "@/img/icons/mailIcon.png";
import BankIcon from "@/img/icons/bankIcon.png";

import Photo1 from "@/img/photos/photo1.jpeg";
import Photo2 from "@/img/photos/photo2.jpeg";
import Photo3 from "@/img/photos/photo3.jpeg";
import Photo4 from "@/img/photos/photo4.jpg";
import Photo5 from "@/img/photos/photo5.jpg";
import Photo6 from "@/img/photos/photo6.jpeg";
import Photo7 from "@/img/photos/photo7.jpeg";
import Photo8 from "@/img/photos/photo8.jpeg";
import Photo9 from "@/img/photos/photo9.jpeg";
import Photo10 from "@/img/photos/photo10.jpeg";
import Photo11 from "@/img/photos/photo11.jpeg";
import Photo12 from "@/img/photos/photo12.jpeg";
import Photo13 from "@/img/photos/photo13.jpeg";
import Alanya from "@/img/photos/alanya.jpg";
import Bazaar from "@/img/photos/bazaar.jpg";
import Dim from "@/img/photos/dim.jpg";
import DimCave from "@/img/photos/dimCave.jpg";
import RedTower from "@/img/photos/redTower.jpg";
import Spadere from "@/img/photos/spadere.jpg";
import AlanyaLove from "@/img/photos/alanyaLove.jpg";
import CatHouse from "@/img/photos/catHouse.jpg";
import Damlatas from "@/img/photos/damlatas.jpg";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="HeroSection">
        <div className="left">
          <h1>EKONOMICZNE WAKACJE Z WYSOKIM STANDARDEM W AVSALLAR</h1>
          <p className="slogan">
            Bo najwaniejsze <br />
            są wspomnienia płynące z wakacji...
          </p>
          <a href="#Contact" className="button">
            <Image src={CalendarIcon} alt="Ikona kalendarza" />
            ZAREZERWUJ NOCLEG JUŻ DZIŚ
          </a>
          <div className="standards">
            <p>Standard Apartamentu</p>
            <div className="row">
              <IconTile icon={GuestsIcon} title="Do 4 osób" />
              <IconTile icon={RoomIcon} title="2 Pokoje" />
              <IconTile icon={ToiletIcon} title="1 Łazienka" />
              <IconTile icon={KitchenIcon} title="Aneks Kuchenny" />
            </div>
            <div className="row">
              <IconTile icon={PoolIcon} title="Basen" />
              <IconTile icon={TvIcon} title="Telewizja" />
              <IconTile icon={ElevatorIcon} title="Winda" />
              <IconTile icon={AirConditioningIcon} title="Klimatyzacja" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="row">
            <Image src={Photo1} alt="Apartament Wewntrz" className="photo photo1" />
          </div>
          <div className="row">
            <Image src={Photo2} className="photo photo2" alt="Apartament Wewntrz" />
            <Image src={Photo3} className="photo photo3" alt="Apartament Wewntrz" />
          </div>
        </div>
      </section>

      <section className="Description" id="Description">
        <h2>Opis i Lokalizacja</h2>
        <div className="row">
          <Image src={Photo4} className="photo photo4" alt="Apartament Zewntrz" />
          <p>
            Mili Państwo, mam do zaoferowania, na spędzenie relaksującego wypoczynku, apartament w miejscowości Avsallar 15 km od Alanyi i
            100 km od lotniska. <br />
            <br />
            Apateament ma 55 m2, znajduje się na trzecim piętrze w nowym budownictwie na rozwijającej się dzielnicy mieszkaniowej.
            <br />
            <br />
            Apatrament posiada 2 pokoje, aneks kuchenny oraz oczywiście łazienkę.
          </p>
        </div>
        <div className="row">
          <div className="extended">
            <p>
              Apartament pomieści 4-osobową rodzinę, lub dowolną inną konfigurację. Jest w pełni wyposażony i umeblowany. <br /> <br />
              Ponadto w apartamencie znajduje się telewizor oraz klimatyzacja, która umili nam.
            </p>
            <div className="tiles">
              <div className="tile">
                <Image src={LocationIcon} alt="Ikona lokalizacji" />
                <p>
                  Avsallar <br /> 15 km do Alanyi
                </p>
              </div>
              <div className="tile">
                <Image src={AirportIcon} alt="Ikona lotniska" />
                <p>
                  100 km <br /> do Lotniska
                </p>
              </div>
              <div className="tile">
                <Image src={BeachIcon} alt="Ikona play" />
                <p>
                  30 min <br /> spacerem do morza
                </p>
              </div>
            </div>
          </div>
          <Image src={Photo5} className="photo photo5" alt="Apartament Zewntrz" />
        </div>
        <div className="addInfo">
          <p>Co zapewniamy?</p>
          <ul>
            <li>przede wszystkim pomoc w organizacji wyjazdu</li>
            <li>podpowiedź jak zarezerwowa bilet lotniczy</li>
            <li>podpowiedź jak ubezpieczyć swoje zdrowie (bardzo ważne!)</li>
            <li>podpowiedź jak zorganizować sobie transport (rekomendujemy wynajem pojazdu)</li>
          </ul>
        </div>
      </section>

      <section className="Attractions" id="Attractions">
        <h2>Atrakcje</h2>
        <p className="description">
          Wyjazdy to przedewszystkim podróże i nowe doznania.
          <br />
          Dowiedz się na jakie atrakcje możesz liczyć wybierająć się na podróż do Turcji
        </p>
        <div className="tiles">
          <div className="tile">
            <div className="image">
              <Image src={Bazaar} alt="Ikona lokalizacji" />
              <Link href="https://www.pexels.com/pl-pl/zdjecie/swiatla-lampy-wystawa-zakupy-7314474/" target="_blank">
                Photo by: Meruyert Gonullu{" "}
              </Link>
            </div>
            <h3 className="title">Turkish Bazaar</h3>
            <p className="description">
              Nasz ulubiony bazar z „replikami”, organizowany w każdą środę. <br />
              <br /> Znajdzie na nim państwo rozmaite ubrania oraz akcesoria, o naprawdę wysokiej jakości. <br />
              <br /> Ponadto będziecie mogli również skosztować specjałów kuchni Tureckiej i nie tylko. <br />
              <br /> Obowiązkowy punkt każdego wyjazdu!
            </p>
          </div>
          <div className="tile">
            <div className="image">
              <Image src={Alanya} alt="Alanya nocą" />
              <Link href="https://www.pexels.com/pl-pl/zdjecie/snieg-jasny-morze-miasto-17674087/" target="_blank">
                Photo by: Hakan Yasar
              </Link>
            </div>
            <h3 className="title">Alanya</h3>
            <p className="description">
              Alanya to jedno z najczęściej wybieranych miejsc do wypoczynku w Turcji. To miasto które liczy sobie 328 tyś mieszkańców i
              należy do prowincji Antalyi. <br />
              <br />
              Najbardziej charakterystycznym punktem w Alanyi jest wysunięty w morze cypel na którym znajdują się pozostałości twierdzy
              czyli dzisiejszego Kale. <br />
              <br />
              Miasto które koniecznie trzeba odwiedzić!
            </p>
          </div>
          <div className="tile">
            <div className="image">
              <Image src={DimCave} alt="Alanya nocą" />
              <Link href="/" target="_blank">
                Photo by: ?
              </Link>
            </div>
            <h3 className="title">Jaskinia Dim</h3>
            <p className="description">
              Jaskini Dim położona jest 12 km od Alanyi na wysokości 232 m n.p.m. w przepięknych górach Taurus. Została odkryta stosunkowo
              niedawno a otwarto w 1998 roku dla odwiedzających. <br /> <br />
              Temperatura w środku jest stała i wynosi 18 stopni. Otoczona jest stalagmitami i stalaktytami a na swoim dnie kryje małe
              jeziorko głębokie na 2 m. <br /> <br /> Do jaskini nie dojeżdża żaden autobus.
              <br /> Wstęp jest płatny 16 TL za os. gotówką.
            </p>
          </div>
          <div className="tile">
            <div className="image">
              <Image src={Dim} alt="Dim Cay" />
              <Link href="/" target="_blank">
                Photo by: ?
              </Link>
            </div>
            <h3 className="title">Dim Cay</h3>
            <p className="description">
              To najbardziej ulubione miejsce szczególnie w szczycie sezonu gdy żar leje się z nieba. Dim Cay to nazwa rzeki która leży
              nieopodal Alanyi w górach Taurus. Znajduje się tam kilkadziesiąt restauracji wodnych które szczególnie w weekend cieszą się
              dużą popularnością wśród tubylców. <br />
              <br />
              Wśród szumu rzeki i pięknym krajobrazie siedzi się nad poziomem rzeki na dryfujących platformach. W praktycznie każdej
              restauracji jest basen ze zjeżdżalniami lub można się wykapać w zimnej górskiej rzece.
              <br />
              <br />
              Restauracje oferują swoim gościom bogate menu. Można tu zjeść przez siebie złowionego pstrąga lub mięso z grilla.
              <br />
              <br /> Dojechać tu można autobusem numer 10 do Dim Cay
            </p>
          </div>
          <div className="tile">
            <div className="image">
              <Image src={RedTower} alt="Czewona Wieża" />
              <Link href="/" target="_blank">
                Photo by: ?
              </Link>
            </div>
            <h3 className="title">Czerwona Wieża</h3>
            <p className="description">
              Czerwona wieża została wybudowana w 1226 roku przez sułtana Alaeddina Keykubata i stanowi ważny zabytek architektury
              seldżuckiej jak i w dzisiejszych czasach jest uważana za wizytówkę Alanyi. Zlokalizowana jest tuz obok portu. <br />
              <br /> Wysokość budynku to 33 m a do szczytu prowadzi 85 schodów. W wnętrzu znajduje się ekspozycja etnograficzna.
              <br />
              <br />
              Idąc dalej murami obronnymi dotrzeć można do średniowiecznej stoczni. W środku można zobaczyć jak budowano statki, narzędzia i
              nawigacje z tamtych czasów. <br />
              <br />
              Bilet wstępu do Czerwonej wieży i stoczni można zakupić w kasie przy Czerwonej Wieży jako łączony.
            </p>
          </div>
          <div className="tile">
            <div className="image">
              <Image src={Spadere} alt="Wąwóz Spadere" />
              <Link href="/" target="_blank">
                Photo by: ?
              </Link>
            </div>
            <h3 className="title">Kanion Spadere</h3>
            <p className="description">
              Kanion Sapadere oddalony jest od Alanyi ok. 40 km w kierunku wschodnim. Do niedawna był nieznanym miejscem, dopiero w 2008
              roku został oddany do użytku. <br /> <br /> Podczas spaceru można zaobserwować tu formacje skalane utworzone przez wiatr i
              wodę oraz liczne wodospady. Najpiękniejszy i największy znajduje się na samym końcu kanionu i tworzy małe jeziorko. <br />{" "}
              <br />
              Na kładkach wybudowano również liczne zejścia do wody więc można tu zażyć również kąpieli w górskich potokach. Ale uwaga nawet
              w najcieplejszym sezonie woda jest zimna i maksymalnie 12 stopni. Kanion Sapadere stał się bardzo popularnym miejscem do
              zwiedzania.
            </p>
          </div>
          <div className="tile">
            <div className="image">
              <Image src={AlanyaLove} alt="Alanya Love" />
              <Link href="/" target="_blank">
                Photo by: ?
              </Link>
            </div>
            <h3 className="title">Kanion Spadere</h3>
            <p className="description">
              To właśnie tu z znajduje się napis niczym z Hollywood. <br />
              <br />Z tarasów widokowych rozciąga się niesamowity panoramiczny widok na całe miasto i wzgórze Kale. Znajdują się tu miejsca
              piknikowe, restauracje i kawiarnie i place zbaw dla dzieci. <br />
              <br />W amfiteatrze odbywają się liczne występy i pokazy. <br />
              <br />
              Można tu dotrzeć autobusem nr 8.
            </p>
          </div>
          <div className="tile">
            <div className="image">
              <Image src={CatHouse} alt="Park miejski i dom kotów" />
              <Link href="/" target="_blank">
                Photo by: ?
              </Link>
            </div>
            <h3 className="title">Park oraz Dom Kotów</h3>
            <p className="description">
              Znajduje się w samym centrum miasta. Idąc do portu od pomnika Ataturka na pewno na niego natraficie. <br />
              <br /> Można tu przysiąść na licznych ławeczkach i spoglądać na sporą fontannę . Idąc w stronę portu na pewno też natraficie
              na wylegujące się w trawie koty. <br />
              <br />
              Urząd miasta zbudował tu dla nich domy, dokarmia je i dba o nie. Jeśli jesteś miłośnikiem tych zwierząt na pewno powinieneś
              odwiedzić to miejsce.
            </p>
          </div>
          <div className="tile">
            <div className="image">
              <Image src={Damlatas} alt="Jaskinia Damlatas" />
              <Link href="/" target="_blank">
                Photo by: ?
              </Link>
            </div>
            <h3 className="title">Jaskinia Damlatas</h3>
            <p className="description">
              Została odkryta 1948 roku przez przypadek i do dziś jest jedną z najpopularniejszych atrakcji w Alanyi. Znajduje się po
              zachodniej stronie półwyspu tuż przy plaży Kleopatry. <br />
              <br /> Jej nazwa oznacza Kapiący Kamień co nawiązuje do jej charakteru. Nie jest to duża jaskinia ale posiada właściwości
              sprzyjające astmatykom. <br />
              <br /> We wnętrzu znajduję się stalaktyty, z których kapie woda, najlepiej można to zaobserwować zimą. <br />
              <br /> Wstęp do jaskini jest płatny 6 TL za os (2020)
            </p>
          </div>
        </div>
      </section>

      <section className="Contact" id="Contact">
        <h2>Zarezerwuj swój pobyt w PetraOne Apartment</h2>
        <div className="info">
          <div className="col">
            <form>
              <label htmlFor="name">
                Imię i Nazwisko
                <input type="text" name="name" id="name" />
              </label>
              <label htmlFor="email">
                Adres Email
                <input type="email" name="email" id="email" />
              </label>
              <label htmlFor="phone">
                Numer Telefonu
                <input type="tel" name="phone" id="phone" />
              </label>
              <label htmlFor="person">
                Ilość Osób
                <input type="number" name="person" id="person" />
              </label>
              <label htmlFor="dateFrom">
                Data Przyjazdu
                <input type="date" name="dateFrom" id="dateFrom" />
              </label>
              <label htmlFor="dateTo">
                Data Wyjazdu
                <input type="date" name="dateTo" id="dateTo" />
              </label>
              <label htmlFor="message">
                Wiadomość
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
              </label>
              <button type="submit">Wyślij Wiadomość</button>
            </form>
          </div>
          <div className="col">
            <div className="tiles">
              <div className="tile">
                <Image src={UserIcon} alt="Ikona usera" />
                <p>Tomasz Sroka</p>
              </div>
              <div className="tile">
                <Image src={PhoneIcon} alt="Ikona telefonu" />
                <p>+48 502 736 906</p>
              </div>
              <div className="tile">
                <Image src={MailIcon} alt="Ikona maila" />
                <p>srokatomasz@wp.pl</p>
              </div>
              <div className="tile">
                <Image src={LocationIcon} alt="Ikona lokalizacji" />
                <p>
                  Petra 1, Avsallar <br />
                  07410 Alanya/Antalya, Turcja
                </p>
              </div>
              <div className="tile">
                <Image src={BankIcon} alt="Ikona konta bankowego" />
                <p>
                  Bank Pekao SA <br />
                  60 1240 2223 1111 0000 4552 9360
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Advices" id="Advices">
        <h2>Porady Eksperta</h2>
        <p className="info">
          Jak zorganizować wyjazd ? <br /> Na podstawie moich doświadczeń z kilkudziesięciu samodzielnych wyjazdów do Turcji chcę Państwu
          przekazać parę informacji organizacyjnych jak zorganizować swój wyjazd. <br />{" "}
          <strong>Odnośniki do poruszonych poniżej tematów znajdą Państwo w sekcji „przydatne linki”</strong>
        </p>
        <p>
          <strong>1. Bilety lotnicze </strong> - im wcześniej zakupiony bilet lotniczy tym niższa cena. To znana zasada. Zalecam lot
          bezpośredni, który trwa 3h. Poruszamy się z dowodem osobistym wiza jest gratis (otrzymamy kwitek od tureckiego pogranicznika,
          który jest potrzebny np. przy zakupie karty sim). Strona, którą poleciłem to multiwyszukiwarka biletów. Zwykle bilet zawiera w
          cenie tylko bagaż podręczny (plecak, który może się zmieścić pod siedzeniem pasażera przed nami i mała walizka). Należy zwrócić
          uwagę na tzw. dodatkowe opcje proponowane przez linie lotnicze, które zwiększają nam cenę biletu. Jeżeli natomiast jesteście
          Państwo fanami last minute to polecam próbę rezerwacji biletów przez biuro podróży Wakacje.pl w Kozienicach. To biuro ma oferty
          biletów czarterowych z rezygnacji i w cenie jest zwykle bagaż nadawany (duży). Warto wiedzieć, że podróżując z bagażem podręcznym
          możemy na 24h przed wylotem możemy zrobić check-in (odprawę lotniskową) z domu unikając kolejek do nadania bagażu na lotnisku i
          udając się bezpośrednio na kontrolę graniczną. Bardzo ważną rzeczą jest sprawdzanie godziny wylotu na stronie przewoźnika zarówno
          do i z kraju ponieważ z zasady linie lotnicze przesyłają tylko mailem taką informację. <br />
          <br /> <strong>2. Ubezpieczenie turystyczne </strong> - wiadomo za granicą zdarzają (czego nie życzę) różne sytuacje zdrowotne.
          Przy nie wielkich dolegliwościach rekomenduję kontakt z apteką, gdyż w Turcji praktycznie wszystkie leki są bez recepty.
          Farmaceuta doradzi co można zastosować po opisaniu objawów. Jeżeli nastąpi gorsze zdarzenie zdrowotne proponuję udać się do
          szpitala w Alanyi. Do tego właśnie potrzebujemy ubezpieczenie turystyczne. Ja rekomenduję ubezpieczenie z Axa ale oczywiście to
          Państwa wybór. W Avsallarze są gabinety współpracujące z Axa. Służba zdrowia w Turcji dla turystów jest odpłatna więc należy
          zabezpieczyć się w tzw gotówkę na wypadek zachorowania. Dopiero po powrocie ubezpieczyciel zwraca pieniądze za leczenie. <br />
          <br />
          <strong>3. Samochód</strong> - także jak w przypadku biletów lotniczych warto zarezerwować wcześniej. Zwykle poruszam się tam
          samochodem typu Fiat Fiorino i w zupełności on wystarczy. Zwykle auto dostarcza wypożyczalnia, która nas albo zabierze do siebie
          nie daleko od lotniska albo jest na miejscu. Auto jest niezbędne aby poruszać się po wybrzeżu swobodnie, gdyż są tam odległości.
          Ceny paliwa są tam o wiele niższe niż w Polsce. Dojazd z lotniska autem jest banalny. Co do samego poruszania się autem po Turcji.
          Wbrew obiegowym opiniom nie jest to trudne. Przede wszystkim Turcy dość swobodnie podchodzą do przepisów tak jak na przykład
          parkowanie samochodu. Należy pamiętać o zasadzie ograniczonego zaufania. Tureccy kierowcy niezbyt trzymają się przepisów i na
          przykład zjazd z lewego pasa aby sobie skręcić w prawo jest klasyką. Z drugiej strony ostrzegają się klaksonem bądź długimi
          światłami o takim manewrze. Należy także pamiętać o tym, że piesi nie mają tam pierwszeństwa na pasach. Można oczywiście
          skorzystać z transwerów np. z firmy 247transwer.com i komunikacji miejskiej ale ja tego nie praktykowałem.
          <br />
          <br /> <strong>4. BARDZO WAŻNA SPRAWA </strong> - internet. Na koniec rzecz najistotniejsza. To zakup karty sim z odpowiednią
          ilością danych już na lotnisku (karta turystyczna aktywna przez 3 mies) po paru minutach będzie aktywna. W Turcji bardzo
          rozpowszechniona jest komunikacja za pomocą internetu Komunikujemy się z krajem i na miejscu TYLKO I WYŁĄCZNIE za pomocą
          komunikatorów typu WhatsApp albo Messenger (koszta połączeń są dla obu stron po prostu drogie). Sim jest nam potrzebny już od
          początku żeby skontaktować się z wypożyczalnią, że już jesteśmy czy uruchomić nawigację aby dotrzeć do celu czy sprawdzać pocztę
          email na wypadek zmiany terminu wylotu.
        </p>
      </section>

      <section className="Gallery" id="Gallery">
        <h2>Galeria</h2>
        <p>Poświęć chwilę i poznaj apartament w któym spędzisz cudowne chwile w najbliższe wakacje.</p>
        <div className="row">
          <Image src={Photo6} className="photo gal1" />
          <Image src={Photo7} className="photo gal2" />
        </div>
        <div className="row">
          <Image src={Photo8} className="photo gal3" />
          <Image src={Photo9} className="photo gal4" />
          <Image src={Photo10} className="photo gal5" />
        </div>
        <div className="row">
          <Image src={Photo11} className="photo gal6" />
          <Image src={Photo3} className="photo gal7" />
        </div>
        <div className="row">
          <Image src={Photo12} className="photo gal8" />
          <Image src={Photo13} className="photo gal9" />
        </div>
        <div className="row">
          <Image src={Photo1} className="photo gal10" />
          <Image src={Photo2} className="photo gal11" />
        </div>
      </section>

      <section className="Links" id="Links">
        <h2>Przydatne Linki</h2>
        <Link
          target="_blank"
          href="https://www.google.com/maps/dir/Petra+1/Ye%C5%9Filk%C3%B6y,+Antalya+Havaliman%C4%B1+(AYT),+Antalya+Havaalan%C4%B1+D%C4%B1%C5%9F+Hatlar+Terminali+1,+Muratpa%C5%9Fa%2FAntalya,+Turcja/@36.6333727,31.7314816,2237m/data=!3m1!1e3!4m14!4m13!1m5!1m1!1s0x14dcaf22b46ccc9d:0x99fee9539e6ccf09!2m2!1d31.7783759!2d36.6363067!1m5!1m1!1s0x14c384778d617c9d:0xc17cdcfcdb48e8fa!2m2!1d30.8018768!2d36.9043327!3e0?entry=ttu"
        >
          1. Dojazd z Antalyi
        </Link>
        <Link
          target="_blank"
          href="https://www.google.com/maps/dir/Petra+1/36.6202902,31.7661146/@36.6289556,31.7614264,2371m/data=!3m2!1e3!4b1!4m9!4m8!1m5!1m1!1s0x14dcaf22b46ccc9d:0x99fee9539e6ccf09!2m2!1d31.7783759!2d36.6363067!1m0!3e0?entry=ttu"
        >
          2. Dojazd do plaży publicznej
        </Link>
        <Link
          target="_blank"
          href="https://www.google.com/maps/place/Carsija+Life+2/@36.6289556,31.7614264,2371m/data=!3m1!1e3!4m20!1m13!4m12!1m6!1m2!1s0x14dcaf22b46ccc9d:0x99fee9539e6ccf09!2sPetra+1!2m2!1d31.7783759!2d36.6363067!1m3!2m2!1d31.7661146!2d36.6202902!3e0!3m5!1s0x14dcafcb5f8ad489:0x164592a40348b337!8m2!3d36.6270329!4d31.7852169!16s%2Fg%2F11t9q__67b?entry=ttu"
        >
          3. Piechotą nad morze 30 min
        </Link>
        <Link
          target="_blank"
          href="https://www.wakacje.pl/biuro-podrozy/kozienice/radomska.html?utm_source=google&utm_medium=organic&utm_campaign=gmb&utm_term=kozienice_radomska"
        >
          {" "}
          4. Bilety lotnicze last minute
        </Link>
        <Link
          target="_blank"
          href="https://www.kayak.pl/flights?lang=pl&skipapp=true&gclid=EAIaIQobChMI-IzAx63GgAMVrlKRBR3S0A_LEAAYASACEgLfHfD_BwE"
        >
          {" "}
          5. Bilety lotnicze
        </Link>
        <Link
          target="_blank"
          href="https://www.economycarrentals.com/pl-pl/0/wypozyczalnia-samochodow?keep=true&src=google&team=576-514-4383&network=g&campaignid=12416955980&adgroupid=117935055533&targetid=kwd-504015526&loc_physical_ms=1011419&matchtype=e&device=c&creative=500821971558&keyword=economy%20car%20rentals&cmp=9&adg=472&hl=ECR&kw=149&km=economy%20car%20rentals&ad=3835&gad=1&gclid=EAIaIQobChMIlsX66JXRgAMVE-Z3Ch0paA8gEAAYASAAEgJ62fD_BwE&c=PL"
        >
          {" "}
          6. Wynajem aut
        </Link>
        <Link
          target="_blank"
          href="https://www.axa-assistance.pl/ubezpieczenie-turystyczne/?externalpartner=13100009&gclid=EAIaIQobChMIuIvS7JbRgAMVift3Ch1EMAxuEAAYASAAEgLa1_D_BwE"
        >
          {" "}
          7. Ubezpieczenie zdrowia
        </Link>
      </section>
    </main>
  );
}
