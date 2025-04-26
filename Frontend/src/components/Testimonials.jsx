import chef from '../assets/images/img/chef.png'
import smile from '../assets/images/icons/emoji.png'
import pizza from '../assets/images/icons/pizza.png'
import emptyComment from '../assets/images/icons/emptyComment.png'
import chefComment from '../assets/images/icons/bestChefComment.png'
import profile1 from '../assets/images/img/profile1.png'
import profile2 from '../assets/images/img/profile2.png'
import profile3 from '../assets/images/img/profile3.png'
import star from '../assets/images/icons/star-icon.png'

const Testimonials = () => {
  return (
    <div className="mt-25 flex flex-wrap justify-evenly gap-25 py-12">
      <div className="relative p-5">
        <div className="relative flex h-[450px] w-[310px] flex-col justify-end">
          <div className="bg-green-color-light h-52/100 rounded-tl-[120px] rounded-tr-[110px] rounded-b-3xl"></div>
          <img
            className="absolute bottom-0 left-1/2 w-72 -translate-x-7/13 transform"
            src={chef}
            alt="chef"
          />
        </div>
        <img
          className="absolute bottom-36 left-1 h-9"
          src={smile}
          alt="smile"
        />
        <img
          className="absolute right-2 bottom-38 h-8"
          src={pizza}
          alt="pizza"
        />
        <img
          className="absolute right-0 bottom-0 w-40"
          src={emptyComment}
          alt="comment"
        />
        <img
          className="absolute right-5 bottom-3.5 h-3.5"
          src={chefComment}
          alt=""
        />
      </div>

      <div className="flex flex-col justify-center">
        <h4 className="orange-heading mb-8 uppercase">Testimonials</h4>
        <h1 className="normal-heading max-w-[500px]">
          What Our Customers Say About Us{' '}
        </h1>
        <p className="max-w-[525px] text-[21px] font-medium text-neutral-600">
          “I had the pleasure of dining at Foodi last night, and I'm still
          raving about the experience! The attention to detail in presentation
          and service was impeccable”
        </p>

        <div className="mt-10 flex flex-wrap gap-10 pr-5">
          <div className="flex items-center">
            <img className="-ml-0 h-18 w-18" src={profile1} alt="profile1" />
            <img className="-ml-7 h-20 w-20" src={profile2} alt="profile2" />
            <img className="-ml-7 h-20 w-20" src={profile3} alt="profile3" />
          </div>

          <div className="flex flex-col justify-center gap-2">
            <h5 className="text-xl font-medium tracking-wide">
              Customer Feedback
            </h5>
            <div className="flex gap-4">
              <img className="h-5 w-5" src={star} alt="star" />
              <p className="text-lg font-medium tracking-wide">
                4.9{' '}
                <span className="ml-3 text-neutral-500"> (18.6k Reviews)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
