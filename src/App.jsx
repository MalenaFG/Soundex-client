import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AppRoutes from './routes/AppRoutes/AppRoutes'

function App() {

  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
