import React, { Component } from 'react'

class InputNoControladoRef extends Component{
    nombre = React.createRef();
    email = React.createRef();
    state ={
        active: this.props.active,
        styles: this.props.className
    }

   handleClick = () =>{
       const nombre = this.nombre.current.value;
       const email = this.email.current.value;
        //Manejo de Datos
    this.props.onSend({nombre,email})
   }

   chancheVisible=(styless)=>{
       this.setState({styles: styless})
   }

    render(){
        return(
            <div className={this.state.styles}>
                <h1>Input No Controlado Ref</h1>
                <input
                    type="text"
                    ref={this.nombre}
                    placeholder='Nombre'
                />
                <input
                    type="text"
                    ref={this.email}
                    placeholder='Email'
                    />
                <button onClick={this.handleClick}>Enviar</button>
            </div>
        )
    }
}

export default InputNoControladoRef