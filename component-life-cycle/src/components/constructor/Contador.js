import React, { Component } from 'react'

class Contador extends Component{
    constructor(props){
        super(props)

        //pasar contexto a los metodos de clase
        this.agregar=this.agregar.bind(this)

        //crear refs para acceso al elemento en el DOM
        this.title= React.createRef()

        //inicializar el estado
        this.state={
            num: props.num
        }
    }

    agregar(){
        console.log(this.title)
        this.setState(state=>({
            num:state.num+1
        }))
    }
    render(){
        return(
            <div>
                <h2
                 ref={this.title}>
                     {this.state.message}
                </h2>
                <button onClick={this.agregar}>Click ({this.state.num})</button>
            </div>
        )
    }
}

export default Contador