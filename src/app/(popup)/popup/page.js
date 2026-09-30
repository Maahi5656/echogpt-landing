import Image from 'next/image'
import { IoSettings } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { MdSpeakerNotes } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { BsTranslate } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";

import logo from '../../../assets/logo.png'

export default function EchoGPTPopup(){

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-[360px] h-[720px] bg-white rounded-2xl border px-2 border-gray-200 shadow-xl overflow-hidden flex flex-col">
                <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center py-1.5">
                        <span className="py-2">
                            <Image src={logo} width={40} height={40} alt='logo' />
                        </span>
                        <span className="title">
                            <h2 className='text-[14px] p-1.5 font-extrabold leading-none text-[#30325b]'>EchoGPT</h2>
                        </span>
                    </div>
                    <div className="flex justify-between gap-1.5 items-center py-1.5">
                        <IoSettings />
                        <IoIosClose />
                    </div>
                </div>
                <div className='py-2'>
                    <h2 className='mb-1 text-[20px] font-extrabold leading-none text-[#30325b]'>Ask Anything</h2>
                    <p className='inline-block text-[#6c7096] text-[15px] mb-4 font-semibold leading-none'>Get Instant Help With AI models</p>
                    <form className='relative' action="#">
                        <select className='bg-[#cecece] p-1 rounded text-[12px] font-semibold mb-2' name="models" id="">
                            <option value="chatgpt">Chat GPT</option>
                            <option value="deepseek">DeepSeek</option>
                            <option value="calude">Claude Code</option>
                            <option value="gemini">Genini</option>
                        </select>
                        <textarea className='relative block border border-gray-200 p-2 h-[100px] rounded w-full' placeholder='Ask Question...'></textarea>
                        <button className='absolute right-[15px] bottom-[10px] bg-[#7049fb] p-1.5 rounded-full cursor-pointer' type="submit">
                            <PiPaperPlaneRightFill className='fill-white' />
                        </button>
                    </form>
                </div>
                <div className='flex flex-wrap py-2 justify-between items-center gap-3'>
                    <div className='flex items-center gap-3 p-2 bg-[#f4f1fd] w-[48%] rounded'>
                        <div>
                            <MdSpeakerNotes className='fill-[#695add]' />
                        </div>
                        <div>
                            <h2 className='text-[#695add] text-[14px] font-extrabold'>Summarize</h2>
                            <p className='inline-block text-[#6c7096] text-[14px] font-light leading-none'>Brief Description</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-2 bg-[#f4f1fd] w-[48%] rounded'>
                        <div>
                            <FaPencilAlt className='fill-[#695add]' />
                        </div>
                        <div>
                            <h2 className='text-[#695add] text-[14px] font-extrabold'>Rewrite</h2>
                            <p className='inline-block text-[#6c7096] text-[14px] font-light leading-none'>Brief Description</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-2 bg-[#f4f1fd] w-[48%] rounded'>
                        <div>
                            <BsTranslate className='fill-[#695add]' />
                        </div>
                        <div>
                            <h2 className='text-[#695add] text-[14px] font-extrabold'>Translate</h2>
                            <p className='inline-block text-[#6c7096] text-[14px] font-light leading-none'>Brief Description</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-2 bg-[#f4f1fd] w-[48%] rounded'>
                        <div>
                            <GiTeacher className='fill-[#695add]' />
                        </div>
                        <div>
                            <h2 className='text-[#695add] text-[14px] font-extrabold'>Explain</h2>
                            <p className='inline-block text-[#6c7096] text-[14px] font-light leading-none'>Brief Description</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <h2 className='my-3 text-[20px] font-extrabold leading-none text-[#30325b]'>Account</h2>
                    <div className='my-3 flex gap-2 items-center'>
                        <div>
                            <RiAccountCircleFill className="text-4xl" />
                        </div>
                        <div>
                            <h2 className='text-[#695add] text-[14px] font-extrabold'>John Doe</h2>
                            <p className='inline-block text-[#6c7096] text-[14px] font-light leading-none'>john@gmail.com</p>
                        </div>
                    </div>
                    <br /><br />
                    <div>
                        <button className='w-full text-[14px] font-bold border-2 py-2 border-[#695add] text-[#695add] cursor-pointer rounded'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    )

}