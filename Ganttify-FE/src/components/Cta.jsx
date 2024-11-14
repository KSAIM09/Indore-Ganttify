

const Cta = () => {
    return (
        <div className="mb-[10px] w-[359px] h-[548px] py-[40px] px-[16px] rounded-3xl bg-gradient-to-b from-gray-900 via-[#094B5C] to-black text-center text-white flex flex-col justify-between items-center">
            <div>
                <h1 className="text-[48px] font-semibold leading-[125%] mb-6">
                    A Better Way to Work Today, Together
                </h1>
                <p className="text-[18px] leading-[150%]">
                    Ganttify enables you to achieve clarity and significant results on a large scale by linking tasks and workflows to the overarching objectives of the company
                </p>
            </div>
            <div className="flex flex-col gap-4 w-full mt-8">
                <button className="bg-white text-black font-semibold py-3 rounded-xl w-full border-[1px] border-white">
                    Get Started
                </button>
                <button className="bg-gray-600 bg-opacity-40 text-white font-semibold py-3 rounded-xl w-full border-[1px] border-zinc-700">
                    How it Works
                </button>
            </div>
        </div>
    )
}

export default Cta;
