import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";

import dashboard from '../assets/dashboard.jpg'
import chatgpt from '../assets/chatgpt.png'
import claude from '../assets/claude-logo.png'
import gemini from '../assets/gemini.png'
import deepseek from '../assets/deepseek.png'

const Banner = () => {
    return (
        <>
            <section className='relative top-[73px] lg:h-[calc(100vh-73px)] bg-[#ebf0fe]'>
                <div className='py-10 items-start gap-[45px] w-[90%] mx-auto'>
                    <div className="lg:flex">
                        <div className='lg:w-[50%]'>
                            <span className='inline-block px-3.5 py-1.5 text-[#7049fb] text-[16px] font-semibold bg-[#d9d2fd] rounded-3xl mb-3 leading-none'>One Workplace Multiple AI Models</span>
                            <h2 className='text-[45px] text-[#30325b] font-extrabold mb-5 leading-none'>One Workspace. <br/><span className='text-[#7049fb]'>Every AI Model</span> You Need.</h2>
                            <p className='text-[20px] text-[#6c7096] font-medium mb-4'>Chat, write, analyze and create with multiple AI models <br/> from one beautiful workspace.</p>
                            <button className='flex items-center gap-1.5 border-2 border-[#7049fb] text-white text-[14px] bg-[#7049fb] font-semibold rounded-3xl px-3.5 py-1.5 my-8.75 cursor-pointer'>Start Using EchoGPT <FaArrowRight /></button>
                            <ul className='flex flex-wrap justify-start my-4 p-0 gap-1.5'>
                                <li><span className='flex items-center gap-1.5 text-[#30325b] text-[14px] font-semibold bg-[#ab9ff3] p-2.5 mr-1.5 rounded-3xl'><Image className='rounded-full' src={chatgpt} width={25} height={25} alt='chatgpt' />Chat-GPT</span></li>
                                <li><span className='flex items-center gap-1.5 text-[#30325b] text-[14px] font-semibold bg-[#ab9ff3] p-2.5 mr-1.5 rounded-3xl'><Image className='rounded-full' src={claude} width={25} height={25} alt='claude' />Claude</span></li>
                                <li><span className='flex items-center gap-1.5 text-[#30325b] text-[14px] font-semibold bg-[#ab9ff3] p-2.5 mr-1.5 rounded-3xl'><Image className='rounded-full' src={gemini} width={25} height={25} alt='gemini' />Gemini</span></li>
                                <li><span className='flex items-center gap-1.5 text-[#30325b] text-[14px] font-semibold bg-[#ab9ff3] p-2.5 mr-1.5 rounded-3xl'><Image className='rounded-full' src={deepseek} width={25} height={25} alt='deepseek' />DeepSeek</span></li>
                            </ul>
                        </div>
                        <div className='lg:w-[50%]'>
                            <Image className='rounded-2xl w-[90%]' src={dashboard} width='70%' height='75%' alt='dashboard'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner