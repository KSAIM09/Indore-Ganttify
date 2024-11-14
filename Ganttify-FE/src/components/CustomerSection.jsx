/* eslint-disable react/no-unescaped-entities */
import user from '../assets/user.svg'
import CustomerCard from './CustomerCard'

import lady from '../assets/dp.png'
import lady2 from '../assets/dp2.png'
import guy from '../assets/dp3.png'

const CustomerSection = () => {
    return (
        <div className="h-[1383px] w-[359px] py-[40px] px-[16px] flex flex-col gap-y-[40px] lg:h-[1099px] lg:w-[1440px] lg:p-[104px]">
            <div className='h-[294px] flex flex-col items-center gap-y-[16px] lg:h-[227px] lg:w-[1232px] lg:justify-center lg:text-center'>
                <div className='flex gap-x-2 px-3 py-1 rounded-[10px] w-[120px] border-[1px] border-[#c9c9c9] lg:h-[32px] '>
                    <img src={user} alt="" />
                    <p className='text-[14px] font-medium text-zinc-500'>
                        Customers
                    </p>
                </div>
                <div className='flex flex-col gap-y-[16px]'>
                    <h1 className='font-semibold text-[48px] text-black text-center leading-[125%] lg:leading-[125%] lg:text-[56px] lg:w-[659px] lg:h-[140px]'>See What Our Customers Are Saying</h1>
                    <p className='text-[18px] text-center text-[#666D80] leading-[150%]'>Here's what some of our customers say about our platform.</p>
                </div>
            </div>

            {/* Show only first 3 cards on sm screens, all cards on lg screens */}
            <div className="flex gap-y-[24px]">
                {/* Group for sm screens */}
                <div className="flex flex-col gap-y-[24px] lg:hidden ">
                    <CustomerCard
                        dp={lady}
                        bgCol="bg-[#FFEBC9]"
                        name="Charolette Hanlin"
                        des="“Ganttify has revolutionized the way we manage our projects. Connecting tasks and workflows to our overall company goals has never been easier.”"
                    />
                    <CustomerCard
                        dp={lady2}
                        bgCol="bg-[#FDD8E1]"
                        name="Eleanor Pena"
                        des="“Using Ganttify has streamlined our project management process. It’s incredibly effective in aligning our daily tasks with the company's strategic goals.”"
                    />
                    <CustomerCard
                        dp={guy}
                        bgCol="bg-[#ADECFF]"
                        name="Guy Hawkins"
                        des="“Ganttify has provided us with a unified view of our projects. It connects our workflows directly to our business goals, making it easier to track progress.”"
                    />
                </div>

                {/* Group for lg screens */}
                <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-[24px] lg:gap-y-[24px]">
                    <CustomerCard
                        dp={lady}
                        bgCol="bg-[#FFEBC9]"
                        name="Charolette Hanlin"
                        des="“Ganttify has revolutionized the way we manage our projects. Connecting tasks and workflows to our overall company goals has never been easier.”"
                    />
                    <CustomerCard
                        dp={lady2}
                        bgCol="bg-[#FDD8E1]"
                        name="Eleanor Pena"
                        des="“Using Ganttify has streamlined our project management process. It’s incredibly effective in aligning our daily tasks with the company's strategic goals.”"
                    />
                    <CustomerCard
                        dp={guy}
                        bgCol="bg-[#ADECFF]"
                        name="Guy Hawkins"
                        des="“Ganttify has provided us with a unified view of our projects. It connects our workflows directly to our business goals, making it easier to track progress.”"
                    />
                    <CustomerCard
                        dp={lady}
                        bgCol="bg-[#FFEBC9]"
                        name="Charolette Hanlin"
                        des="“Ganttify has revolutionized the way we manage our projects. Connecting tasks and workflows to our overall company goals has never been easier.”"
                    />
                    <CustomerCard
                        dp={lady2}
                        bgCol="bg-[#FDD8E1]"
                        name="Eleanor Pena"
                        des="“Using Ganttify has streamlined our project management process. It’s incredibly effective in aligning our daily tasks with the company's strategic goals.”"
                    />
                    <CustomerCard
                        dp={guy}
                        bgCol="bg-[#ADECFF]"
                        name="Guy Hawkins"
                        des="“Ganttify has provided us with a unified view of our projects. It connects our workflows directly to our business goals, making it easier to track progress.”"
                    />
                </div>
            </div>
        </div>
    )
}

export default CustomerSection
