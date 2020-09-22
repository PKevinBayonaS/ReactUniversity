import React, { Component } from 'react'
import Header from '../header/'
import Hijo from './hijo'

class MInstancia extends Component{
    hijo = React.createRef()

    handleClick = () => {
        this.hijo.current.dispatchAlert(null, 'Hola desde el Padre')
    }

    render(){
        return(
            <div>
                <Header metodo ='Metodos de instancia'/>
                <Hijo ref={this.hijo}/>
                <button onClick={this.handleClick}>
                    Padre
                </button>
            </div>
        )
    }
}

export default MInstancia