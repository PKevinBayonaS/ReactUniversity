import React, { Component } from 'react'

class Hijo extends Component{
    state ={
        message: '*****'
    }

    dispatchAlert = (e, message = 'Alert desde el Hijo') =>{
        this.setState({message})
    }

    render(){
        return(
            <div>
                <h2>{ this.state.message }</h2>
                <button onClick ={this.dispatchAlert}>
                    Hijo
                </button>
            </div>
        )
    }
}

export default Hijo