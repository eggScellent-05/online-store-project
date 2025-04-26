import searchBarIcon from '../assets/images/icons/search.svg'
import { useEffect, useState } from 'react'
import Products from '../widgets/Products'

function Specials(props) {
  const [items, setItems] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [query, setQuery] = useState('')

  const baseUrl = import.meta.env.VITE_BASE_URL

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${baseUrl}/items`)
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchItems()
  }, [])

  useEffect(() => {
    const applyFilters = async () => {
      if (props.clickedCategory && query === '') {
        try {
          const response = await fetch(
            `${baseUrl}/items/category/${props.clickedCategory}`
          )
          const data = await response.json()
          setFilteredProducts(data)
        } catch (error) {
          console.log(error)
        }
      } else {
        const filtered = items.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )
        setFilteredProducts(filtered)
      }
    }

    applyFilters()
  }, [props.clickedCategory, query, items])

  return (
    <div className="mb-40">
      <h4 className="lg:text-md orange-heading mb-3 uppercase">
        LATEST TRENDS
      </h4>
      <h1 className="normal-heading max-w-[500px]">Top selling products </h1>

      <div className="mb-20 flex items-center justify-center rounded-full bg-gradient-to-r from-[#73cdab] to-[#39db4a] py-8">
        <div className="flex w-[750px] max-w-full items-center rounded-full bg-white py-2 pr-3 pl-5 shadow-lg">
          <input
            type="text"
            className="flex-1 px-4 py-2 text-2xl font-medium text-gray-700 placeholder-gray-500 outline-none"
            placeholder="Search for anything..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          />

          <button className="rounded-full bg-neutral-500 p-4">
            <img className="" src={searchBarIcon} alt="search" />
          </button>
        </div>
      </div>

      <div className="flex justify-center px-10">
        <div className="flex flex-wrap gap-10 p-3">
          {filteredProducts.length === 0 ? (
            <h2>No results for your search</h2>
          ) : (
            filteredProducts.map((item, index) => (
              <Products
                key={index}
                productId={item.id}
                productImage={item.image}
                productTitle={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Specials
