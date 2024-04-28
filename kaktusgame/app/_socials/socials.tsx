"use client";

import Image from 'next/image';
import socialsData from './links.json';

export default function Socials(){
    let links = [] as JSX.Element[];
    let linkKeys = Object.keys(socialsData);

    linkKeys.forEach(link => {
        let linkObj = socialsData[link as keyof typeof socialsData];
        links.push(
            <a key={link} className='link' href={linkObj.url} target='_blank' rel='noreferrer'>
                <Image src={linkObj.icon.path} alt={linkObj.icon.alt} width={linkObj.icon.width} height={linkObj.icon.height} />
                <p>{linkObj.text}</p>
            </a>
        );
    });

    return (
        <div className='socials-container'>
            <h2>Socials</h2>
            <div className='socials'>
                {links}
            </div>
        </div>
    );
}