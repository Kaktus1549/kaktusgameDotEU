import Image from 'next/image';

export default function Projects(){
    return(
        <div id="projects" className='projects'>
            <h2>My projects</h2>
            <div className='projects-container'> {/* box */}
                <Image src="/svg/Arrow_left.svg" alt="Kaktus Game" width="50" height="50" className='arrow'/>
                <div className='projects-box'> {/* Projekty box */}
                    <div className='project-box'> {/* Jeden z projektu */}
                    <h3>Apalucha</h3>
                    <p>Apalucha is simple web application build with React and Next. It was made for film festival. Concept is simple, users gets voting papers with login QR code. They will login it and vote for their favourite movie. After voting they can see results. </p>
                    </div>
                </div>
                <Image src="/svg/Arrow_right.svg" alt="Kaktus Game" width="50" height="50" className='arrow'/>
            </div>
      </div>
    );
}