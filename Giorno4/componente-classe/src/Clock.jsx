import React from 'react'


class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
        
    }

    componentDidMount() {
        this.timmerID = setInterval(
            () => this.tick(),
            1000
        ) 

    }

    componentWillUnmount() {
        clearInterval(this.timerID)

    }

    tick() {
        this.setState( {date: new Date() } )
    }
    
    render() {
        return (
        <div>
            <h1>Ciao, mondo!</h1>
            <h2>Sono le {this.state.date.toLocaleTimeString()} </h2>
        </div>)
    }
}

export default Clock