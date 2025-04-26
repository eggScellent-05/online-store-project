import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router-dom'
import star from '../assets/images/icons/star-icon.png'
import heart from '../assets/images/icons/wishlistHeart.svg'
import returns from '../assets/images/icons/return-tick.svg'

const Divider = () => <div className="border-b-2 border-neutral-300"></div>

const ProductDetail = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const baseUrl = import.meta.env.VITE_BASE_URL

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${baseUrl}/items/${productId}`)
        const data = await response.json()
        setProduct(data)
      } catch (error) {
        console.error('Error fetching product:', error)
      }
    }
    fetchProduct()
  }, [productId])

  if (!product) return <p>Loading...</p>

  return (
    <>
      <NavBar />
      <div className="bg-neutral-100 px-5">
        <h6 className="my-15 text-neutral-400">
          Home / {product.category.category_name} /
          <span className="text-green-600"> {product.title}</span>
        </h6>

        <div className="flex flex-wrap justify-center gap-20 p-10">
          <div className="h-[560px] max-w-[470px] min-w-[470px] flex-1">
            <div className="flex h-[600px] items-center justify-center rounded-3xl bg-green-700/30 p-15">
              <img
                className="max-h-[500px] max-w-[350px]"
                src={product.image}
                alt="product"
              />
            </div>
          </div>

          <div className="flex max-w-[470px] min-w-[470px] flex-1 flex-col gap-5">
            <h1 className="special-font mb text-4xl font-semibold text-blue-950">
              {product.title}{' '}
            </h1>

            <div className="flex items-center gap-2">
              <img className="h-5 w-5" src={star} alt="rating" />
              <h4 className="text-xl font-medium">
                {product.rating}{' '}
                <span className="ml-2 text-sm text-neutral-300">|</span>
                <span className="ml-2 text-sm font-light text-neutral-500">
                  (100+ reviews)
                </span>
              </h4>
            </div>

            {product.price === product.discount_price ? (
              <>
                <h2 className="text-2xl font-semibold text-black">
                  ${product.price}
                </h2>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-black line-through decoration-red-500">
                  ${product.price}
                </h2>

                <h2 className="text-2xl font-semibold text-black">
                  Offer Price: ${product.discount_price}
                </h2>
              </>
            )}

            <h4 className="text-lg font-medium text-orange-600/90">
              In stock: {product.count}
            </h4>
            <Divider />

            <p className="text-lg">{product.description}</p>
            <Divider />

            <div className="flex flex-wrap gap-5">
              <div className="flex flex-1 items-center justify-between gap-10 rounded-full bg-neutral-300 px-5 py-3 text-2xl font-semibold text-neutral-500">
                <p>-</p> <p>No.</p> <p>+</p>
              </div>
              <div className="flex flex-1 items-center justify-center gap-10 rounded-full bg-orange-600/80 px-2 py-3 text-2xl font-semibold text-neutral-50">
                <p>Buy Now</p>
              </div>

              <button
                onClick={async () => {
                  const token = localStorage.getItem('token')
                  if (!token) return alert('Please login first')

                  try {
                    const res = await fetch(`${baseUrl}/cart`, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                      },
                      body: JSON.stringify({ itemId: product.id, quantity: 1 }),
                    })

                    const data = await res.json()
                    alert('Added to cart!')
                  } catch (err) {
                    console.log(err)
                  }
                }}
                className="rounded-xl bg-green-600 px-5 py-3 text-white"
              >
                Add to Cart
              </button>
            </div>

            <Divider />
            <div className="flex items-center gap-3">
              {' '}
              <img className="ml-2 h-6 w-6" src={heart} alt="wishlist" />
              <span className="text-lg font-semibold">Add to wishlist</span>
            </div>
            <div className="flex items-center gap-3">
              <img
                className="ml-1 box-content h-4 w-4 rounded-full bg-amber-500/60 p-2"
                src={returns}
                alt="returns"
              />
              <span className="text-lg font-medium text-neutral-600">
                30 days money back guarantee
              </span>
            </div>
            <Divider />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
