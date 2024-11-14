/* eslint-disable react/prop-types */




const PriceCard = ({ bgBtn = "bg-black", bgColor = "bg-white", textColor = "text-gray-800", title, price, description, features, head, block}) => {
    return (
        <div className={`h-[513px] w-[327px] p-[24px] ${bgColor} rounded-3xl shadow-lg flex flex-col justify-between lg:w-[394px]`}>
            {/* Header */}
            <div>
                <h3 className={`text-gray-500 text-[20px] font-medium`}>{title}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                    <span className={`text-[36px] font-bold ${textColor}`}>{price}</span>
                    <span className={`text-[14px] text-gray-500 ${block}`}>per month</span>
                </div>
                <p className="text-[14px] text-gray-500 mt-2">
                    {description}
                </p>
                <hr className="my-4 border-gray-200" />
                <p className={`${textColor} text-[14px] font-medium`}>{head}</p>
            </div>

            {/* Features List */}
            <ul className="text-[14px] text-gray-500 space-y-2 mt-4">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <span className="text-blue-500">✔️</span> {feature}
                    </li>
                ))}
            </ul>

            {/* Button */}
            <button className={`mt-8 ${bgBtn} text-white text-[14px] font-medium py-3 rounded-2xl hover:bg-gray-800 transition`}>
                Get Started
            </button>
        </div>
    );
};

export default PriceCard;
