import { Link } from 'react-router-dom'
import star from '../assets/images/icons/star-icon.png'

const Products = ({ productImage, productId, productTitle, price, rating }) => {
  return (
    <Link to={`/product/${productId}`}>
      <div className="flex h-[450px] max-w-[352px] min-w-[350px] flex-col rounded-2xl border border-neutral-200 px-4 py-6 shadow-xl hover:border-3 hover:border-[#68acb8] active:border-neutral-500">
        <img
          src={productImage}
          alt="product"
          className="mx-6 mb-8 h-48 w-48 self-center mix-blend-multiply"
        />
        <h6 className="mb-5 text-xl font-medium tracking-wide">
          {productTitle}
        </h6>
        <div className="mt-auto flex justify-between px-2">
          <h6 className="text-lg font-semibold tracking-wide">
            <span className="orange-heading">$</span>
            {price}
          </h6>
          <div className="flex items-center gap-2">
            <img className="h-5 w-5" src={star} alt="" />
            <p className="text-lg">{rating}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Products
