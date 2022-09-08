//{ country: 'India', population: 1295210000 },

function Barra({ popolazione }) {
    const percentuale = Math.floor((popolazione * 100) / 8000000000)
    const barraStyle = {
        backgroundColor: "orange",
        width: percentuale + "%"
    }

    return (
        <div className="inline flex-small">
            <div style={barraStyle}>{percentuale}</div>
        </div>
        )
}

// //     metodo ES6
// function Paese({ paese: { country, population } }) {
//     return (
//         <div className="flex-row">
//             <p className="inline flex-small">{country}</p>
//             <Barra popolazione={population} />
//             <p className="inline flex-small">{(population).toLocaleString('en-US')}</p>
//         </div>
//     )
// }

//     metodo "le classique"
function Paese(props) {
    return (
        <div className="flex-row">
            {console.log(props.paese.country)}
            {console.log(props.paese.population)}
            <p className="inline flex-small">{props.paese.country}</p>
            <Barra popolazione={props.paese.population} />
            <p className="inline flex-small">{(props.paese.population).toLocaleString('en-US')}</p>
        </div>
    )
}

function Lista(props) {
    const listaPaesi = props.paesi.map((paese, index) =>
        <Paese paese={paese} key={index} />
    )
    return <div>{listaPaesi}</div>
}

export default Lista