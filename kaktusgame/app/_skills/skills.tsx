import skillData from './skills.json'
export default function Skills(){
     
    function generateSkills(){
        
    }
    
    return(
    <div id="skills" className="skills">
        <h2>My skills</h2>
        <div className="skill-container">
            {skillData.skills.map((skill)=>(
                <div key={skill.caption} className="skill-box">
                    <h3>{skill.caption}</h3>
                    <p>{skill.description}</p>
                </div>

            ))}
        </div>
    </div>   
    );
}
