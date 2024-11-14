import logolight from '../assets/logolight.svg'
import social from '../assets/social.png'
import us from '../assets/united states.svg'
import down from '../assets/down.svg'
const FooterComponent = () => {
    return (
        <>
            <div className="w-[359px] h-[1165px] px-[16px] py-[40px] rounded-3xl bg-[#0D0D12] text-gray-300 flex flex-col mb-[10px] lg:w-[1440px] lg:h-[755px] lg:rounded-none lg:pt-[80px] lg:px-[104px] lg:pb-[56px]">
                {/* Logo and Icons */}
                <div className="flex flex-col  justify-between mb-8 h-[92px] lg:h-[40px] lg:w-[1232px] lg:flex-row lg:items-center">
                    <div className="flex gap-2 text-white">
                        <img src={logolight} alt="Ganttify Logo" className="w-7 h-7" />
                        <span className="text-white font-semibold text-[20px]">Ganttify</span>
                    </div>
                    <div className="flex gap-2">
                        <button className="h-[40px] w-[136px] ">
                            <img src={social} alt="" />
                        </button>

                    </div>
                </div>

                {/* Links Sections */}
                <div className="grid grid-cols-2 gap-8 mb-6 text-[18px] lg:w-[1232px] lg:h-[371px] lg:flex lg:justify-between lg:mt-[20px]">
                    <div>
                        <h4 className="text-white font-semibold mb-4 ">Ganttify</h4>
                        <ul className="space-y-2 text-[#818898]">
                            <li>Home</li>
                            <li>Product</li>
                            <li>Pricing</li>
                            <li>Customer Success</li>
                            <li>Templates</li>
                            <li>Trust & Security</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4 ">Solutions</h4>
                        <ul className="space-y-2 text-[#818898]">
                            <li>Project Management</li>
                            <li>Goal Management</li>
                            <li>Agile Management</li>
                            <li>Task Management</li>
                            <li>Productivity</li>
                            <li>Work Management</li>
                            <li>Project Planning</li>
                            <li>To-Do Lists</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">About Us</h4>
                        <ul className="space-y-2 text-[#818898]">
                            <li>Company</li>
                            <li>Leadership</li>
                            <li>Customers</li>
                            <li>Careers</li>
                            <li>Changelog</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-[#818898]">
                            <li>Help Center</li>
                            <li>FAQ</li>
                            <li>Developers & API</li>
                            <li>Community</li>
                            <li>Events</li>
                            <li>Status</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Helpful Links</h4>
                        <ul className="space-y-2 text-[#818898]">
                            <li>Legal Center</li>
                            <li>Privacy Policy</li>
                            <li>Partnerships</li>
                        </ul>
                    </div>
                </div>
                <hr className='border-none h-[1px] bg-zinc-700 mb-6'/>

                <div className='flex flex-col items-center justify-center w-[327px] h-[80px] lg:flex-row lg:w-[1232px] lg:justify-between lg:items-center'>
                    {/* Country Selector */}
                    <div className="flex items-center justify-between mb-4 text-gray-400 lg:items-center lg:justify-center">
                        <div className="flex items-center gap-2 bg-gray-800 px-2 py-[10px] w-[327px] h-[40px] rounded-xl cursor-pointer lg:w-[169px] mt-[20px]">
                            <img src={us} alt="United States Flag" className="w-5 h-5" />
                            <span className='w-[251px] lg:w-[169px]'>United States</span>
                            <img src={down} alt="" />
                        </div>
                    </div>

                    {/* Footer */}
                    <p className="text-center text-[#666D80] text-[16px] font-medium leading-[150%]">
                        © Ganttify 2024. All Rights Reserved.
                    </p>
                </div>
            </div>

        </>
    );
};

export default FooterComponent;
