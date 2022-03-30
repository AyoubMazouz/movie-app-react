import React from 'react'

const MovieContainer = ({ movies }) => {
    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

            {movies
                ? movies.map(movie => (
                    <div className='bg-gray-700 rounded overflow-hidden flex flex-col justify-center items-center shadow-md'>

                        <img src={movie.Poster ? movie.Poster : 'https://via.placeholder.com/&text=No_Poster_for_this_movie'}
                            alt=''
                            className=''></img>
                        <div className='font-bold text-gray-100'>
                            {movie.Title}
                        </div>
                        <div className='text-gray-400'>
                            Year:
                            <span className='font-semibold text-gray-300'>
                                {` ${movie.Year}`}
                            </span>
                        </div>

                    </div>
                ))
                : <h1>No movies available</h1>
            }
        </div>
    )
}

export default MovieContainer;