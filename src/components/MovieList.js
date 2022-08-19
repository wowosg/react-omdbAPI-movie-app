import React from "react";

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent
    const UrlHandleClick = (id) => window.location.href = `https://www.imdb.com/title/${id}`

    return (
        <>
            {props.movies.map((movie, index) => (
                <div key={movie.imdbID} className='col image-container d-flex justify-content-center m-3'>
                    <div className="movie-unit">
                        <img
                            onClick={() => UrlHandleClick(movie.imdbID)}
                            src={movie.Poster}
                            alt={movie.Title}
                        />
                        <div
                            className="col overlay d-flex align-items-center justify-content-center"
                            onClick={() => props.handleFavouritesClick(movie, index)}
                        >
                            <FavouriteComponent />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default MovieList