import React, { Component } from 'react'
import Movie from '../Movie'

class BuscadorPeliculas extends Component{
    state ={
        movie:{},
        cargando: false
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const title = event.target[0].value
        const url = 'http://www.omdbapi.com/?apikey=2eb26a07'
        this.setState({cargando: true})
        const res = await fetch(url+'&t='+ title)
        const movie = await res.json()
        this.setState({ movie, cargando:false })
    }
    render(){
        const {movie, cargando} = this.state
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    placeholder='Nombre de pelicula'/>
                    <button>Buscar</button>
                </form>
                {cargando && (
                    <h2>Cargando...</h2>
                )} 
                {!cargando && (
                     <Movie movie={movie}/>
                )}           
            </div>
        )
    }
}

export default BuscadorPeliculas