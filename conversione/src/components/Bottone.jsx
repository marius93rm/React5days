import React from 'react'

function Bottone({handleSwitch}){
    return <button type="button" onClick={() => handleSwitch()}>Cliccami</button>
}

export default Bottone