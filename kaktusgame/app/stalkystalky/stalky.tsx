"use client";

import Image from "next/image";

export default function RenderData({data} : {data: StalkyAPI}) {
    const success = data.success;
    
    return (
        <>
            {success === true ?
                <div id="stalkyData" className="stalky-container">
                    <div id="stalkyText">  
                        <p><span id="ip">IP adresa: </span>{data.ip || "N/A"}</p>
                        <p><span id="state">Země: </span>{data.state || "N/A"}</p>
                        <p><span id="city">Město: </span>{data.city || "N/A"}</p>
                        <p><span id="timezone">Časové pásmo: </span>{data.timezone || "N/A"}</p>
                        <p><span id="browser">Prohlížeč: </span>{data.browser || "N/A"}</p>
                        <p><span id="os">Operační systém: </span>{data.os || "N/A"}</p>
                        <p><span id="osVersion">Verze operačního systému: </span>{data.osVersion || "N/A"}</p>
                        <p><span id="resolution">Rozlišení: </span>{window.screen.width}x{window.screen.height || "N/A"}</p>
                        <p><span id="language">Jazyk: </span>{navigator.language || "N/A"}</p>
                    </div>  
                        <Image src="/images/hacker.png" alt="hacker" id="hacker" width={960} height={696} />
                </div>
            : 
                <div id="apiError" className="api-error">
                    <p> Jejda, něco se pokazilo :( Zkus to prosím znovu, prozatím tu máš obrázek kočičky :D </p>
                    <Image src="/images/cutecat.jpg" alt="cat" id="cat" width={1920} height={1080} />
                </div>
            }
        </>
    );
}