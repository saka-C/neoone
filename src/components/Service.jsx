const Service = () => {
  return (
    <section className="bg-darkcolor md:rounded-b-[100px] rounded-b-[50px] lg:px-11 px-5 py-16">
      <div className="bg-basecolor rounded-3xl overflow-hidden">
        <div className="w-full overflow-hidden holes-wrapper">
          <div className="hole"></div>
          <div className="hole"></div>
          <div className="hole"></div>
          <div className="hole"></div>
          <div className="hole"></div>
          <div className="hole"></div>
          <div className="hole"></div>
          <div className="hole"></div>
          <div className="hole"></div>
          <div className="hole"></div>
        </div>
        <h1 className="sm:px-10 px-5">Our Service</h1>
        <div className="sm:p-10 p-5">
          <div className="flex lg:flex-row flex-col lg:gap-12 gap-8">
            <div className="bg-secondary-500 border-2 border-darkcolor rounded-2xl sm:p-9 p-4 w-full">
                <h1 className="sm:text-[48px] text-[32px]">Website Development</h1>
                <h5>Customize your website for your interests or your business with us</h5>
                <button className="flex items-center mt-10"><h5>Get a quote<i className='bx bx-right-arrow ml-2'></i></h5></button>
            </div>
            <div className="bg-primary-500 border-2 border-darkcolor rounded-2xl sm:p-9 p-4 w-full">
                <h1 className="sm:text-[48px] text-[32px]">Education Technology</h1>
                <h5>Take our class, you can learn how to develop websites and games.</h5>
                <button className="flex items-center mt-10"><h5>Learn more<i className='bx bx-right-arrow ml-2'></i></h5></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
