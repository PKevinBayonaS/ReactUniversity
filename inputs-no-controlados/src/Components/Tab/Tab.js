import React, { Component } from 'react'

class Tab extends Component {

    showFunction=()=>{

        this.props.onComponent(this.props.tabProps.key)
    }
    render(){
        return(
            <button onClick={this.showFunction}>{this.props.tabProps.text}</button>
        )
    }
}

export default Tab