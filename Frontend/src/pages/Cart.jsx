import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'

const Cart = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const token = localStorage.getItem('token')

  const fetchCart = async () => {
    try {
      const res = await fetch(`${baseUrl}/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()

      if (Array.isArray(data)) {
        setCart(data)
      } else {
        setCart([])
      }
    } catch (error) {
      console.error('Error fetching cart:', error)
    }
  }

  const fetchTotal = async () => {
    try {
      const res = await fetch(`${baseUrl}/cart/total`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()
      setTotal(data.total || 0)
    } catch (error) {
      console.error('Error fetching total:', error)
    }
  }

  const updateQuantity = async (itemId, quantity) => {
    try {
      await fetch(`${baseUrl}/cart/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ quantity }),
      })
      fetchCart()
      fetchTotal()
    } catch (error) {
      console.error('Error updating quantity:', error)
    }
  }

  const removeItem = async (itemId) => {
    try {
      await fetch(`${baseUrl}/cart/${itemId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      })
      fetchCart()
      fetchTotal()
    } catch (error) {
      console.error('Error removing item:', error)
    }
  }

  const clearCart = async () => {
    try {
      await fetch(`${baseUrl}/cart`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      })
      fetchCart()
      fetchTotal()
    } catch (error) {
      console.error('Error clearing cart:', error)
    }
  }

  useEffect(() => {
    fetchCart()
    fetchTotal()
  }, [])

  return (
    <>
      <NavBar />
      <div className="p-5">
        <h1 className="mb-4 text-3xl font-bold">Your Cart</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.itemId}
              className="mb-4 flex items-center justify-between rounded border p-3"
            >
              <div>
                <p className="text-xl">{item.name}</p>
                <p>
                  ${item.discountedPrice.toFixed(2)} x {item.quantity} = $
                  {item.totalPrice.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="rounded bg-blue-500 px-3 py-1 text-white"
                  onClick={() => updateQuantity(item.itemId, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="rounded bg-red-500 px-3 py-1 text-white"
                  onClick={() =>
                    updateQuantity(
                      item.itemId,
                      item.quantity - 1 < 0 ? 0 : item.quantity - 1
                    )
                  }
                >
                  -
                </button>
                <button
                  className="rounded bg-gray-700 px-3 py-1 text-white"
                  onClick={() => removeItem(item.itemId)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}

        <h2 className="mt-6 text-xl font-semibold">
          Total: ${total.toFixed(2)}
        </h2>
        {cart.length > 0 && (
          <button
            className="mt-4 rounded bg-red-600 px-6 py-2 text-white"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        )}
      </div>
    </>
  )
}

export default Cart
