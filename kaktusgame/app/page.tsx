"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import './style/global.css';
import Whoami from "./_whoami/whoami";
import Skills from "./_skills/skills";
import Projects from "./_projects/projects";

export default function Home() {
  try{
    const searchParams = useSearchParams();
    const debug = searchParams.get("debug");
    if (debug) {
      alert("Window height: " + window.innerHeight + "\nWindow width: " + window.innerWidth);
    }
  }
  catch(e: any){
    /* checks if the error is not "alert is not defined" and logs it to the console */
    if(e.message !== "alert is not defined"){
      console.error("Something went wrong with the debug alert!");
      console.error(e);
    }
  }
  return (  
    <div className="main-container">
      <header>
        <Image src="/images/banner.png" alt="Kaktus Game" width="1020" height="249" className="header-banner"/>
        <Image src="/favicon.ico" alt="Kaktus Game" width="482" height="482" className="logo"/>
      </header>
      <Whoami/>
      <Skills/>
      <div id="banner" className="banner">
        <video autoPlay muted loop playsInline className="webm">
          <source src="/videos/banner.webm" type="video/webm"/>
          <source src="/videos/banner.mp4" type="video/mp4"/>
          Your browser does not support the video :(
        </video>
      </div>
      <Projects/>
      <footer>
        <p>© 2023 Kaktus Game</p>
      </footer>
    </div>
  );
}