import React from 'react'


class Skill extends React.Component {

    render() {
        const skillsStyles = {
            display: "inline-block",
            color: "white",
            background: "#47D0CF",
            maxWidth: "100px",
            padding: "5px 10px 5px 10px",
            textAlign: "center",
            borderRadius: "10px",
            margin: "10px",
        }

        return (
            <div key={this.props.index} style={skillsStyles}>
                {this.props.elem}
            </div>
        )
    }
}

export default Skill