import "./skills.css"

function Skill(props) {
    return (
        <>
            <style>
                {`
                    .skill_bar .bar .pw-${props.percentage}{
                        width: ${props.percentage}%;
                        animation: pw-${props.percentage} 2s;
                    }
                    @keyframes pw-${props.percentage} {
                        0%{
                            width: 0%;
                        }100%{
                            width: ${props.percentage}%;
                        }
                    }

                `}
            </style>
            <div className="skill_bar">
                <div className="info">
                    <p>{props.skill}</p>
                    <p>{props.percentage}%</p>
                </div>
                <div className="bar">
                    <span className={"pw-" + props.percentage} />
                </div>
            </div>
        </>
    );
}

function Skills(props) {
    return (
        <>
            <section className="container" id="skills">
                <div className="section-title">
                    <div className="font-maitree">My <span className="text-blue font-maitree">Skills</span>
                    </div>
                    <p>Here is my skills to represent my Expertise</p>
                </div>
                <div className="skills-body">
                    <Skill skill="HTML" percentage="90" />
                    <Skill skill="CSS" percentage="85" />
                    <Skill skill="SASS" percentage="80" />
                    <Skill skill="Java Script" percentage="80" />
                    <Skill skill="React js" percentage="75" />
                    <Skill skill="Node js" percentage="70" />
                    <Skill skill="Express js" percentage="65" />
                    <Skill skill="Mongo DB" percentage="60" />
                </div>
            </section>
        </>
    );
}

export default Skills;
