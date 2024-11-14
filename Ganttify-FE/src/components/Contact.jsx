/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import head from '../assets/headphones.svg'
const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { firstName, lastName, email, message });
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-[#094B5C] to-black lg:w-[1440px] lg:h-[782px] p-[104px] lg:flex lg:gap-x-[80px]">
      <div>
      <div className=' flex flex-col items-start gap-y-[16px] text-start lg:w-[552px]'>
                <div className='flex gap-x-2 px-3 py-1 rounded-[10px] w-[120px] border-[1px] border-[#c9c9c9] lg:h-[32px] '>
                    <img src={head} alt="" />
                    <p className='text-[14px] font-medium text-zinc-500'>
                        Contact
                    </p>
                </div>
                <div className='flex flex-col gap-y-[16px]'>
                    <h1 className='font-semibold text-[48px] text-white text-start leading-[125%] lg:leading-[125%] lg:text-[48px] lg:w-[552px] lg:h-[60px]'>Get in Touch with Us</h1>
                    <p className='text-[18px] text-start text-[#666D80] leading-[150%]'>Ganttify enables you to achieve clarity and significant results on a large scale by linking tasks and workflows to the overarching objectives of the company</p>
                </div>
            </div>
      </div>
    
    <div className="h-[574px] w-[600px] p-[32px] bg-white rounded-3xl shadow-md ">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
            First name
          </label>
          <input
            type="text"
            id="firstName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button type="button" className="text-white bg-[#000000]  font-medium rounded-[16px]  px-[45px] py-[13px] border-zinc-700 border-[1px] lg:w-full lg:mt-[80px]">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
