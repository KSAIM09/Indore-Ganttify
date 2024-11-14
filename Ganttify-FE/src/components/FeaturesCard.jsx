/* eslint-disable react/prop-types */

const FeaturesCard = ({ imgicon, imgbg, title, des}) => {
    return (
        <div className="h-[354px] flex flex-col items-center justify-between lg:h-[477px] lg:w-[636px] lg:p-[24px]">
            <div className='p-[20px] h-[210px] w-full rounded-2xl mb-[15px] shadow-md lg:h-[300px] lg:flex lg:justify-center lg:items-center'
                style={{
                    backgroundImage: `linear-gradient(to bottom, #add8e6, #fff), url()`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',


                }}
            >
                <img className='rounded-2xl overflow-y-hidden lg:h-[270px] lg:overflow-y-hidden lg:object-cover' src={imgbg} alt="" />
            </div>
            <div className='flex flex-col gap-y-[10px]'>
                <div className='flex gap-x-2 items-center'>
                    <span>
                        <img className='w-[24] h-[24]' src={imgicon} alt="" />
                    </span>
                    <h1 className='text-[22px] font-semibold leading-[130%]'>{title}</h1>
                </div>
                <p className='text-[18px] leading-[150%] text-zinc-700'>{des}</p>
            </div>
        </div>
    )
}

export default FeaturesCard
