"use client";

import Image from "next/image";
import { useState } from "react";
import '../style/stalky.css';
import RenderData from "./stalky";


export default function Stalky() {
    const [reveal, setReveal] = useState(false);
    const [apiData, setData] = useState<StalkyAPI>({
        "success": false,
        "message": "If you are seeing this, something went wrong! Please contact the developer."
    } as StalkyAPI);
    let apiUrl = process.env.API_URL as string;
    let url = process.env.URL as string;

    async function postRequest(){
        try{
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data as StalkyAPI;
        }
        catch(error){
            return {
                "success": false,
                "message": error
            } as StalkyAPI;
        }
    }

    async function stalky(){
        let data = await postRequest() as StalkyAPI;
        setData(data);
        setReveal(true);
    }

    return (
        <> 
            <div className="mainpage-button">
                <button  onClick={() => window.location.href = url}>Hlavní stránka</button>
            </div>
                {reveal === false ?
                    <div className="main-container">
                        <Image src="/images/tux.png" alt="tux" id="tux" width={606} height={546} />
                        <p id="stalkyIntro">Co si myslíš, že vím o tobě? Jseš si jistý, že jsi na internetu zcela anonymní? Stačí jen kliknout na tlačítko a já ti ukážu, co všechno jsem o tobě zjistil!</p>
                        <button id="stalkyButton" onClick={stalky}>Ukaž mi to!</button>
                    </div>
                : <RenderData data={apiData} />
                }
            <div className="signature">
                <p>Made by Kaktus1549</p>
            </div>
        </>
    );
}