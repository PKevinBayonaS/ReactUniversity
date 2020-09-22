import React, { Component } from 'react'

class Timer extends Component{
    state ={
        time:0,
        isPlaying:true
    }

    tick = null

    componentDidMount(){
        this.play()
    }

    componentWillUnmount(){
        this.props.onDestroy()
        clearInterval(this.tick)
    }

    paly= () => {
        this.setState({isPlaying:true})
        this.tick = setInterval(() =>{
            this.setState(state=>({
                time: state.time+1
            }))
        }, 1000)
    }

    pause = () =>{
        this.setState({isPlaying: false})
        clearInterval(this.tick)
    }

    toggle = () => {
        if(this.state.isPlaying){
            this.pause()
        }else{
            this.play()
        }
    }

    render(){
        const {time, isPlaying} = this.state
        return(
            <di>
                <h1>{   time    }</h1>
                <button onClick={this.toggle}>
                    {isPlaying? 'pause': 'play'}
                </button>
            </di>
        )
    }
}

export default Timer