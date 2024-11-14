import { useState, useEffect } from 'react';
import bgplg from '../assets/BG-lg.jpg';
import bgpsm from '../assets/BG-sm.jpg';

import cc from '../assets/credit-card.svg'
import PriceCard from './PriceCard';

const Pricing = () => {
    const [backgroundImage, setBackgroundImage] = useState(bgpsm);

    useEffect(() => {
        // Update background image based on screen width
        const updateBackgroundImage = () => {
            if (window.innerWidth >= 1024) {
                setBackgroundImage(bgplg);
            } else {
                setBackgroundImage(bgpsm);
            }
        };

        // Initial check
        updateBackgroundImage();

        // Listen for window resize
        window.addEventListener('resize', updateBackgroundImage);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', updateBackgroundImage);
    }, []);

    return (
        <div
            className="relative h-[1953px] w-[359px] bg-[#0D0D12] text-white py-[40px] px-[16px] overflow-hidden rounded-3xl lg:h-[989px] lg:w-[1408px]"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Dark overlay to dim the image */}
            <div className="absolute inset-0 bg-black opacity-80 p-[104px] "></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-y-[40px] lg:p-[50px]  lg:gap-y-[80px]">
                <div>
                    <div className='h-[244px] flex flex-col justify-between gap-y-[32px] conte lg:h-[188px] lg:flex-row lg:w-[1232px]'>
                        <div className='h-[120px] flex flex-col gap-y-[16px] '>
                            <div className='flex gap-x-2 px-3 py-1 bg-[#49494949] rounded-[10px] w-[100px] border-[1px] border-[#727272] '>
                                <img src={cc} alt="" />
                                <p className='text-[14px] font-medium '>
                                    Pricing
                                </p>
                            </div>
                            <div className=''>
                                <h1 className='font-semibold text-[46px] text-white text-start leading-[125%] lg:leading-[125%] lg:text-[56px] lg:w-[563px]'>Simple and Flexible pricing</h1>
                            </div>
                        </div>
                        <div className='flex justify-between items-center lg:items-end lg:gap-x-[5px]'>
                            <button type="button" className="text-black bg-white  font-medium rounded-[16px]  px-[45px] py-[13px] ">Monthly</button>
                            <button type="button" className="text-white bg-[#272729]  font-medium rounded-[16px]  px-[45px] py-[13px] border-zinc-700 border-[1px]">Annually</button>
                        </div>
                    </div>
                </div>

                <div className='h-[1609px] w-full flex flex-col gap-y-[24px] lg:w-[1232px] lg:h-[513px] lg:flex-row lg:gap-x-[24px]'>

                    <PriceCard
                        bgBtn='bg-[#727272]'
                        bgColor="bg-[#49494949]"
                        textColor='white'
                        title="Personal"
                        price="$29"
                        description="For individuals and small teams looking to manage their tasks"
                        head="This Plan Includes:"
                        features={[
                            "Unlimited contacts",
                            "Bulk emailing",
                            "AI Integration",
                            "View & share up to 3 years",
                            "Collaboration & permissions",
                        ]}
                    />

                    <PriceCard
                        bgColor="bg-[white]"
                        textColor="text-black"
                        title="Pro"
                        price="$39"
                        description="For growing teams that need to track their projects' progress and hit deadlines"
                        head="Everything in Standard, plus:"
                        features={[
                            "Email sequences",
                            "Send emails from multiple domains",
                            "Connect multiple email accounts",
                            "Fully adjustable sharing permissions",
                            "Migration services",
                        ]}
                    />

                    <PriceCard
                        bgBtn='bg-[#727272]'
                        bgColor="bg-[#49494949]"
                        textColor='white'
                        title="Beyond limits"
                        price="Custom Plan"
                        description="For companies that need to manage a portfolio of work and goals across departments"
                        head="Everything in Standard & Pro, plus:"
                        block="hidden"
                        features={[
                            "White glove onboarding",
                            "Custom billing",
                            "Dedicated slack channel",
                            "Dedicated point of contact",
                            "Unlimited reporting",
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default Pricing;
