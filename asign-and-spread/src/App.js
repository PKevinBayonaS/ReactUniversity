import React, {Component} from 'react'
import Contador from './components/contador'
import Gato from './components/gato'


class App extends Component{
    state = {
        fuerza:100,
        vidasRestantes: 7,
        name:'gatulez'
    }
    render(){
        const otrosDatos ={
            raza:'feligrez',
            peleasNocturnas: 300,
            victorias: 170,
            derrotas: 100,
            empate: 30
        }
        return(    
            <div>
                <Gato name='Garfiels'
                    edad='2 años'
                    { ...otrosDatos }
                    { ...this.state }/>
                <Contador/>
            </div>
        )
    }
}

export default App