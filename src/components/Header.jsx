import Image from 'next/image'
import Link from 'next/link'

import logo from '../assets/logo.png'

const Header = () => {
    return (
        <>
            <header className='fixed top-0 z-999 bg-white w-full'>
                <nav className="w-[90%] mx-auto flex items-center justify-between py-3.5">
                    <div className='flex items-center justify-start w-1/2'>
                        <Image src={logo} width={45} height={45} alt='logo' />
                        <h2 className='text-[#3d376a] text-[14px] px-1 font-bold'>EchoGPT</h2>
                    </div>
                    <div className='flex justify-center w-1/2'>
                        <div>
                            <ul className='flex gap-1.5'>
                                <li><Link className='text-[#3d376a] text-[14px] px-1 font-bold' href="#">Home</Link></li>
                                <li><Link className='text-[#3d376a] text-[14px] px-1 font-bold' href="#">Feature</Link></li>
                                <li><Link className='text-[#3d376a] text-[14px] px-1 font-bold' href="#">Al Models</Link></li>
                                <li><Link className='text-[#3d376a] text-[14px] px-1 font-bold' href="#">Pricing</Link></li>
                                <li><Link className='text-[#3d376a] text-[14px] px-1 font-bold' href="#">FAQ</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-end items-center gap-2.5 w-1/2'>
                        <button className='inline-block border-2 border-[#7049fb] text-[#7049fb] text-[14px] font-semibold rounded-2xl px-3.5 py-1.5 mx-1.5 cursor-pointer'>Sign In</button>
                        <button className='inline-block border-2 border-[#7049fb] text-white text-[14px] bg-[#7049fb] font-semibold rounded-2xl px-3.5 py-1.5 mx-1.5 cursor-pointer'>Get Started Free</button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header