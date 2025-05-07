"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import './style/global.css';
import Whoami from "./_whoami/whoami";
import Skills from "./_skills/skills";
import Projects from "./_projects/projects";
import Socials from "./_socials/socials";
import Killed from "./_killed/killed";
import { useEffect, useState } from "react";



export default function Home() {
  // Fetch /killSwitch status

  const [isKilled, setKilled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Loading");

  useEffect(() => {
    const fetchKillSwitch = async () => {
      try {
        const response = await fetch('/killSwitch');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.status) {
          setKilled(true);
        }
      } catch (error) {
        console.error('Error fetching kill switch:', error);
      }
      finally {
        setLoading(false);
      }
    };
    fetchKillSwitch();
  }, []);
  useEffect(() => {
    // The loading starts as "Loding" and then it adds a dot every 500ms
    // When it reaches "Loading...." it resets to "Loading"
    const interval = setInterval(() => {
        setLoadingText((prevText) => {
            if (prevText === "Loading....") {
                return "Loading";
            }
            return prevText + ".";
        });
    }, 500);
    return () => clearInterval(interval);
});

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
  if (loading){
    return(
      <>
        <div className="spinner">
        </div>
        <p className='loading'>{loadingText}</p>
      </>
    )
  }
  if (isKilled) {
    return (
      <Killed />
    )
  }
  return (  
    <>  
      <div className="main-container">
        <header>
          <Image src="/images/banner.png" alt="Kaktus Game" width="1020" height="249" className="header-banner"/>
          <Image src="/logos/kaktus.png" alt="Kaktus Game" width="482" height="482" className="logo"/>
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
        <Socials/>
        <footer>
          <p>© 2023 Kaktus Game</p>
        </footer>
      </div>
    </>
  );
}