const Footer = () =>{
    return(
        <footer className="bg-darkcolor lg:px-11 px-5 text-basecolor pt-20 pb-10">
        <div className="lg:flex lg:justify-between">
          <div className="flex flex-col justify-between">
            <h3>Let’s Grow With Neo One Creative</h3>
            <div className="flex flex-col gap-5">
              <h5>Get Exclusive Updates From Us</h5>
              <form action="mailto:shaka.aufa.alhajar@gmail.com" method="post" encType="text/plain" className="flex">
                <input
                  type="text"
                  placeholder="Yourmail@example.com"
                  className="py-2 px-5 sm:w-auto w-full rounded-l-full text-darkcolor"
                />
                <button type="submit" className="bg-primary-500 py-2 px-5 rounded-r-full font-semibold text-darkcolor">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="flex xl:ml-0 lg:ml-6 ml-8 flex-wrap gap-10 lg:mt-0 mt-20">
            <ul className="text-gray-500 list-disc">
              <h5 className="-ml-5 text-white">Services</h5>
              <li>
                <a href="">Website development</a>
              </li>
              <li>
                <a href="">Education Technology</a>
              </li>
            </ul>
            <ul className="text-gray-500 list-disc">
              <h5 className="-ml-5 text-white">About</h5>
              <li>
                <button>
                What we do?
                </button>
              </li>
              <li>
                <button>Gen Z Approach</button>
              </li>
              <li>
                <button>
                About Service Approach
                </button>
              </li>
              <li>
                <button>
                Project Portfolio
                </button>
              </li>
            </ul>
            <ul className="text-gray-500 list-disc">
              <h5 className="-ml-5 text-white">Contact</h5>
              <li>
                <button className="flex items-center">
                  <i className="bx bxs-phone text-2xl mr-2"></i>+62 895 6221 44623
                </button>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  <i className="bx bxl-gmail text-2xl mr-2"></i>info@neoonecreati.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center"
                >
                  <i className='bx bxl-instagram text-2xl mr-2'></i>@neooneid
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between mt-10 bot gap-2">
          <span>©2024 Neo One. All Right Reserved</span>
          <div className="flex gap-10">
            <a href="/faq">FAQ</a>
            <a href="/termspolicy">Terms & Policy</a>
          </div>
        </div>
      </footer>
    );
};
export default Footer;