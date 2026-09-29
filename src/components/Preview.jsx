import Image from 'next/image'

import dashboard from '../assets/dashboard.jpg'

const Preview = () => {
    return (
        <section className='relative top-[73px] bg-[#ebf0fe]'>
            <div className='py-15 items-start gap-[45px] w-[90%] mx-auto'>
                <div className="lg:flex">
                    <div className='lg:w-[50%]'>
                        <span className='inline-block px-3.5 py-1.5 text-[#7049fb] text-[16px] font-semibold bg-[#d9d2fd] uppercase rounded-3xl mb-3 leading-none'>Product Preview</span>
                        <h2 className='text-[45px] text-[#30325b] font-extrabold mb-5 leading-none'>Everything in One<br/>Beautiful Workspace</h2>
                        <p className='text-[20px] text-[#6c7096] font-medium mb-3'>A clean, modern interface designed for <br/> maximum productivity. Switch between models, <br/> access tools, and manage your conversations <br/> effortlessly</p>
                        {/* <button className='flex items-center gap-1.5 border-2 border-[#7049fb] text-white text-[14px] bg-[#7049fb] font-semibold rounded-3xl px-3.5 py-1.5 my-8.75 cursor-pointer'>Start Using EchoGPT <FaArrowRight /></button> */}
                        <ul className='ml-3.5 text-[#30325b] list-disc'>
                            <li><span className='inline-block text-[16px] text-[#30325b] font-semibold mb-1.5'>Intuitive sidebar navigation</span></li>
                            <li><span className='inline-block text-[16px] text-[#30325b] font-semibold mb-1.5'>Quick actions & templates</span></li>
                            <li><span className='inline-block text-[16px] text-[#30325b] font-semibold mb-1.5'>Responsive Design</span></li>
                            <li><span className='inline-block text-[16px] text-[#30325b] font-semibold mb-1.5'>Built for performance</span></li>
                        </ul>
                    </div>
                    <div className='lg:w-[50%]'>
                        <Image className='rounded-2xl w-[90%]' src={dashboard} width='70%' height='75%' alt='dashboard'/>
                    </div>
                </div>
            </div>
        </section>
    ) 
}

export default Preview