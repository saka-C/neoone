import Button from "./Button";

const WeDo = () => {
  return (
    <div className="mt-20">
      <h1 className="flex items-center justify-center">
        What We Do?<i className="bx bxs-certification text-primary-500"></i>
      </h1>

      <div className="lg:flex flex-row items-center justify-between gap-6 mt-10">
        <div className="flex flex-col lg:w-4/6 h-full md:gap-10 gap-5 lg:mb-0 mb-5 bg-white">
          <h1 className="bg-darkcolor text-basecolor px-3 py-2 self-start sm:text-5xl text-3xl">
            Website Development
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Justo bibendum mauris quis
            risus eu. Non sem etiam amet pellentesque dictumst. Urna diam
            dictumst in velit mi vel non. Porttitor magna laoreet porttitor
            purus at diam semper neque eget. Faucibus pellentesque non habitant
            sollicitudin. Posuere cursus dictum tristique nulla. Pharetra diam
            proin lectus pharetra posuere viverra eget magna...
          </p>
          <Button text="Get a quote" />
        </div>
        <div className="shadow-2xl shadow-gray-300 lg:w-80 p-8 rounded-2xl">
            <div className="flex justify-between">
              <div className="inner-hole"></div>
              <div className="inner-hole"></div>
              <div className="inner-hole"></div>
              <div className="inner-hole"></div>
              <div className="inner-hole"></div>
            </div>
            <h3 className="mt-5 text-center text-gray-300">Feature</h3>
            <div className="flex items-center gap-3">
              <i className="bx bx-check-double text-4xl text-green-500"></i>
              <h5>Custom</h5>
            </div>
            <div className="flex items-center gap-3">
              <i className="bx bx-check-double text-4xl text-green-500"></i>
              <h5>Creative Design</h5>
            </div>
            <div className="flex items-center gap-3">
              <i className="bx bx-check-double text-4xl text-green-500"></i>
              <h5>Trend UI/UX</h5>
            </div>
            <div className="flex items-center gap-3">
              <i className="bx bx-check-double text-4xl text-green-500"></i>
              <h5>Affordable Prices</h5>
            </div>
            <div className="flex items-center gap-3">
              <i className="bx bx-check-double text-4xl text-green-500"></i>
              <h5>Using Optimal Frameworks</h5>
            </div>
          </div>
      </div>
      <div className="lg:flex flex-row-reverse items-center justify-between gap-6 mt-20 bg-white">
        <div className="flex flex-col lg:w-4/6 h-full md:gap-10 gap-5 lg:mb-0 mb-5">
          <h1 className="bg-darkcolor text-basecolor px-3 py-2 self-start sm:text-5xl text-3xl">
            Education Technology
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Justo bibendum mauris quis
            risus eu. Non sem etiam amet pellentesque dictumst. Urna diam
            dictumst in velit mi vel non. Porttitor magna laoreet porttitor
            purus at diam semper neque eget. Faucibus pellentesque non habitant
            sollicitudin. Posuere cursus dictum tristique nulla. Pharetra diam.
          </p>
          <Button text="Learn More" />
        </div>
        <div className="shadow-2xl shadow-gray-300 lg:w-80 p-8 rounded-2xl">
          <div className="flex justify-between">
            <div className="inner-hole"></div>
            <div className="inner-hole"></div>
            <div className="inner-hole"></div>
            <div className="inner-hole"></div>
            <div className="inner-hole"></div>
          </div>
          <h3 className="mt-5 text-center text-gray-300">Feature</h3>
          <div className="flex items-center gap-3">
            <i className="bx bx-check-double text-4xl text-green-500"></i>
            <h5>Good Lesson.</h5>
          </div>
          <div className="flex items-center gap-3">
            <i className="bx bx-check-double text-4xl text-green-500"></i>
            <h5>Online Class.</h5>
          </div>
          <div className="flex items-center gap-3">
            <i className="bx bx-check-double text-4xl text-green-500"></i>
            <h5>Event Workshop.</h5>
          </div>
          <div className="flex items-center gap-3">
            <i className="bx bx-check-double text-4xl text-green-500"></i>
            <h5>Affordable Prices.</h5>
          </div>
          <div className="flex items-center gap-3">
            <i className="bx bx-check-double text-4xl text-green-500"></i>
            <h5>Professional Mentor (Coaches).</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeDo;
