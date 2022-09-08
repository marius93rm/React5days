import React from 'react'

import Skill from './Skill'
import Pic from './Pic'

import spunta from '../imgs/spunta.png'


class Utente extends React.Component {

    render() {
        const spuntaStyles = {
            width: "auto",
            height: "15px",
            marginLeft: "5px"
        }

        const skillsFormatted = this.props.autore.skills.map((elem, index) =>
            <Skill elem={elem} key={index} />
        )

        return (
            <div>
                <div className="centro">
                    {/* <img src={this.props.autore.img} alt="Napoleone" style={utenteStyles} /> */}
                    <Pic img={this.props.autore.img} />
                    <p style={{ margin: "0" }}>
                        {this.props.autore.nome.toUpperCase()} {this.props.autore.cognome.toUpperCase()}
                        <img style={spuntaStyles} src={spunta} alt="utente verificato" />
                    </p>
                    <small>Teacher, Rome</small>
                </div>
                <h5 style={{ textAlign: "left" }}>SKILLS</h5>
                {skillsFormatted}
            </div>
        )
    }
}

export default Utente