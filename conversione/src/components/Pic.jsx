import React from 'react'

class Pic extends React.Component {
    state = {
        stile: {
            // position: "fixed",
            // bottom: "0",
            // right: "0"
        }
    }


    handleMovement = () => {
        const x = Math.floor(Math.random() * 1000)
        const y = Math.floor(Math.random() * 1000)
        this.setState(
            {stile: {
                position: "fixed",
                bottom: y,
                right: x
                }
            }
        )     
    }

    render() {

        return (
            <img src={this.props.img} alt="Napoleone" style={this.state.stile} className="profilo" onMouseEnter={this.handleMovement}/>
        )
    }
}

export default Pic