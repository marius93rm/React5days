function Skill({ skill: [tech, level] }) {
    return (
        <li>{tech} {level}</li>
    )
}

function Skills(props) {
    const skillsList = props.skills.map((skill, index) =>
        <Skill skill={skill} key={index} />)
    return <ul>{skillsList}</ul>
}


export default Skills