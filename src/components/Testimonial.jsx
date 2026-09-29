"use client"

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="relative top-[73px] bg-[#fdfefe] py-7 text-center">
        <span className="mb-3 inline-block rounded-3xl bg-[#d9d2fd] px-3.5 py-1.5 text-[16px] font-semibold uppercase leading-none text-[#7049fb]">
            Testimonial
        </span>

        <h2 className="mb-3 text-[25px] font-extrabold leading-none text-[#30325b]">
            What Our Users Say
        </h2>

        <p className="mb-5 text-[18px] font-medium text-[#6c7096]">
        Join Thousands Of People Who Are Already Using The EcoGPT to work
        smarter
        </p>
        <div className="w-[90%] mx-auto">
            <Slider {...settings}>
                <div className="px-3">
                    <div className="text-left bg-white p-4 border-2 border-gray-200 rounded">
                        <h3 className='text-[18px] text-[#30325b] font-extrabold leading-none'>Jonh Doe</h3>
                        <small className='inline-block text-[#6c7096] text-[14px] font-extralight leading-none'>Student</small>
                        <br /><br />
                        <p className="text-[16px] text-[#6c7096] font-medium">{"Easy To Use"}</p>
                    </div>
                </div>
                <div className="px-3">
                    <div className="text-left bg-white p-4 border-2 border-gray-200 rounded">
                        <h3 className='text-[18px] text-[#30325b] font-extrabold leading-none'>Jonh Doe</h3>
                        <small className='inline-block text-[#6c7096] text-[14px] font-extralight leading-none'>Student</small>
                        <br /><br />
                        <p className="text-[16px] text-[#6c7096] font-medium">{"Easy To Use"}</p>
                    </div>
                </div>
                <div className="px-3">
                    <div className="text-left bg-white p-4 border-2 border-gray-200 rounded">
                        <h3 className='text-[18px] text-[#30325b] font-extrabold leading-none'>Jonh Doe</h3>
                        <small className='inline-block text-[#6c7096] text-[14px] font-extralight leading-none'>Student</small>
                        <br /><br />
                        <p className="text-[16px] text-[#6c7096] font-medium">{"Easy To Use"}</p>
                    </div>
                </div>
                <div className="px-3">
                    <div className="text-left bg-white p-4 border-2 border-gray-200 rounded">
                        <h3 className='text-[18px] text-[#30325b] font-extrabold leading-none'>Jonh Doe</h3>
                        <small className='inline-block text-[#6c7096] text-[14px] font-extralight leading-none'>Student</small>
                        <br /><br />
                        <p className="text-[16px] text-[#6c7096] font-medium">{"Easy To Use"}</p>
                    </div>
                </div>
                <div className="px-3">
                    <div className="text-left bg-white p-4 border-2 border-gray-200 rounded">
                        <h3 className='text-[18px] text-[#30325b] font-extrabold leading-none'>Jonh Doe</h3>
                        <small className='inline-block text-[#6c7096] text-[14px] font-extralight leading-none'>Student</small>
                        <br /><br />
                        <p className="text-[16px] text-[#6c7096] font-medium">{"Easy To Use"}</p>
                    </div>
                </div>
            </Slider>            
        </div>  

    </section>
  );
};

export default Testimonial;
