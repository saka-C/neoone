const GenZ = () => {
  return (
    <div className="bg-secondary-500 lg:px-11 px-5 py-12">
        <div className="flex flex-col items-center mb-12">
            <h1 className="flex items-center gap-4">
                Our Approach<i className="bx bxs-certification text-primary-500"></i>
            </h1>
            <h4>About New Generation (Gen Z)</h4>
        </div>
      <div className="flex md:flex-row flex-col gap-6">
        <div className="bg-basecolor rounded-3xl border-2 border-black w-full flex flex-col gap-12 items-center p-10">
            <h3 className="text-center">What People Say</h3>
            <div className="flex flex-col gap-6">
                <h4 className="flex items-center sm:gap-5 gap-3 sm:text-2xl text-base"><i class='bx bxs-x-circle sm:text-5xl text-3xl text-red-500'></i>Too Dependent on Technology.</h4>
                <h4 className="flex items-center sm:gap-5 gap-3 sm:text-2xl text-base"><i class='bx bxs-x-circle sm:text-5xl text-3xl text-red-500'></i>Lack of Focus.</h4>
                <h4 className="flex items-center sm:gap-5 gap-3 sm:text-2xl text-base"><i class='bx bxs-x-circle sm:text-5xl text-3xl text-red-500'></i>Unstructured Work Hours.</h4>
                <h4 className="flex items-center sm:gap-5 gap-3 sm:text-2xl text-base"><i class='bx bxs-x-circle sm:text-5xl text-3xl text-red-500'></i>Lack of Solidarity.</h4>
            </div>
        </div>
        <div className="bg-basecolor rounded-3xl border-2 border-black w-full flex flex-col gap-12 items-center p-10">
            <h3 className="text-center">Actually We Do </h3>
            <div className="flex flex-col gap-6">
                <h4 className="flex items-center sm:gap-5 gap-3 sm:text-2xl text-base"><i class='bx bxs-check-circle sm:text-5xl text-3xl text-green-500'></i>Effective Use of Technology.</h4>
                <h4 className="flex items-center sm:gap-5 gap-3 sm:text-2xl text-base"><i class='bx bxs-check-circle sm:text-5xl text-3xl text-green-500'></i>Effective Multitasking.</h4>
                <h4 className="flex items-center sm:gap-5 gap-3 sm:text-2xl text-base"><i class='bx bxs-check-circle sm:text-5xl text-3xl text-green-500'></i>Productive Work Flexibility.</h4>
                <h4 className="flex items-center sm:gap-5 gap-3 sm:text-2xl text-base"><i class='bx bxs-check-circle sm:text-5xl text-3xl text-green-500'></i>Collaborative and Communicative.</h4>
            </div>
        </div>
      </div>
    </div>
  );
};
export default GenZ;
