import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MovieList from './components/MovieList'
import MovieListHeading from './components/MovieListHeading'
import SearchBox from './components/SearchBox'
import AddFavourite from './components/AddFavourite'
import RemoveFavourites from './components/RemoveFavourites'
import NotificationComponent from './components/NotificationComponent'
import AlertComponent from './components/AlertComponent'

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [favourites, setFavourites] = useState([])
    const [notificationIsShow, setNotificationIsShow] = useState(false)
    const [alertIsShow, setAlertIsShow] = useState(false)

    useEffect(() => {
        const getMovieRequest = async (searchValue) => {
            const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ce9882d4`;
            const response = await fetch(url)
            const responseJson = await response.json()

            responseJson.Search && setMovies(responseJson.Search)
        }
        getMovieRequest(searchValue)
    }, [searchValue])

    useEffect(() => {
        const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'))

        movieFavourites && setFavourites(movieFavourites)
    }, [])

    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
    }

    const isSame = (movie) => {
        for (let i = 0; i < favourites.length; i++) {
            if (movie.Title === favourites[i].Title && movie.Year === favourites[i].Year) {
                return true
            }
        }
    }

    const notificationHandle = () => {
        setNotificationIsShow(true)
        const timer = setTimeout(() => {
            setNotificationIsShow(false)
            clearTimeout(timer)
        }, 1000)
    }

    const alertHandle = () => {
        setAlertIsShow(true)
        const timer = setTimeout(() => {
            setAlertIsShow(false)
            clearTimeout(timer)
        }, 1000)
    }

    const addFavourite = (movie, index) => {
        if (!isSame(movie)) {   // 判斷是否重複
            const newFavouriteList = [...favourites, movie]
            setFavourites(newFavouriteList) // 設定最愛
            saveToLocalStorage(newFavouriteList)    // localstorage
            notificationHandle()    // 顯示添加成功通知

        } else {
            alertHandle()   // 顯示電影已在最愛通知
        }
    }

    const removeFavourite = (movie, index) => {
        const newFavouriteList = [...favourites]
        newFavouriteList.splice(index, 1)
        setFavourites(newFavouriteList)
        saveToLocalStorage(newFavouriteList)
    }

    return (
        <div className='container-fluid movie-app'>

            {/* movies */}
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading='Movies' />
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className='row'>
                <MovieList
                    movies={movies}
                    handleFavouritesClick={addFavourite}
                    favouriteComponent={AddFavourite}
                />
            </div>

            {/* favourites */}
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading='Favourites' />
            </div>
            <div className='row'>
                <MovieList
                    movies={favourites}
                    handleFavouritesClick={removeFavourite}
                    favouriteComponent={RemoveFavourites}
                />
            </div>
            {notificationIsShow && <NotificationComponent />}
            {alertIsShow && <AlertComponent />}
        </div>
    )
}

export default App