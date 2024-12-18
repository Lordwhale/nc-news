import './app.css'
import Articles from './components/Articles'
import Footer from './components/Footer'
import Header from './components/Header'

export function App() {
  

  return (
    <div className='app'>
      <Header />
      <Articles />
      <Footer />
    </div>
  )
}
