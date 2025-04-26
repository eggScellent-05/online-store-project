import play_button from '../assets/images/icons/play-button.svg'
import girl from '../assets/images/img/eating-noodles.png'
import comment from '../assets/images/img/spicy-food.png'
import food from '../assets/images/img/food.svg'
import star from '../assets/images/icons/star-icon.png'

const FoodItem = ({ foodImage, foodName, price, position }) => {
  return (
    <div
      className={`absolute flex gap-2 pr-2 lg:bottom-0 lg:pr-4 ${position} z-60 w-[110px] rounded-md bg-white p-1 drop-shadow-2xl lg:w-[155px] lg:rounded-lg lg:p-2`}
    >
      <img
        className="h-8 w-8 rounded-md lg:h-11 lg:w-11 lg:rounded-lg"
        src={foodImage}
        alt="food"
      />
      <div className="flex flex-col gap-0.5 lg:gap-1">
        <p className="text-[8px] font-semibold lg:text-[11px]">{foodName}</p>
        <div className="flex gap-1 lg:gap-2">
          <img className="h-1.5 w-1.5 lg:h-3 lg:w-3" src={star} alt="star" />
          <img className="h-1.5 w-1.5 lg:h-3 lg:w-3" src={star} alt="star" />
          <img className="h-1.5 w-1.5 lg:h-3 lg:w-3" src={star} alt="star" />
        </div>
        <p className="text-[7px] font-semibold lg:text-[10px]">
          <span className="text-red-400">$ </span>
          {price}
        </p>
      </div>
    </div>
  )
}

const Banner = () => {
  return (
    <div className="mb-35 flex flex-wrap items-center justify-around pb-10">
      <div className="flex max-w-[225px] flex-col gap-5 lg:max-w-[455px] lg:gap-10">
        <h1 className="text-2xl font-bold tracking-tight lg:text-5xl">
          Dive into Delights Of Delectable{' '}
          <span className="text-green-color">Food</span>
        </h1>
        <p className="text-[9px] lg:text-lg">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>
        <div className="flex max-w-[200px] items-center justify-between lg:max-w-[400px]">
          <div className="bg-green-color rounded-full px-4 py-2 text-[9px] font-semibold text-white lg:px-8 lg:py-4 lg:text-lg">
            Order Now
          </div>
          <h6 className="text-[10px] font-semibold lg:text-lg">Watch Video</h6>
          <div className="rounded-full border border-neutral-100 bg-white p-2 drop-shadow-lg lg:p-4">
            <img className="h-2 w-2 lg:h-4 lg:w-4" src={play_button} alt="" />
          </div>
        </div>
      </div>

      <div className="relative px-10 py-10 lg:px-20 lg:py-15">
        <div className="bg-green-color-light mt-6 h-70 w-70 rounded-full lg:h-75 lg:w-75"></div>
        <img
          className="absolute inset-0 z-20 m-auto w-96 lg:h-auto lg:w-[535px]"
          src={girl}
          alt="girl"
        />
        <img
          className="absolute top-15 left-0 z-50 w-35 lg:w-50"
          src={comment}
          alt="comment"
        />

        <FoodItem
          foodImage={food}
          foodName="Spicy Noodles"
          price="18.00"
          position="bottom-3 left-11"
        />

        <FoodItem
          foodImage={food}
          foodName="Fried Rice"
          price="18.00"
          position="bottom-3 right-17"
        />
      </div>
    </div>
  )
}

export default Banner
