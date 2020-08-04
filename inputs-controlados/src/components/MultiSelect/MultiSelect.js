import React, { Component } from 'react'

class MultiSelect extends Component{
    state = {
        techs:['vue']
    }
    handleChange =(event)=>{
        const techs = Array.from(event.target.selectedOptions,
            (option)=> option.value
        )
        this.setState({techs})
    }

    render(){
        return(
            <div>
                <form>
                    <select            
                    value={this.state.techs}
                    onChange={this.handleChange}
                    multiple
                    >
                        <option value="Angular">Angular</option>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                        <option value="Vanilla">Vanilla</option>
                    </select>
                </form>
                <ul>
                    {this.state.techs.map(tech=>(
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default MultiSelect