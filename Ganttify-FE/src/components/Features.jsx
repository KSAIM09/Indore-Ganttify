/* eslint-disable no-irregular-whitespace */
import crosshair from '../assets/crosshair.svg'
import FeaturesCard from './FeaturesCard'
import crossdrk from '../assets/crosshairdrk.svg'

import pm from '../assets/trello.svg'
import pmbg from '../assets/pmbg.jpg'

import git from '../assets/gitsvg.svg'

import grbg from '../assets/grbg.jpg'

import archive from '../assets/archive.svg'
import rmbg from '../assets/rmbg.jpg'

const Features = () => {
    return (
        <div className="h-[1956px] w-[359px] px-[16px] py-[40px] flex flex-col gap-y-[40px] lg:w-[1440px] lg:h-[1415px] lg:py-[104px] lg:px-[80px] lg:gap-y-[80px]">
            <div className='h-[331px] flex flex-col gap-y-[16px] lg:h-[200px]'>
                <div className='flex gap-x-2 px-3 py-2 bg-white rounded-[10px] w-[120px] border-[1px] border-[#cfcfcf] lg:h-[38px] '>
                    <img className='bg-zinc-600 rounded-full' src={crosshair} alt="" />
                    <p className='text-[14px] font-medium '>
                        Features
                    </p>
                </div>
                <div className='flex flex-col gap-y-[16px]'>
                    <h1 className='font-semibold text-[48px] text-black text-start leading-[125%] lg:leading-[125%] lg:text-[60px]'>Everything Your Team Looking For </h1>
                    <p className='text-[18px] font-normal text-[#5f5f5f] leading-[150%]'>Ganttify’s exceptional flexibility can handle any type of work. And we never stop innovating</p>
                </div>
            </div>

            <div className='h-[1515px] flex flex-col gap-y-[34px] lg:h-[962px] lg:flex-row lg:flex-wrap'>
                <FeaturesCard imgicon={pm} imgbg={pmbg} title="Project Management" des="Manage your projects from start to finish. With all of your projects in Ganttify, you’ll always know who’s doing what, by when"/>
                <FeaturesCard imgicon={git} imgbg={pmbg} title="Workflows and Automations" des="Create more efficient processes so you can seamlessly manage projects across departments and get more done in less time"/>
                <FeaturesCard imgicon={crossdrk} imgbg={grbg} title="Goals and Reporting" des="See how each project and portfolio ladders up to company objectives and keep everyone focused on the work that matters"/>
                <FeaturesCard imgicon={archive} imgbg={rmbg} title="Resource Management" des="Get the visibility you need to plan accurate timelines, adjust workloads, and stay on track to achieve your objectives"/>
            </div>
        </div>
    )
}

export default Features
