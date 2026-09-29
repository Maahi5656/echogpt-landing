
import Image from 'next/image'
import { IoIosTime } from "react-icons/io";
import { SiBoosty } from "react-icons/si";
import { GiDesk } from "react-icons/gi";
import { GiFlexibleLamp } from "react-icons/gi";

const Choose = () => {
    return (
        <section className="relative top-[73px] text-center py-7 bg-[#fdfefe]">
            <span className='inline-block px-3.5 py-1.5 text-[#7049fb] text-[16px] font-semibold bg-[#d9d2fd] rounded-3xl mb-3 leading-none uppercase'>Why Choose Echogpt</span>
            <h2 className='text-[25px] text-[#30325b] font-extrabold mb-3 leading-none'>Work with the Models You Already Love</h2>
            <p className='text-[18px] text-[#6c7096] font-medium mb-5'>Choose from leading AI models and compare responses for better results</p>
            <div className='flex flex-wrap justify-center items-center gap-3'>
                <div className='text-center p-2 lg:w-[20%] md:lg-w[50%] sm:w-full'>
                    <div className="flex items-center justify-center">
                        <IoIosTime className="text-5xl mb-2" />
                    </div>
                    <h2 className='text-[20px] text-[#30325b] font-extrabold mb-2 leading-none'>Save Time</h2>
                    <p className='text-[18px] text-[#6c7096] font-medium mb-1'>Get Better Results In Less Time</p>                            
                </div>
                <div className='text-center p-2 lg:w-[20%] md:lg-w[50%] sm:w-full'>
                    <div className="flex items-center justify-center">
                        <SiBoosty className="text-5xl mb-2" />
                    </div>
                    <h2 className='text-[20px] text-[#30325b] font-extrabold mb-2 leading-none'>Boost Creativity</h2>
                    <p className='text-[18px] text-[#6c7096] font-medium mb-1'>Turn your ideas into reality</p>  
                </div>
                <div className='text-center p-2 lg:w-[20%] md:lg-w[50%] sm:w-full'>
                    <div className="flex items-center justify-center">
                        <GiDesk className="text-5xl mb-2" />
                    </div>
                    <h2 className='text-[20px] text-[#30325b] font-extrabold mb-2 leading-none'>Stay Organized</h2>
                    <p className='text-[14px] text-[#6c7096] font-medium mb-1'>Keep your chats, files and projects in one place</p>  
                </div>
                <div className='text-center p-2 lg:w-[20%] md:lg-w[50%] sm:w-full'>
                    <div className="flex items-center justify-center">
                      <GiFlexibleLamp className="text-5xl mb-2" />
                    </div>
                    <h2 className='text-[20px] text-[#30325b] font-extrabold mb-2 leading-none'>Flexible & Affordable</h2>
                    <p className='text-[18px] text-[#6c7096] font-medium mb-1'>Choose a plan that fits your needs</p>  
                </div> 
            </div>
        </section> 
    )
}

export default Choose