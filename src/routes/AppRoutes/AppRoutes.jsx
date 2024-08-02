import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import GenresListPage from '../../pages/GenresListPage/GenresListPage'
import GenreDetailsPage from '../../pages/GenreDetailsPage/GenreDetailsPage'
import NewGenreFormPage from '../../pages/NewGenreFormPage/NewGenreFormPage'
import SongsListPage from '../../pages/SongsListPage/SongsListPage'
import SongCardPage from '../../pages/SongCardPage/SongCardPage'
import NewSongFormPage from '../../pages/NewSongFormPage/NewSongFormPage'
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/genres' element={<GenresListPage />} />
            <Route path='/genres/:genreId' element={<GenreDetailsPage />} />
            <Route path='/genres/new' element={<NewGenreFormPage />} />
            <Route path='/songs' element={<SongsListPage />} />
            <Route path='/songs/:songId' element={<SongCardPage />} />
            <Route path='/songs/new' element={<NewSongFormPage />} />
            <Route path='/about' element={<AboutUsPage />} />

            <Route path='*' element={404} />
        </Routes >
    )
}

export default AppRoutes