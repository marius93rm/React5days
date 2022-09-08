function Skill({ skill: [tech, level] }) {
    return (
        <li>{tech} {level}</li>
    )
}

function Lista(props) {
    const skillsList = props.lista.map((skill, index) =>
        <Skill skill={skill} key={index} />)
    return <ul>{skillsList}</ul>
}


export default Lista