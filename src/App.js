import react, { useEffect } from 'react'

import './App.css'
import Footer from './components/Footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Projects from './components/Projects/Projects'
import Header from './components/Header/Header'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      dataAosOffset: '1000',
    })
    AOS.refresh()
  }, [])

  return (
    <div className='App'>
      {/* Header */}
      <Header />

      {/* Projects */}
      <Projects />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
