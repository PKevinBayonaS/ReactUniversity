import React, { Component } from 'react'

class Contador extends Component{
    state ={
        num:this.props.num
    }

    static getDerivedStateFromProps (nextProps, prevState){
        /*if(prevState.num !== nextProps.num){
        *   return{
        *       num: nextProps.num
        *   }
        * }
        */

        if(prevState.num<nextProps.num){
            return{
                num: nextProps.num
            }
        }
    }

    add = () => {
        this.setState(state =>({
            num: state.num + 1
        }))
    }

    render(){
        const {num} = this.state

        return(
           <div>
               <hr/>
               <button onClick={this.add}> Clicks ({num})</button>
           </div> 
        )
    }
}

export default Contador