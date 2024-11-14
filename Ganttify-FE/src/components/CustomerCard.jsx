/* eslint-disable react/prop-types */


const CustomerCard = ({ bgCol, dp, name, des}) => {
    return (
        <div className="h-[307px] w-[327px] p-[24px] rounded-3xl bg-white shadow flex flex-col justify-between border-[1px] border-zinc-200 lg:w-[394px] lg:h-[280px]">
            <div>
                <div className="flex items-center mb-2">
                    <div className="flex text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    </div>
                    <span className="text-gray-600 font-medium ml-2">4.8</span>
                </div>
                <p className="text-gray-800 text-lg font-medium leading-[150%] mb-4">
                    {des}
                </p>
            </div>
            <div className="flex items-center mt-4">
                <img src={`${dp}`} alt="Charolette Hanlin" className={`w-12 h-12 rounded-full mr-3 ${bgCol}`} />
                <div>
                    <p className="text-gray-900 font-semibold">{name}</p>
                    <p className="text-gray-500 text-sm">Co-Founder, Heroes Digital</p>
                </div>
            </div>
        </div>

    )
}

export default CustomerCard
