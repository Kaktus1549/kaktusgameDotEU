"use client";

import Image from "next/image";

export default function RenderData({data} : {data: StalkyAPI}) {
    const success = data.success;
    
    return (
        <>
            {success === true ?
                <div id="stalkyData" className="stalky-container">
                    <div id="stalkyText">  
                        <p><span id="ip">IP address: </span>{data.ip || "N/A"}</p>
                        <p><span id="state">Country: </span>{data.state || "N/A"}</p>
                        <p><span id="city">City: </span>{data.city || "N/A"}</p>
                        <p><span id="timezone">Timezone: </span>{data.timezone || "N/A"}</p>
                        <p><span id="browser">Browser: </span>{data.browser || "N/A"}</p>
                        <p><span id="os">Operating System: </span>{data.os || "N/A"}</p>
                        <p><span id="osVersion">OS version: </span>{data.osVersion || "N/A"}</p>
                        <p><span id="resolution">Resolution: </span>{window.screen.width}x{window.screen.height || "N/A"}</p>
                        <p><span id="language">Language: </span>{navigator.language || "N/A"}</p>
                    </div>  
                        <Image src="/images/hacker.png" alt="hacker" id="hacker" width={960} height={696} />
                </div>
            : 
                <div id="apiError" className="api-error">
                    <p>Oops, something went wrong :( Please try again, for now here's a picture of a cat :D </p>
                    <Image src="/images/cutecat.jpg" alt="cat" id="cat" width={1920} height={1080} />
                </div>
            }
        </>
    );
}