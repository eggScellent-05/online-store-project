import instagram from '../assets/images/icons/instagram.svg'
import twitter from '../assets/images/icons/twitter.svg'
import youtube from '../assets/images/icons/youtube.svg'
import facebook from '../assets/images/icons/facebook.svg'
import Copyright from '../assets/images/icons/copyright.svg'

const Footer = () => {
  const footerLinks = [
    {
      heading: 'Useful links',
      links: ['About us', 'Events', 'Blogs', 'FAQ'],
    },
    {
      heading: 'Main Menu',
      links: ['Home', 'Offers', 'Service'],
    },
    {
      heading: 'Contact Us',
      links: ['example@email.com', '+64 958 248 966', 'Social media', ''],
    },
  ]

  const medias = [facebook, instagram, twitter, youtube]

  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="">
          <div className="bg-green-color flex max-w-55 p-1 text-2xl font-extrabold text-blue-900 italic">
            ONLINE-MARKET
          </div>

          <p className="mt-7 max-w-68 text-[20px] font-medium text-neutral-500">
            Food-Clothing-Electronics
          </p>
        </div>

        {footerLinks.map((item, index) => (
          <div className="" key={index}>
            <h4 className="mb-4 text-lg font-semibold">{item.heading}</h4>
            <ul className="space-y-2">
              {item.links.map(
                (link, linkIndex) =>
                  link && (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="hover:text-green-color text-[20px] font-medium text-neutral-500"
                      >
                        {link}
                      </a>
                    </li>
                  )
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-start gap-50">
        <div className="flex justify-between gap-4">
          {medias.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center rounded-full p-3 ${item === facebook ? 'bg-green-color' : 'bg-[#C1F1C6]'} `}
            >
              <img src={item} alt="facebook" className="h-4 w-4 rounded" />
            </div>
          ))}
        </div>

        <div className="flex gap-3 self-center text-[18px] font-medium text-neutral-500">
          <p>Copyright </p>
          <img src={Copyright} alt="copyright" />
          <p>2023 Dscode | All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
