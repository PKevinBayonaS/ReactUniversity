import React, { Component } from 'react'

class Hijo extends Component{
    enviarAPadre = () =>{
        this.props.onSaluda('Kevin')
    }
    render(){
        return(
            <div className='box blue'>
                <h2>Hijo</h2>
                <button onClick={this.enviarAPadre}>saluda</button>
            </div>
        )
    }
}
export default Hijo