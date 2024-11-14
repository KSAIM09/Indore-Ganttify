
import { useState, useEffect } from 'react';
import bgplg from '../assets/BG-lg.jpg';
import bgpsm from '../assets/BG-sm.jpg';

import comSm from '../assets/companies-sm.png'
import comLg from '../assets/companies-lg.png'

import crosshair from '../assets/crosshair.svg'
import iconLeft from '../assets/Iconleft.png'
import iconRight from '../assets/Iconright.png'
import bottom from '../assets/bottom.png'
import top from '../assets/Icontop.png'
import left from '../assets/left.jpg'
import right from '../assets/right.jpg'

const Hero = () => {
    const [backgroundImage, setBackgroundImage] = useState(bgpsm);
    const [backgroundLogo, setBackgroundLogo] = useState(comSm);

    useEffect(() => {
        // Function to check screen width and update background image
        const updateBackgroundImage = () => {
            if (window.innerWidth >= 1024) {
                setBackgroundImage(bgplg);
                setBackgroundLogo(comLg);
            } else {
                setBackgroundImage(bgpsm);
                setBackgroundLogo(comSm);
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
            className="relative w-[359px] h-[1002px] lg:h-[740px] lg:w-full lg:rounded-none bg-[#0D0D12] py-[40px] px-[16px] rounded-[24px] text-white overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',


            }}
        >
            {/* Dark overlay to dim the image */}
            <div className="absolute inset-0 bg-black opacity-80"></div>

            {/* Content */}
            <div className="w-full relative z-10 flex flex-col gap-y-[40px] lg:flex-row lg:gap-x-[56px] lg:items-start lg:justify-start lg:px-[104px] lg:mt-[60px] lg:h-[840px]">
                <div className="hero-top h-[579px] w-[327px] flex flex-col justify-between con lg:w-[588px] lg:h-[532px] lg:gap-y-[72px]">
                    <div className='h-[483px]  flex flex-col justify-between gap-y-[32px] conte lg:h-[378px]'>
                        <div className='h-[331px] flex flex-col gap-y-[16px] lg:h-[200px]'>
                            <div className='flex gap-x-2 px-3 py-2 bg-[#565659] rounded-[10px] w-[180px] border-[1px] border-[#727272] lg:h-[286px]'>
                                <img src={crosshair} alt="" />
                                <p className='text-[14px] font-medium '>
                                    Goals & Reporting
                                </p>
                            </div>
                            <div className='flex flex-col gap-y-[16px]'>
                                <h1 className='font-medium text-[56px] text-white text-start leading-[110%] lg:leading-[125%] lg:text-[60px]'>Goals and Reporting In One Place</h1>
                                <p className='text-[18px] font-normal text-[#A6A6A7]'>Connect every team’s work to company objectives, then track progress with real-time data</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-[16px] lg:flex-row lg:gap-x-4'>
                            <button type="button" className="text-black bg-white  font-medium rounded-[16px]  px-[30px] py-[14px] ">Get Started</button>
                            <button type="button" className="text-white bg-[#272729]  font-medium rounded-[16px]  px-[30px] py-[14px] border-zinc-700 border-[1px]">How it Works</button>
                        </div>
                    </div>
                    <div className='flex flex-col h-[64px] w-[327px] justify-between lg:w-[588px] lg:h-[82px]'>
                        <h1 className='text-[#969696] text-[14px] font-medium'>Trusted by 2 millions+ team</h1>
                        <img className=' w-full h-[26px] lg:h-[34px]' src={backgroundLogo} alt="" />
                    </div>
                </div>

                <div className="hero-bottom h-[303px] w-[327px] flex flex-col gap-y-[200px] lg:w-[588px] lg:h-[532px]">
                    <div className='flex relative'>
                        <img className='absolute  w-[60px] left-20 top-0 lg:h-[74px] lg:w-[74px] lg:top-[30px] lg:left-[190px]'  src={top} alt="" />
                        <div>
                            <img className='rounded-xl w-[102px] absolute top-[59px] left-8 lg:w-[175px] lg:h-[217px] lg:top-[115px] lg:left-[60px]' src={left} alt="" />
                            <img className='w-[156px] rounded-xl absolute right-4 top-6 lg:w-[266px] lg:h-[274px] lg:top-[60px]' src={right} alt="" />
                        </div>


                    </div>
                    <div className='flex relative w-full'>
                        <img className='absolute left-0 w-[60px] lg:top-[180px] lg:left-[10px] lg:h-[74px] lg:w-[74px]' src={iconLeft} alt="" />
                        <img className='w-[205px] h-[82px] absolute left-[60px] lg:h-[140px] lg:w-[350px] lg:top-[160px] lg:left-[100px]' src={bottom} alt="" />
                        <img className='absolute right-0 top-10 w-[60px] lg:top-[250px] lg:right-[-30px] lg:h-[74px] lg:w-[74px]' src={iconRight} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
