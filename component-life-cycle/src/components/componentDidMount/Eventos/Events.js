import React, { Component } from 'react'

class Events extends Component{
    state ={
        width: window.innerWidth
    }

    componentDidMount(){
        window.addEventListener('resize', this.handlerResize)
    }

    handlerResize= () =>{
        this.setState({width:window.innerWidth})
    }

    render(){
        return(
            <div>
                <h2>Event {this.state.width}</h2>
            </div>
        )
    }
}

export default Events