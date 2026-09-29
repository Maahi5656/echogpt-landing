const Pricing = () => {
    return (
        <section className="relative top-[73px] text-center py-7 bg-[#ebf0fe]">
            <span className='inline-block px-3.5 py-1.5 text-[#7049fb] text-[16px] font-semibold bg-[#d9d2fd] rounded-3xl mb-3 leading-none uppercase'>Pricing</span>
            <h2 className='text-[25px] text-[#30325b] font-extrabold mb-3 leading-none'>Simple Transparent Pricing</h2>
            <p className='text-[18px] text-[#6c7096] font-medium mb-5'>Choose the plan that fits your needs. Upgrade or cancel anytime</p>
            <div className='w-[90%] mx-auto flex flex-wrap justify-center items-center gap-5'>
                <div className='bg-[#fdfefe] border-2 border-gray-200 rounded text-left p-3 lg:w-1/4 md:w-1/2 sm:w-full'>
                    <span className='inline-block text-[18px] my-1 font-extrabold'>Free</span>
                    <h2 className='text-[18px] text-[#30325b] font-extrabold my-1 leading-none'>$0<span className='text-[14px] text-[#6c7096]'>/month</span> </h2>
                    <ul className='text-[#30325b] space-y-1 my-3'>
                        <li><span className='inline-block before:content-["✓"] before:mr-2 before:text-[#7049fb] text-[16px] text-[#30325b] font-semibold'>Access to GPT-4</span></li>
                        <li><span className='inline-block before:content-["✓"] before:mr-2 before:text-[#7049fb] text-[16px] text-[#30325b] font-semibold'>Basic Features</span></li>
                        <li><span className='inline-block before:content-["✓"] before:mr-2 before:text-[#7049fb] text-[16px] text-[#30325b] font-semibold'>1 GB Storage</span></li>
                    </ul>
                    <button className='text-[14px] text-white bg-[#7049fb] font-bold border border-[#614ecb] py-2 w-full rounded'>Get Started</button>                                                
                </div>
                <div className='bg-[#fdfefe] border-2 border-gray-200 rounded text-left p-3 lg:w-1/4 md:w-1/2 sm:w-full'>
                    <span className='inline-block text-[18px] my-1 font-extrabold'>Pro</span>
                    <h2 className='text-[18px] text-[#30325b] font-extrabold my-1 leading-none'>$9.99<span className='text-[14px] text-[#6c7096]'>/month</span> </h2>
                    <ul className='text-[#30325b] space-y-1 my-3'>
                        <li><span className='inline-block before:content-["✓"] before:mr-2 before:text-[#7049fb] text-[16px] text-[#30325b] font-semibold'>Access to GPT-4</span></li>
                        <li><span className='inline-block before:content-["✓"] before:mr-2 before:text-[#7049fb] text-[16px] text-[#30325b] font-semibold'>Basic Features</span></li>
                        <li><span className='inline-block before:content-["✓"] before:mr-2 before:text-[#7049fb] text-[16px] text-[#30325b] font-semibold'>1 GB Storage</span></li>
                    </ul>                                              
                    <button className='text-[14px] text-white bg-[#7049fb] font-bold border border-[#614ecb] py-2 w-full rounded'>Get Started</button>          
                </div>
                <div className='bg-[#fdfefe] border-2 border-gray-200 rounded text-left p-3 lg:w-1/4 md:w-1/2 sm:w-full'>
                    <span className='inline-block text-[18px] my-1 font-extrabold'>Enterprise</span>
                    <h2 className='text-[18px] text-[#30325b] font-extrabold my-1 leading-none'>$29.99<span className='text-[14px] text-[#6c7096]'>/month</span> </h2>
                    <ul className='text-[#30325b] space-y-1 my-3'>
                        <li><span className='inline-block before:content-["✓"] before:mr-2 before:text-[#7049fb] text-[16px] text-[#30325b] font-semibold'>Access to GPT-4</span></li>
                        <li><span className='inline-block before:content-["✓"] before:mr-2 before:text-[#7049fb] text-[16px] text-[#30325b] font-semibold'>Basic Features</span></li>
                        <li><span className='inline-block before:content-["✓"] before:mr-2 before:text-[#7049fb] text-[16px] text-[#30325b] font-semibold'>1 GB Storage</span></li>
                    </ul>                                                
                    <button className='text-[14px] text-white bg-[#7049fb] font-bold border border-[#614ecb] py-2 w-full rounded'>Get Started</button>
                </div>
            </div>
        </section>
    )
}

export default Pricing