import React from 'react'
import Header from '../header'
import Hijo from '../metodosdeinstancia/hijo'

const boxStyles = {
    padding: '0.5em',
    margin: ' 0.5em',
    border: '1px solid gray',
    borderRadius: '0.3em',
    textAlign: 'center'
  }

class EventBubbling extends Component{
    handleClick = (e) =>{
        console.log('Click en <Padre />', e.saludo)
    }

    render(){
        return(
            <div style={boxStyles}
            onClick={this.handleClick}>
                <Header metodo='Event Bubbling ( Hijo a Padre )'/>
                <Hijo></Hijo>
            </div>
        )
    }
}