"use client";

import Image from "next/image";
import { useState } from "react";
import '../style/stalky.css';
import RenderData from "./stalky";
import RootLayout from "../layout";

const apiUrl = process.env.API_URL as string;
const pageUrl = process.env.URL as string;
const pageTitle = 'd0_u_f3el_s4fe?';
const pageDescription = "Do you feel safe on the internet? I don't think so. I'm going to show you how easy it is to get information about you.";
const pageImage = pageUrl + '/images/tux.png';
const metadataOverride = {
    title: pageTitle,
    description: pageDescription,
    image: pageImage,
    url: pageUrl
};

export default function Stalky() {
    const [reveal, setReveal] = useState(false);
    const [apiData, setData] = useState<StalkyAPI>({
        "success": false,
        "message": "If you are seeing this, something went wrong! Please contact the developer."
    } as StalkyAPI);

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
        <RootLayout metadataOverride={metadataOverride} titleOverride="d0_u_f3el_s4fe?">
            <div className="mainpage-button">
                <button  onClick={() => window.location.href = pageUrl}>Main page</button>
            </div>
                {reveal === false ?
                    <div className="main-container">
                        <Image src="/images/tux.png" alt="tux" id="tux" width={606} height={546} />
                        <p id="stalkyIntro">What do you think I know about you? Are you sure you're completely anonymous on the internet? Just click a button and I'll show you everything I've found out about you!</p>
                        <button id="stalkyButton" onClick={stalky}>Show me!</button>
                    </div>
                : <RenderData data={apiData} />
                }
            <div className="signature">
                <p>Made by Kaktus1549</p>
            </div>
        </RootLayout>
    );
}