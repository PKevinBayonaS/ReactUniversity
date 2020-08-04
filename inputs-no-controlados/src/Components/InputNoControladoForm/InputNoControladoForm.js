import React, { Component } from 'react'

class InputNoControladoForm extends Component{
    state ={
        active: this.props.active,
        styles: this.props.className
    }
    HandleSubmit = (event) => {
        event.preventDefault()
        const nombre = event.target[0].value
        const email = event.target[1].value

        //Manejo de datos
        this.props.onSend({nombre, email})
    }
    chancheVisible=(styless)=>{
        this.setState({styles: styless})
    }

    render(){
        return(
            <div className={this.state.styles}>
                <h1>Input No Controlado Form</h1>
                <form onSubmit={this.HandleSubmit} >
                    <input type="text" placeholder='Nombre'/>
                    <input type="text" placeholder='Email'/>
                    <button>Enviar</button>
                </form> 
            </div>
        )
    }
}

export default InputNoControladoForm