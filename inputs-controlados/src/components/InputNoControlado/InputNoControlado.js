import React, {Component} from 'react'

class InputNoControlado extends Component{
    handleSubmit =(event) =>{
        event.preventDefault()
        const nombre = event.target[0].value
        const email = event.target[1].value
    
        // Manejo de datos
        this.props.onSend({ nombre, email })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label htmlFor='name'>Nombre: </label>
                    <input
                        type='text'
                        placeholder='Nombre'
                        id='name'/>
                </p>
                <p>
                    <label>Email: </label>
                    <input
                        type='text'
                        placeholder='Emal'/>
                </p>
                <button>
                    Enviar
                </button>
            </form>
        )
    }
}

export default InputNoControlado