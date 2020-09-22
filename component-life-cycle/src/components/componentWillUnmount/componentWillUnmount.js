import React, { Component } from 'react'
import Timer from './Timer'

class ComponentWillUnmount extends Component{
    state ={
        mostrar:true,
        message:''
    }

    desmontar=()=>{
        this.setState({mostrar:false})
    }

    handleDestroy=()=>{
        this.setState({message:'el componente contador fue destruido'})
    }

    render(){
        return(
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={this.desmontar}>Desmontar</button>
                {this.state.mostrar && <Timer onDestroy={this.handleDestroy}></Timer>}
            </div>
        )
    }
}

export default ComponentWillUnmount