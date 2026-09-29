
import Image from 'next/image'

import ai from '../assets/ai.png'
import chatgpt from '../assets/chatgpt.png'
import claude from '../assets/claude-logo.png'
import gemini from '../assets/gemini.png'
import deepseek from '../assets/deepseek.png'
import llama from '../assets/llama.png'

const Features = () => {
    return (
        <section className='relative top-[73px] bg-[#fdfefe] py-7'>
            <div className='py-10 items-start gap-[45px] w-[90%] mx-auto'>
                <div className="text-center mb-5">
                    <span className='inline-block px-3.5 py-1.5 text-[#7049fb] text-[16px] font-semibold bg-[#d9d2fd] rounded-3xl mb-3 uppercase leading-none'>Features</span>
                    <h2 className='text-[25px] text-[#30325b] font-extrabold mb-3 leading-none'>Powerful Features for Your Productivity</h2>
                    <p className='text-[18px] text-[#6c7096] font-medium mb-5'>Everything you need to work smarter with AI</p>
                </div>
                <div className='mb-10'>
                    <ul className='flex flex-wrap justify-center items-center gap-2.5'>
                        <li className='lg:w-1/5 md:w-1/3 sm:w-[100%]'>
                            <div className='text-left py-2 px-3 bg-[#f6f7fd] border-2 border-gray-200 rounded-2xl'>
                                <Image className='mb-1 bg-[#e4d9fe] p-2 rounded-full' src={ai} width={75} height={75} alt='ai' />
                                <h2 className='text-[16px] text-[#30325b] font-extrabold mb-2.5 leading-none'>Multiple AI Models</h2>
                                <p className='text-[14px] text-[#6c7096] font-medium leading-tight'>Access GPT-4, Claude, Gemini, Deepseek and more - all in one place</p>
                            </div>
                        </li>
                        <li className='lg:w-1/5 md:w-1/3 sm:w-[100%]'>
                            <div className='text-left py-2 px-3 bg-[#f6f7fd] border-2 border-gray-200 rounded-2xl'>
                                <Image className='mb-1 bg-[#e4d9fe] p-2 rounded-full' src={ai} width={75} height={75} alt='ai' />
                                <h2 className='text-[16px] text-[#30325b] font-extrabold mb-2.5 leading-none'>Fast & Focused Workflow</h2>
                                <p className='text-[14px] text-[#6c7096] font-medium leading-tight'>Switch between tasks and get things done faster</p>
                            </div>
                        </li>
                        <li className='lg:w-1/5 md:w-1/3 sm:w-[100%]'>
                            <div className='text-left py-2 px-3 bg-[#f6f7fd] border-2 border-gray-200 rounded-2xl'>
                                <Image className='mb-1 bg-[#e4d9fe] p-2 rounded-full' src={ai} width={75} height={75} alt='ai' />
                                <h2 className='text-[16px] text-[#30325b] font-extrabold mb-2.5 leading-none'>Compare Responses</h2>
                                <p className='text-[14px] text-[#6c7096] font-medium leading-tight'>See Multiple model responses side by side</p>
                            </div>
                        </li>
                        <li className='lg:w-1/5 md:w-1/3 sm:w-[100%]'>
                            <div className='text-left py-2 px-3 bg-[#f6f7fd] border-2 border-gray-200 rounded-2xl'>
                                <Image className='mb-1 bg-[#e4d9fe] p-2 rounded-full' src={ai} width={75} height={75} alt='ai' />
                                <h2 className='text-[16px] text-[#30325b] font-extrabold mb-2.5 leading-none'>Translation</h2>
                                <p className='text-[14px] text-[#6c7096] font-medium leading-tight'>Break language barrier with accurate translation</p>
                            </div>
                        </li>
                        <li className='lg:w-1/5 md:w-1/3 sm:w-[100%]'>
                            <div className='text-left py-2 px-3 bg-[#f6f7fd] border-2 border-gray-200 rounded-2xl'>
                                <Image className='mb-1 bg-[#e4d9fe] p-2 rounded-full' src={ai} width={75} height={75} alt='ai' />
                                <h2 className='text-[16px] text-[#30325b] font-extrabold mb-2.5 leading-none'>History & Saved Chats</h2>
                                <p className='text-[14px] text-[#6c7096] font-medium leading-tight'>Revisit your past conversations and saved responses</p>
                            </div>
                        </li>
                        <li className='lg:w-1/5 md:w-1/3 sm:w-[100%]'>
                            <div className='text-left py-2 px-3 bg-[#f6f7fd] border-2 border-gray-200 rounded-2xl'>
                                <Image className='mb-1 bg-[#e4d9fe] p-2 rounded-full' src={ai} width={75} height={75} alt='ai' />
                                <h2 className='text-[16px] text-[#30325b] font-extrabold mb-2.5 leading-none'>Image & Video Studio</h2>
                                <p className='text-[14px] text-[#6c7096] font-medium leading-tight'>Create stunning visuals and videos with AI</p>
                            </div>
                        </li>
                        <li className='lg:w-1/5 md:w-1/3 sm:w-[100%]'>
                            <div className='text-left py-2 px-3 bg-[#f6f7fd] border-2 border-gray-200 rounded-2xl'>
                                <Image className='mb-1 bg-[#e4d9fe] p-2 rounded-full' src={ai} width={75} height={75} alt='ai' />
                                <h2 className='text-[16px] text-[#30325b] font-extrabold mb-2.5 leading-none'>Writing Assistants</h2>
                                <p className='text-[14px] text-[#6c7096] font-medium leading-tight'>Create, edit and improve your content with AI</p>
                            </div>
                        </li>
                        <li className='lg:w-1/5 md:w-1/3 sm:w-[100%]'>
                            <div className='text-left py-2 px-3 bg-[#f6f7fd] border-2 border-gray-200 rounded-2xl'>
                                <Image className='mb-1 bg-[#e4d9fe] p-2 rounded-full' src={ai} width={75} height={75} alt='ai' />
                                <h2 className='text-[16px] text-[#30325b] font-extrabold mb-2.5 leading-none'>Connectors</h2>
                                <p className='text-[14px] text-[#6c7096] font-medium leading-tight'>Integrate with your favourite apps and other tools</p>
                            </div>
                        </li>
                    </ul>
                </div>
                 <div className="text-center mb-5">
                    <span className='inline-block px-3.5 py-1.5 text-[#7049fb] text-[16px] font-semibold bg-[#d9d2fd] rounded-3xl mb-3 uppercase leading-none'>AI Models</span>
                    <h2 className='text-[25px] text-[#30325b] font-extrabold mb-3 leading-none'>Work with the Models You Already Love</h2>
                    <p className='text-[18px] text-[#6c7096] font-medium mb-5'>Choose from leading AI models and compare responses for better results</p>
                    <div className='flex justify-center items-center gap-3'>
                        <div className='text-center p-5 border-2 border-gray-200 rounded-2xl'>
                            <Image src={chatgpt} width={45} height={45} alt='chatgpt' className='inline-block mb-2' />
                            <h2 className='text-[20px] text-[#30325b] font-extrabold mb-2 leading-none'>ChatGPT</h2>
                            <p className='text-[18px] text-[#6c7096] font-medium mb-1'>OpenAI</p>                            
                        </div>
                        <div className='text-center p-5 border-2 border-gray-200 rounded-2xl'>
                            <Image src={claude} width={45} height={45} alt='claude' className='inline-block mb-2' />
                            <h2 className='text-[20px] text-[#30325b] font-extrabold mb-2 leading-none'>Claude</h2>
                            <p className='text-[18px] text-[#6c7096] font-medium mb-1'>Anthropic</p>  
                        </div>
                        <div className='text-center p-5 border-2 border-gray-200 rounded-2xl'>
                            <Image src={gemini} width={45} height={45} alt='chatgpt' className='inline-block mb-2' />
                            <h2 className='text-[20px] text-[#30325b] font-extrabold mb-2 leading-none'>Gemini</h2>
                            <p className='text-[18px] text-[#6c7096] font-medium mb-1'>Google</p>  
                        </div>
                        <div className='text-center p-5 border-2 border-gray-200 rounded-2xl'>
                            <Image src={deepseek} width={45} height={45} alt='chatgpt' className='inline-block mb-2' />
                            <h2 className='text-[20px] text-[#30325b] font-extrabold mb-2 leading-none'>DeepSeek</h2>
                            <p className='text-[18px] text-[#6c7096] font-medium mb-1'>DeepSeek</p>  
                        </div>
                        <div className='text-center p-5 border-2 border-gray-200 rounded-2xl'>
                            <Image src={llama} width={45} height={45} alt='chatgpt' className='inline-block mb-2' />
                            <h2 className='text-[20px] text-[#30325b] font-extrabold mb-2 leading-none'>Llama</h2>
                            <p className='text-[18px] text-[#6c7096] font-medium mb-1'>Meta</p>  
                        </div>
                    </div>
                </div>               
            </div>
        </section>
    )
}

export default Features