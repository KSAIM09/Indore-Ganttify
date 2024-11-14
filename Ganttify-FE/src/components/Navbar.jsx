import logo from '../assets/logo.svg'

const Navbar = () => {
    return (
        <div>


            <nav className="bg-white shadow-sm lg:flex lg:justify-between lg:items-center mb-2">
                <div className='left'>
                    <div className="max-w-screen flex flex-wrap items-center mx-auto p-4 gap-x-10 justify-between lg:justify-normal">
                        <a href="/#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={logo} className="h-8" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-black">Gantiffy</span>
                        </a>
                        <button type="button" className="md:hidden p-2 w-10 h-10 text-gray-400 dark:text-black rounded-lg hover:bg-gray-200 dark:hover:bg-gray-400 focus:outline-none" aria-label="Open main menu">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" aria-hidden="true">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                                <li>
                                    <a href="#" className="block py-2 px-3 text-black font-medium">Product</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-black ">Solutions</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-black ">Resources</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-black ">Company</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-black ">Pricing</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="right flex gap-x-2 mr-10">
                <button type="button" className="text-black bg-white  font-medium rounded-2xl  px-4 py-2 border-gray-100 border-2 hidden lg:block  shadow-slate-50">Sign In</button>
                <button type="button" className="text-white bg-black  font-medium rounded-2xl  px-4 py-2 border-black border-2 hidden lg:block ">Get Started</button>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
