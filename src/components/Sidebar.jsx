// eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div
            className={`fixed top-0 right-0 w-72 h-full bg-darkcolor transition-transform transform ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            } lg:hidden`}
        >
            <div className="flex justify-end pt-10 p-4">
                <button onClick={toggleSidebar}>
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="#FCFCFC"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col items-start p-6 text-basecolor">
                <div className="">
                    <h4 className="mb-4"><a href="#">Service</a></h4>
                    <h4 className="mb-4"><a href="#">About</a></h4>
                    <h4 className="mb-4"><a href="#">Portfolio</a></h4>
                </div>
                <button className="py-3 px-6 mt-6 rounded-full text-darkcolor bg-secondary-500 w-full">
                    <h4>Let’s Talk</h4>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
