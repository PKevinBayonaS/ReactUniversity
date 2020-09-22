import React, {Component} from 'react'

const subtitleStyles = {
    fontWeight: 'bold'
  }

const headerStyles  = {
    margin: '0.6em',
    borderRadius: '0.3em',
    border: '1px solid #d2d2d2',
    padding: '2em 0.4em',
    fontFamily: 'monospace',
    fontSize: '17px'
  }

class Header extends Component{

    render(){
        return(
            <header style={headerStyles}>
                <div>
                    comunicacion entre componentes
                </div>
                <div style={subtitleStyles}>
                    {this.props.metodo}
                    <span role='img' aria-label='flame' >
                    🔥
                    </span>
                </div>
            </header>
        )
    }
}

export default Header