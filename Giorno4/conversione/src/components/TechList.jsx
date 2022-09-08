const techStyles = {
    width: "auto",
    height: "150px",
    marginBottom: "10px",
    padding: "0px 10px 0px 10px"
}

function TechList(props) {
    const techlist = props.techs.map((tech, index) =>
        <div className="flex-small" key={index}>
            <img alt="tecnologia" src={tech} style={techStyles} />
        </div>)
    return techlist
}

export default TechList