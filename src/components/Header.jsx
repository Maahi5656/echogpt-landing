"use client"

import Image from 'next/image'
import Link from 'next/link'

import logo from '../assets/logo.png'
import hamburgermenu from '../assets/hamburger.png'

const Header = () => {

    function openNav(){
        const nav = document.getElementById("myNav")
        
        if(nav){
            nav.style.width = "100%";
        }
    }

    function closeNav(){
        const nav = document.getElementById("myNav")
        
        if(nav){
            nav.style.width = "0";
        }
    }

    return (
        <>
            <header className='fixed top-0 z-999 bg-white w-full border-b border-b-gray-200'>
                <nav className="navbar w-[90%] mx-auto flex items-center justify-between py-3.5">
                    <div className='flex items-center justify-start'>
                        <Image src={logo} width={45} height={45} alt='logo' />
                        <h2 className='text-[#3d376a] text-[14px] px-1 font-bold'>EchoGPT</h2>
                    </div>
                    <div className='flex justify-center'>
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
                    <div className='navbar flex justify-end items-center gap-2.5'>
                        <ul className='flex gap-0.5'>
                            <li>
                                <button className='inline-block border-2 border-[#7049fb] text-[#7049fb] text-[14px] font-semibold rounded-2xl px-3.5 py-1.5 mx-1.5 cursor-pointer'>Sign In</button>
                            </li>
                            <li>
                                <button className='inline-block border-2 border-[#7049fb] text-white text-[14px] bg-[#7049fb] font-semibold rounded-2xl px-3.5 py-1.5 mx-1.5 cursor-pointer'>Get Started Free</button>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-menu">
                        <span className='cursor-pointer' onClick={openNav}>
                            <Image src={hamburgermenu} width={20} height={20}  alt="hamburgermenu" />
                        </span>
                        <div className="overlay" id="myNav">
                            <a href="javascript:void(0)" onClick={closeNav} className="closebtn">&times;</a>
                            <div className="overlay-content">
                                <a onClick={closeNav} href="#">Home</a>
                                <a onClick={closeNav} href="#">Feature</a>
                                <a onClick={closeNav} href="#">Al Modelss</a>
                                <a onClick={closeNav} href="#">Pricing</a>
                                <a onClick={closeNav} href="#">FAQ</a>
                                <a onClick={closeNav} href="#">
                                    <button className='inline-block border-2 border-[#7049fb] text-[#7049fb] text-[14px] font-semibold rounded-2xl px-3.5 py-1.5 mx-1.5 cursor-pointer'>Sign In</button>
                                </a>
                                <a onClick={closeNav} href="#">
                                    <button className='inline-block border-2 border-[#7049fb] text-white text-[14px] bg-[#7049fb] font-semibold rounded-2xl px-3.5 py-1.5 mx-1.5 cursor-pointer'>Get Started Free</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header