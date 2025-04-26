import { useEffect, useState } from 'react'
import categoryIcon from '../assets/images/icons/categoryIcon.png'

const CategoryBox = ({ image, categoryId, categoryName, onClick }) => {
  return (
    <div
      onClick={() => onClick(categoryId)}
      className="flex h-[275px] w-[275px] flex-col items-center justify-center gap-4 rounded-3xl border border-neutral-200 px-1 py-4 shadow-lg hover:border-3 hover:border-[#68acb8] active:border-green-600"
    >
      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#C1F1C6] p-4">
        <img className="h-auto w-auto" src={image} alt="category-image" />
      </div>
      <h3 className="mt-4 mb-1 text-2xl font-semibold tracking-wide">
        {categoryName}
      </h3>
    </div>
  )
}

const Categories = (props) => {
  const [categories, setCategories] = useState([])
  const baseUrl = import.meta.env.VITE_BASE_URL
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${baseUrl}/categories`)
        const data = await res.json()
        console.log(data)
        setCategories(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchCategories()
  }, [])

  return (
    <div className="mb-40 text-center">
      <h4 className="lg:text-md orange-heading mb-3">CUSTOMER FAVORITES</h4>
      <h1 className="normal-heading">Popular Categories</h1>
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        {categories.map((category, index) => (
          <CategoryBox
            onClick={props.setCurrentCategory}
            key={index}
            categoryName={category.category_name}
            categoryId={category.category_id}
            image={categoryIcon}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Categories
