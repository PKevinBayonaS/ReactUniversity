import React, { Component } from 'react';
import './App.css';
import Chart from 'chart.js'

class Entrada extends Component{
    //para crear una referencia en el metodo constructor 
    //esto se hace de la siguiente manera
   /* constructor(){
        super()
        this.entrada = React.createRef
    }*/
    entrada = React.createRef();

    componentDidMount(){
        this.focus()
    }

    focus = () => {
        console.log(this.entrada)
        this.entrada.current.focus()
    }

    blur = () =>{
        console.log(this.entrada)
        this.entrada.current.blur()
    }

    render(){
        return(
            <div>
                <h1>React refs 🦄</h1>
                <input type="text"
                ref={this.entrada}/>
                <button onClick={this.focus}>Focus</button>
                <button onClick={this.blur}>Blur</button>
            </div>
        )
    }
}

//ejemplo con libreria
class Grafica extends Component{
    grafica = React.createRef()
    state ={
        grafData: {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [2, 10, 12, 6, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        }
    }
    componentDidMount(){
        const ctx = this.grafica.current.getContext('2d')
        const myChart = new Chart(ctx, this.state.grafData)
    }
    render(){
        return(
            <div>
                <canvas
                    ref={this.grafica}
                    width='400'
                    height='400'>

                </canvas>
            </div>
        )
    }
}

const FancyInput = React.forwardRef((props, ref) =>(
    <div>
        <input type="text" ref={ref}/>
    </div>
))

class App extends Component {
    entrada = React.createRef()
    componentDidMount(){
        console.log(this.entrada)
    }
    render(){
        return ( 
            <div>
                <Entrada/>
                <Grafica/>
                <FancyInput ref={this.entrada}/>
            </div>
        );
    }
}

export default App;