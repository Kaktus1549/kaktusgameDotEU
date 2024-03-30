import Image from "next/image";
import './style/global.css';
import Whoami from "./_whoami/whoami";
import Skills from "./_skills/skills";
import Projects from "./_projects/projects";
import GlitchImage from "./_three/threeBanner";

export default function Home() {
  return (  
    <div className="main-container">
      <header>
        <Image src="/images/banner.png" alt="Kaktus Game" width="1020" height="249" className="header-banner"/>
        <Image src="/favicon.ico" alt="Kaktus Game" width="482" height="482" className="logo"/>
      </header>
      <Whoami/>
      <Skills/>
      <div id="banner" className="banner">
        <video autoPlay muted loop className="webm" src="/webm/banner.webm"/>
      </div>
      <Projects/>
      <footer>
        <p>© 2023 Kaktus Game</p>
      </footer>
    </div>
  );
}