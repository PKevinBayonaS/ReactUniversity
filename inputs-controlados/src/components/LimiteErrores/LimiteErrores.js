import React, { Component } from 'react'

class LimiteErrores extends Component{
    state={
        tieneError: false
    }
    componentDidCatch(error, errorInfo){
        this.setState({
            tieneError:true,
            error
        })
    }
    render(){
        if(this.state.tieneError){
            return(
                <div>
                    Woops!!! Algo ha salido mal puede recargar o conectar con el equipo de soporte
                    <div style={{color:'orangered'}}>
                        {this.state.error && this.state.error.toString()}
                    </div>
                </div>
            )
        }
        return this.props.children
    }
}

export default LimiteErrores