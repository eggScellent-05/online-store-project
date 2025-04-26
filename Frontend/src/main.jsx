import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductDetail from './pages/ProductDetail'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/product/:productId', element: <ProductDetail /> },
  { path: '/cart', element: <Cart /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
