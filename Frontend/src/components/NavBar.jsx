import dropDown from '../assets/images/icons/dropdown.svg'
import search from '../assets/images/icons/search-icon.svg'
import cart from '../assets/images/icons/shoppingCart.png'
import phone from '../assets/images/icons/phone.svg'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  let items = ['Home', 'Menu', 'Services', 'Offers']
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
  const navigate = useNavigate()
  const toggleNavButton = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  }

  const cartClick = () => {
    let token = localStorage.getItem('token')
    if (!token) alert('login first')
    else {
      navigate('/cart')
    }
  }

  const logOut = () => {
    let token = localStorage.getItem('token')
    if (token) {
      localStorage.removeItem('token')
      navigate('/')
    }
  }

  return (
    <nav className="py-3">
      <div className="container mx-auto px-5">
        <div className="flex flex-wrap items-center justify-between gap-y-5">
          <div className="bg-green-color flex p-1 text-2xl font-extrabold text-blue-900 italic">
            ONLINE-MARKET
          </div>
          <ul className="hidden items-center gap-13 lg:flex">
            {items.map((item, index) => (
              <li
                key={index}
                className={`font-semibold ${item === 'Home' && 'text-green-color'}`}
              >
                {item === 'Menu' || item === 'Services' ? (
                  <div className="flex gap-2.5">
                    {item}
                    <img src={dropDown} alt="dropdown" />
                  </div>
                ) : (
                  item
                )}
              </li>
            ))}
          </ul>

          <div className="flex gap-10">
            <button
              className="flex items-center justify-center gap-3 rounded-md bg-red-500 px-4 py-2"
              onClick={() => navigate('/register')}
            >
              <p className="text-md font-semibold text-white">Register</p>
            </button>

            <button
              className="bg-green-color flex items-center justify-center gap-3 rounded-md px-4 py-2"
              onClick={() => navigate('/login')}
            >
              <p className="text-md font-semibold text-white">Login</p>
            </button>

            <button
              className="bg-green-color flex items-center justify-center gap-3 rounded-md px-4 py-2"
              onClick={() => logOut()}
            >
              <p className="text-md font-semibold text-white">Log Out</p>
            </button>
          </div>

          <div className="flex gap-10">
            <img className="h-5 w-5 lg:hidden" src={search} alt="search-icon" />
            <div className="flex flex-col md:flex lg:hidden">
              <button onClick={toggleNavButton}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          <div className="hidden items-center gap-12 lg:flex">
            <img className="h-5 w-5" src={search} alt="search-icon" />
            <img
              className="h-8 w-7"
              src={cart}
              alt="cart"
              onClick={() => cartClick()}
            />
            <div className="bg-green-color flex items-center justify-center gap-3 rounded-full px-4 py-2">
              <img className="h-5 w-5" src={phone} alt="phone" />
              <p className="text-sm font-semibold text-white">Contact</p>
            </div>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-1000 flex w-1/8 justify-center rounded-lg bg-neutral-500 text-neutral-100 lg:hidden">
            <ul className="flex flex-col gap-5">
              {items.map((item, index) => (
                <li>{item}</li>
              ))}
              <li>Cart</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
