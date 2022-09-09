import React from 'react';
import './primitive.css'


class Calcolatrice extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            risultato: ""
        }
        this.handleClick = this.handleClick.bind(this); //per il this
        this.handleResult = this.handleResult.bind(this); //per il this
        this.handleReset = this.handleReset.bind(this); //per il this
    }

    handleClick(value) {
        this.setState((prevState) => ({
            risultato: prevState.risultato + value
        }));
    }

    handleResult() {
        this.setState((prevState) => ({
            risultato: eval(prevState.risultato)
        }));
    }

    handleReset() {
        this.setState({ risultato: "" })
    }

    render() {
        return (
            <div className='small-container centro'>
                <h1>Calcolatrice</h1>
                <h2>{this.state.risultato}</h2>
                <div className='flex-row'>
                    <button className='one-third' onClick={() => { this.handleClick("1") }} >1</button>
                    <button className='one-third' onClick={() => { this.handleClick("2") }} >2</button>
                    <button className='one-third' onClick={() => { this.handleClick("3") }} >3</button>
                </div>
                <div className='flex-row'>
                    <button className='one-third' onClick={() => { this.handleClick("1") }} >1</button>
                    <button className='one-third' onClick={() => { this.handleClick("2") }} >2</button>
                    <button className='one-third' onClick={() => { this.handleClick("3") }} >3</button>
                </div>
                <div className='flex-row'>
                    <button className='one-third' onClick={() => { this.handleClick("4") }} >4</button>
                    <button className='one-third' onClick={() => { this.handleClick("5") }} >5</button>
                    <button className='one-third' onClick={() => { this.handleClick("6") }} >6</button>
                </div>
                <div className='flex-row'>
                    <button className='one-third' onClick={() => { this.handleClick("7") }} >7</button>
                    <button className='one-third' onClick={() => { this.handleClick("8") }} >8</button>
                    <button className='one-third' onClick={() => { this.handleClick("9") }} >9</button>
                </div>
                <div>
                    <button onClick={() => { this.handleClick("0") }} >0</button>
                </div>
                <div className='flex-row'>
                    <button className='one-fourth' onClick={() => { this.handleClick("+") }} >+</button>
                    <button className='one-fourth' onClick={() => { this.handleClick("-") }} >-</button>
                    <button className='one-fourth' onClick={() => { this.handleClick("*") }} >*</button>
                    <button className='one-fourth' onClick={() => { this.handleClick("/") }} >/</button>
                </div>
                <div className='flex-row'>
                    <button onClick={this.handleResult} >=</button>
                    <button onClick={this.handleReset} >C</button>
                </div>



            </div>
        )
    }
}


export default Calcolatrice