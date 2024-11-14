import companies from '../assets/companies.png';
import smCom from '../assets/sm-com.png';

const Proof = () => {
  return (
    <div className="w-[359px] h-[163px] lg:flex lg:h-[243px] lg:w-full flex flex-col items-center justify-center lg:gap-y-[48px] gap-y-[24px]">
      <div className="proof-top">
        <h1 className="text-[#818898] font-medium">Trusted by 2 million+ teams</h1>
      </div>
      <div className="proof-bottom lg:mx-[104px] h-[68px] w-[327px] lg:h-[40px] lg:w-[1232px]">
        {/* Show smCom image on small screens and companies image on large screens */}
        <img src={smCom} alt="Small Companies" className="block lg:hidden" />
        <img src={companies} alt="Large Companies" className="hidden lg:block" />
      </div>
    </div>
  );
};

export default Proof;
