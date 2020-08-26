import React, { Component } from 'react'
import Axios from 'axios'
import Movie from '../Movie'
import BuscadorPeliculas from '../BuscadorPeliculas/BuscadorPeliculas'

class BuscadorPeliculasAxios extends Component{
    state = {
        movie:{},
        isFetching: false
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        this.setState({isFetching:true})

        const title = event.target[0].value

        const url = 'http://www.omdbapi.com/?apikey=2eb26a07'
        
        const res = await Axios.get(url, {params:{t:title}})
        this.setState({
            movie:res.data,
            isFetching: false
        })
    }

    render(){
        const {movie, isFetching} = this.state
        return(
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                            placeholder='Nombre de pelicula'/>
                        <button>Buscar</button>
                    </form>
                </div>
                <div>
                    {isFetching && (
                        <h2>Cargando...</h2>
                    )}
                    {!isFetching &&(
                        <Movie movie={movie}/>
                    )}
                </div>
            </div>
        )
    }
}

export default BuscadorPeliculasAxios