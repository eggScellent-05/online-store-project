import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Categories from './components/Categories'
import Specials from './components/Specials'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Footer from './components/Footer'
import { useState } from 'react'

const App = () => {
  const [currentCategory, setCurrentCategory] = useState()

  return (
    <>
      <NavBar />
      <div className="mx-auto max-w-7xl bg-neutral-50 px-5">
        <Banner />
        <Categories setCurrentCategory={setCurrentCategory} />
        <Specials clickedCategory={currentCategory} />
        <Testimonials />
        <Services />
        <Footer />
      </div>
    </>
  )
}

export default App
