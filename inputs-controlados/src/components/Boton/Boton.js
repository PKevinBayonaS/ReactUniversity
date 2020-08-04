import React, { Component } from 'react'

class Boton extends Component{
    state={
        dispararError:false
    }

    dispararError= () =>{
        this.setState({dispararError: true})
    }
    render(){
        if(this.state.dispararError){
            throw new Error('Lo siento he Fallado 🔥🔥🔥')
        }
        return(
            <button onClick={this.dispararError}>
                Boton con Bug
            </button>
        )
    }
}

export default Boton