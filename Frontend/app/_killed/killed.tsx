"use client";

import "./style.css"

export default function Killed() {
    return(
        <div className="container">
            <div className="down-headline">
                KaktusGame is down
            </div>
            <div className="down-subheadline">
                Owner brought it down
            </div>
            <div className="video-container">
                <video autoPlay controls>
                    <source src="/videos/GoodBye.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
}