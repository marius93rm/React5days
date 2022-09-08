import React from 'react'

import TechList from './TechList'


class Main extends React.Component {

    render() {

        const mainStyles = {
            backgroundColor: "#F5E2C8"
        }

        return (
            <main style={mainStyles}>
                <h3 style={{ padding: "25px 0px 25px 0" }} className="centro">Front End Technologies</h3>
                <div className="flex-row">
                    <TechList techs={this.props.techs} />
                </div>
            </main>
        )
    }
}

export default Main