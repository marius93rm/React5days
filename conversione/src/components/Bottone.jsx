import React from 'react'

function Bottone({handleSwitch, tema}){
    
    return <button type="button" onClick={ handleSwitch }>
        {tema ? 'chiaro' : 'scuro'}
    </button>
}

export default Bottone