import Image from 'next/image'
import Link from 'next/link'

import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className="relative top-[73px] bg-[#30325b]">
            <div className="mx-auto flex w-[90%] flex-col items-center gap-[45px] py-15 md:items-center lg:flex-row lg:items-start">

                {/* Logo */}
                <div className="flex w-full items-center justify-center lg:w-1/4 lg:justify-start">
                    <Image
                        src={logo}
                        width={45}
                        height={45}
                        alt="logo"
                    />
                    <h2 className="px-1 text-[14px] font-bold text-[#fdfefe]">
                        EchoGPT
                    </h2>
                </div>

                {/* Product */}
                <div className="w-full text-center md:w-1/2 lg:w-1/4 lg:text-left">
                    <h2 className="mb-2 text-[18px] font-bold text-[#fdfefe]">
                        Product
                    </h2>

                    <ul>
                        <li>
                            <Link className="mb-2 text-[14px] font-medium text-[#fdfefe]" href="#">
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link className="mb-2 text-[14px] font-medium text-[#fdfefe]" href="#">
                                AI Models
                            </Link>
                        </li>
                        <li>
                            <Link className="mb-2 text-[14px] font-medium text-[#fdfefe]" href="#">
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link className="mb-2 text-[14px] font-medium text-[#fdfefe]" href="#">
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Resources */}
                <div className="w-full text-center md:w-1/2 lg:w-1/4 lg:text-left">
                    <h2 className="mb-2 text-[18px] font-bold text-[#fdfefe]">
                        Resources
                    </h2>

                    <ul>
                        <li>
                            <Link className="mb-2 text-[14px] font-medium text-[#fdfefe]" href="#">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link className="mb-2 text-[14px] font-medium text-[#fdfefe]" href="#">
                                Help Center
                            </Link>
                        </li>
                        <li>
                            <Link className="mb-2 text-[14px] font-medium text-[#fdfefe]" href="#">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link className="mb-2 text-[14px] font-medium text-[#fdfefe]" href="#">
                                Terms Of Service
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div className="w-full text-center md:w-1/2 lg:w-1/4 lg:text-left">
                    <h2 className="mb-2 text-[18px] font-bold text-[#fdfefe]">
                        Social
                    </h2>

                    <ul className="flex justify-center gap-2.5 lg:justify-start">
                        <li>
                            <Link className="text-[14px] font-medium text-[#fdfefe]" href="#">
                                <FaTwitter className="text-3xl" />
                            </Link>
                        </li>
                        <li>
                            <Link className="text-[14px] font-medium text-[#fdfefe]" href="#">
                                <FaGithub className="text-3xl" />
                            </Link>
                        </li>
                        <li>
                            <Link className="text-[14px] font-medium text-[#fdfefe]" href="#">
                                <FaLinkedin className="text-3xl" />
                            </Link>
                        </li>
                        <li>
                            <Link className="text-[14px] font-medium text-[#fdfefe]" href="#">
                                <FaYoutube className="text-3xl" />
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer