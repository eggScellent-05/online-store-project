import catering from '../assets/images/icons/catering.svg'
import gift from '../assets/images/icons/gift.svg'
import fastDelivery from '../assets/images/icons/fast-delivery.svg'
import onlineOrdering from '../assets/images/icons/cart.png'

const Tasks = ({ taskImage, taskName, taskDescription }) => {
  return (
    <div className="flex h-[300px] max-w-[280px] min-w-[279px] flex-col items-center rounded-3xl border border-neutral-200 px-7 py-12 text-center shadow-xl sm:w-full [@media(max-width:1250px)]:w-1/2">
      <img src={taskImage} alt="taskImage" />
      <h2 className="text-green-color mt-5 mb-3 text-2xl font-bold uppercase">
        {taskName}
      </h2>
      <p className="text-xl font-medium text-green-700/60">{taskDescription}</p>
    </div>
  )
}

const Services = () => {
  return (
    <div className="mt-30 mb-40 flex items-start justify-center gap-15 [@media(max-width:1250px)]:flex-wrap">
      <div className="mt-15 flex max-w-[545px] flex-col flex-wrap">
        <h4 className="orange-heading mb-8 uppercase">Our Story & Services</h4>
        <h1 className="normal-heading max-w-[500px]">
          Our Culinary Journey And Services
        </h1>
        <p className="mb-5 text-[21px] font-medium text-neutral-500">
          Rooted in passion, we curate unforgettable dining experiences and
          offer exceptional services, blending culinary artistry with warm_
          hospitality.
        </p>

        <div className="bg-green-color font-xl text-semibold mt-10 flex w-[145px] justify-center rounded-full px-8 py-4 tracking-wider text-white">
          <p>Explore</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10 max-lg:px-20 [@media(max-width:1250px)]:px-40">
        <Tasks
          taskImage={catering}
          taskName="catering"
          taskDescription="Delight your guests with our flavors and  presentation"
        />
        <Tasks
          taskImage={fastDelivery}
          taskName="Fast delivery"
          taskDescription="We deliver your order promptly to your door"
        />
        <Tasks
          taskImage={onlineOrdering}
          taskName="Online Ordering"
          taskDescription="Explore menu & order with ease using our Online Ordering "
        />
        <Tasks
          taskImage={gift}
          taskName="Gift Cards"
          taskDescription="Give the gift of exceptional dining with Foodi Gift Cards"
        />
      </div>
    </div>
  )
}

export default Services
