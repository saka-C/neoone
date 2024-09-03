// eslint-disable-next-line react/prop-types
const Button = ({text}) =>{
    return(
        <button className="text-darkcolor rounded-full pl-16 bg-accent-500 flex items-center self-start"><h4 className="lg:text-xl text-base">{text}</h4><div className="bg-darkcolor rounded-full w-10 h-10 m-1 ml-10 flex justify-center items-center text-basecolor"><i className='bx bxs-right-arrow'></i></div></button>
    );
};
export default Button