import React, { Component } from 'react'

const boxStyles = {
    padding: '0.5em',
    margin: ' 0.5em',
    border: '1px solid gray',
    borderRadius: '0.3em',
    textAlign: 'center'
  }


class Hijo extends Component{
    handleClick = (e) =>{
        //e.stopPropagation()
        e.saludo = 'hola Mensaje desde el Hijo'
        console.log('clic en <Hijo/>')
    }

    render(){
        return (
            <div style={boxStyles}
            onClick={this.handleClick}>
                <p>Hijo</p>
            </div>
        )
    }
}

export default Hijo