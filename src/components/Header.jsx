import Navbar from "./Navbar";
import Button from "./Button";

const Header = () => {
  return (
    <section className=" bg-primary-500 wave lg:h-screen">
      <div className="w-full">
        <Navbar />
        <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center">
            <div className="sm:w-[500px] sm:mx-16 mx-5 ">
                <h1 className="lg:text-[70px] md:text-[64px] semibold text-basecolor">Bring Your Ideas to Digital Life</h1>
                <p className="text-basecolor mb-5">Where a new generation of digital experts brings your vision to life through innovative web development and digital education.</p>
                <Button text="Get in touch" />
            </div>
            <div className="flex justify-center items-end">
                <img src="/images/hero.png" alt="hero" className="lg:w-10/12 md:w-3/4 w-full"/>
            </div>
        </div>
      </div>


    </section>
  );
};
export default Header;
