import './app.css'
import { Routes, Route } from 'react-router'
import Articles from './components/Articles'
import Footer from './components/Footer'
import Header from './components/Header'


export function App() {
  
    return (
    <div className='app'>
      <Header />
        <Routes>
          <Route path='/' element={<Articles />} />
          <Route path='/articles' element={<Articles />} />
        </Routes>
      <Footer />
    </div>
  )
}
