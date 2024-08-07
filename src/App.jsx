import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Footer from './components/Footer/Footer'
import AppRoutes from './routes/AppRoutes/AppRoutes'
import Navigation from './components/Navigation/Navigation'

function App() {

  return (
    <>
      <Navigation />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
