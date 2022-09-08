import React from 'react'

class Header extends React.Component {
    
    render() {
        const headerStlyes = {
            backgroundColor: "#F5E2C8",
            fontFamily: "Helvetica Neue",
            padding: 25,
            lineHeight: 1.5
          }
        const oggi = new Date().toLocaleDateString()

        return( 
            <header style={headerStlyes}>
            <h1 className="centro">Benvenuti nel nostro sito</h1>
            <h2 style={{ margin: "10px 0 0 0" }}>Cominciamo con il tutorial di React</h2>
            <h3 style={{ margin: "0px" }}>una libreria per creare pezzi di UI</h3>
            <small>{oggi}</small>
          </header> 
        ) 
    }
}

export default Header