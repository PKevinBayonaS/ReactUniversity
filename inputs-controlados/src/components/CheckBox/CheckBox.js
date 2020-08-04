import React, { Component } from 'react'

class CheckBox extends Component{
    state={
        active:true
    }

    handleChange =(event) =>{
        this.setState({
            active:event.target.checked
        })
    }

    render(){
        const{ active } = this.state
        return(
            <div>
                <form>
                    <input
                        type="checkbox"
                        checked={active}
                        onChange={this.handleChange}
                        />
                </form>
                {active && (
                    <h1>Etiqueta de CheckBox</h1>
                )}
            </div>
        )
    }
}

export default CheckBox