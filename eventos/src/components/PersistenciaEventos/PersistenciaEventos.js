import React, { Component } from 'react';

class PersistenciaEventos extends Component{
    state = {
        color:'blue'
    }
    handlerChange = (event) => {
        //devido a que react limpia el evento despues de que ocurre
        //este no puede ser utilisado en operaciones 
        //azincronas como lo es setState
        //por esta razon la operacion:
        //this.setState((state) =>({color:event.target.calue}))
        //marcaria error.
        //por lo anterior tenemos dos opciones
        //event.persist()
        //con lo anterior el evento persistira y seguira funcionando o
        let color= event.target.value
        this.setState({
            color
        })
    }
    render(){
        return(
            <div>
                <input type="text"
                onChange={this.handlerChange}/>
                <h1 style={{color: this.state.color}}>
                    {this.state.color}
                </h1>
            </div>
        )
    }
}

export default PersistenciaEventos