import React from 'react'

const Movie =({movie})=>{
    console.log(movie)
    if (movie.Response ==='True'){
            return(
                <div>
                    <h1>{movie.Title}</h1>
                    <p>
                        {movie.Plot}
                    </p>
                    <img src={movie.Poster}
                    alt='Poster'
                    style={{
                        width:'150px'
                    }}/>
                </div>
        )
    }else{
        return(
            <div>
                <p>
                    {movie.Error}
                </p>
            </div>
        )
    }
}

export default Movie