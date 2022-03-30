import React from 'react'

const MovieContainer = ({ movies }) => {
    return (
        <div className='grid grid-cols-4 gap-4'>

            {movies
                ? movies.map(movie => (
                    <div className='bg-gray-100 rounded overflow-hidden flex flex-col justify-center items-center'>
                        <img src={movie.Poster ? movie.Poster : 'https://via.placeholder.com/&text=No_Poster_for_this_movie'}
                            alt=''
                            className=''></img>
                        <div>{movie.Title}</div>
                    </div>
                ))
                : <h1>No movies available</h1>
            }
        </div>
    )
}

export default MovieContainer;