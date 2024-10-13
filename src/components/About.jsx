import WeDo from "./WeDo";

const About = () => {
  return (
    <section className="lg:mx-11 mx-5 mt-10">
      <div className="flex justify-between px-5">
        <div className="ripped"></div>
        <div className="ripped"></div>
        <div className="ripped"></div>
        <div className="ripped"></div>
        <div className="ripped"></div>
        <div className="ripped"></div>
        <div className="ripped"></div>
        <div className="ripped md:block hidden"></div>
        <div className="ripped md:block hidden"></div>
        <div className="ripped md:block hidden"></div>
        <div className="ripped md:block hidden"></div>
        <div className="ripped md:block hidden"></div>
        <div className="ripped md:block hidden"></div>
        <div className="ripped sm:block hidden"></div>
        <div className="ripped sm:block hidden"></div>
      </div>
      <div className="rounded-2xl bg-accent-500 border-darkcolor border-2 sm:p-11 p-5 flex flex-col sm:-mt-5 -mt-[20px]">
        <h1 className="self-start text-basecolor my-10 flex flex-wrap ">
          <span className="bg-darkcolor text-basecolor pr-3">About</span><span className="bg-darkcolor text-basecolor pr-3">Neo</span><span className="bg-darkcolor text-basecolor pr-3">One</span>
        </h1>
        <h5>
          Neo One is an agency dedicated to helping our clients innovate in the
          digital world. We provide custom website development solutions
          tailored to the specific needs of each client, as well as in-depth
          edutech programs to nurture digital talent such as website and game
          development. With Neo One, you can grow your business and build
          impactful digital projects.
        </h5>
      </div>
      <WeDo />
    </section>
  );
};
export default About;
