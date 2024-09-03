import Sidebar from './Sidebar';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="flex justify-between items-center py-6 sm:px-16 px-5">
                <div className='order-1 md:order-2 '>
                    <img src="/images/logo.png" alt="logo" className='sm:w-60 w-40' />
                </div>
                <div className="hidden lg:flex items-center gap-12 text-basecolor order-2">
                    <h4><a href="#">Service</a></h4>
                    <h4><a href="#">About</a></h4>
                    <h4><a href="#">Portfolio</a></h4>
                </div>
                <button className="hidden md:block py-2 px-11 rounded-full bg-secondary-500 order-3">
                    <h4>Let’s Talk</h4>
                </button>

                {/* Button to open sidebar in mobile */}
                <div className="lg:hidden order-2 md:order-1">
                    <button onClick={toggleSidebar}>
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="#FCFCFC"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Sidebar component */}
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </>
    );
};

export default Navbar;
