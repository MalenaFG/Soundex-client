import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import GenresListPage from './pages/GenresListPage/GenresListPage'
import GenreCardPage from './pages/GenreCardPage/GenreCardPage'
import SongsListPage from './pages/SongsListPage/SongsListPage'
import SongCardPage from './pages/SongCardPage/SongCardPage'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage'
import NewGenreFormPage from './pages/NewGenreFormPage/NewGenreFormPage'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/genres' element={<GenresListPage />} />
          <Route path='/genres/:genreId' element={<GenreCardPage />} />
          <Route path='/genres/new' element={<NewGenreFormPage />} />
          <Route path='/songs' element={<SongsListPage />} />
          <Route path='/songs/:songId' element={<SongCardPage />} />
          <Route path='/about' element={<AboutUsPage />} />

          <Route path='*' element={404} />
        </Routes>
      </Container>

    </>
  )
}

export default App
