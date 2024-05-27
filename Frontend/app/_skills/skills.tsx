import skillData from './skills.json'
import Image from 'next/image';
export default function Skills(){
    let randomLeftLines = [] as string[];
    let randomRightLines = [] as string[];
    
    function generateRandomLines(){
        let skillLength = Object.keys(skillData.skills).length;
        let leftLinePaths = [
            '/svg/normal_line_left.svg',
            '/svg/curved_line_left.svg',
            '/svg/extra_curved_line_left.svg'
        ]
        let rightLinePaths = [
            '/svg/normal_line_right.svg',
            '/svg/curved_line_right.svg',
            '/svg/extra_curved_line_right.svg'
        ]
        let curvedLines = Math.floor(skillLength / 2) > 2 ? Math.floor(skillLength / 2) : 2;
        let extraCurvedLines = Math.floor(skillLength / 10) > 0 ? Math.floor(skillLength / 10) : 1;

        for(let i = 0; i < skillLength; i++){
            if (i % 2 === 0){
                if(curvedLines > 0){
                    randomLeftLines.push(leftLinePaths[1]);
                    curvedLines--;
                } else if(extraCurvedLines > 0){
                    randomLeftLines.push(leftLinePaths[2]);
                    extraCurvedLines--;
                } else {
                    randomLeftLines.push(leftLinePaths[0]);
                }
            }
            else {
                if(curvedLines > 0){
                    randomRightLines.push(rightLinePaths[1]);
                    curvedLines--;
                } else if(extraCurvedLines > 0){
                    randomRightLines.push(rightLinePaths[2]);
                    extraCurvedLines--;
                } else {
                    randomRightLines.push(rightLinePaths[0]);
                }
            }
        }
        return;
    }

    function getLine(side: string){
        // Returns random line in the array
        if(side === "left"){
            let randomIndex = Math.floor(Math.random() * randomLeftLines.length);
            let line = randomLeftLines[randomIndex];
            randomLeftLines.splice(randomIndex, 1);
            return line;
        } else {
            let randomIndex = Math.floor(Math.random() * randomRightLines.length);
            let line = randomRightLines[randomIndex];
            randomRightLines.splice(randomIndex, 1);
            return line;
        }


    }

    function generateSkills() {
        generateRandomLines();
        let skillsLastIndex = Object.keys(skillData.skills).length - 1;
        return (
            skillData.skills.map((skill, index) => (
                index % 2 === 0 ? (
                    <div className='skill-container' key={skill.caption}>
                        <div key={skill.caption} className="skill-box">
                            <h3>{skill.caption}</h3>
                            <p>{skill.description}</p>
                        </div>
                        <div className='line'>
                            {index !== skillsLastIndex && (
                                <Image src={getLine("right")} alt="line" width="63" height="65"/>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className='skill-container' key={skill.caption}>
                        <div className='line'>
                            {index !== skillsLastIndex && (
                                    <Image src={getLine("left")} alt="line" width="63" height="65"/>
                                )}
                        </div>
                        <div key={skill.caption} className="skill-box">
                            <h3>{skill.caption}</h3>
                            <p>{skill.description}</p>
                        </div>
                    </div>
                )
            ))
        );
    }
    
    return(
    <div id="skills" className="skills">
        <h2>My skills</h2>
        <div className="skills-container">
            {generateSkills()}
        </div>
    </div>   
    );
}
