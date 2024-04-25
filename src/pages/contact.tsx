import { FaLocationDot } from "react-icons/fa6"
import ContactForm from "../components/contactForm"
import parse from 'html-react-parser';
import { IoCall } from "react-icons/io5";
import FaqCard from "../components/faq";
import { useEffect, useState } from "react";


const Contact = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

    const headerInfo = [
        {
            icon: <FaLocationDot className="text-[#EAB705] text-2xl" />,
            title: "Address",
            description: "DS IKON, near Cars24, Baner, Pune, <br />Maharashtra - 411045"
        }, {
            icon: <IoCall className="text-[#EAB705] text-2xl" />,
            title: "Contact information",
            description: "Call : +91 82370 39001 / +91 82370 39002"
        }
    ]

    const faqData = [{
        title: "What is ImageProVision ?",
        content: "ImageProVision Technology Pvt. Ltd is a company that processes and analyses images with the help of image processing applications.",
        show: true,
        first: true
    }, {
        title: "How does image processing work?hat is ImageProVision ?",
        content: "ImageProVision Technology Pvt. Ltd is a company that processes and analyses images with the help of image processing applications.",
        show: false,
        first: false
    }, {
        title: "What is Image Analytics?",
        content: "ImageProVision Technology Pvt. Ltd is a company that processes and analyses images with the help of image processing applications.",
        show: false, first: false
    }, {
        title: "Which industries can use Image Analytics?",
        content: "ImageProVision Technology Pvt. Ltd is a company that processes and analyses images with the help of image processing applications.",
        show: false, first: false
    }]

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 900);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])




    return (
        <div className="w-full h-full overflow-hidden">
            <div className="bg-[#1E053C] py-20 w-full">
                <div className="absolute top-28 z-0 w-full h-[700px] bg-[url('/global.png')] bg-no-repeat bg-cover bg-left-top" style={{ opacity: 0.02 }}></div>
                <div className="max-w-[1100px] mx-auto max-[900px]:px-8 max-[1280px]:pr-8">
                    <div className="w-full relative">
                        <h1 className="absolute inset-0 top-6 text-transparent font-bold justify-center items-center hidden md:flex text-[140px]" style={{ WebkitTextStroke: '1px #2E0A57' }}>
                            Contact Us
                        </h1>
                        <h1 className="flex md:hidden absolute -right-44 sm:-right-20 top-40 text-transparent font-bold  justify-center items-center transform -rotate-90 text-[80px]" style={{ WebkitTextStroke: '1px #2E0A57' }}>
                            Contact Us
                        </h1>
                    </div>
                    <div className="w-full flex justify-end">
                        <div className="w-full min-[900px]:w-[97%] relative z-10 max-[900px]:flex-col flex items-start justify-between text-white">
                            <div className="max-[900px]:w-full">
                                <h1 className="text-3xl min-[350px]:text-4xl min-[500px]:text-5xl xl:text-[55px] font-medium xl:leading-[65px] pb-10"> Need something? <br /> The IPV Squad is <br /> here to help!! </h1>
                                {headerInfo && headerInfo.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4 py-4">
                                        {item.icon}
                                        <div>
                                            <p className="text-[#EAB705] font-bold text-xl">{item.title}</p>
                                            <p>{parse(item.description)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="min-[900px]:hidden flex items-center gap-4 text-sm font-semibold pb-4 pt-4">
                                <img src="gmap.png" alt="Google map Link" className="w-6" />
                                <a className="cursor-pointer text-lg font-font" href="https://www.google.com/maps/place/edge+CRM/@19.212777,73.109044,15z/data=!4m6!3m5!1s0x3be7c9af72af5525:0x8b52ac04d1895c9!8m2!3d19.2127771!4d73.1090441!16s%2Fg%2F11hdvw2xr1?hl=en&entry=ttu">View on Google Map</a>
                            </div>
                            <div className="max-[900px]:hidden">
                                <div className="w-[2px] h-[430px] mx-auto bg-[#EAB705] bg-opacity-40"></div>
                            </div>
                            <div className={`${isMobile ? "px-8 pt-20 pb-16 rounded-2xl mt-12" : ''} max-[900px]:bg-white relative w-full  min-[900px]:w-[50%] h-full`}>
                                <ContactForm bgWhite={isMobile ? true : false} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-[900px]:hidden bg-b-w w-full h-[550px] flex justify-center items-center px-8">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15070.389785170444!2d73.109044!3d19.212777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9af72af5525%3A0x8b52ac04d1895c9!2sedge%20CRM!5e0!3m2!1sen!2sin!4v1713963191162!5m2!1sen!2sin" width="1100px" height="462" loading="lazy" className="max-[900px]:hidden rounded-xl" />
            </div>
            <div className="max-[900px]:flex-col flex justify-between items-start  max-w-[1100px] mx-auto max-xl:px-8 py-20">

                <h1 className="text-2xl min-[350px]:text-3xl min-[475px]:text-4xl sm:text-5xl md:text-6xl md:leading-[65px] min-[900px]:leading-[60px] min-[900px]:text-[40px] xl:text-5xl font-medium xl:leading-[65px] max-[900px]:pb-16 pb-10"> Got any questions? <br />  We got you covered. </h1>

                <div className="w-full min-[900px]:w-1/2">
                    {
                        faqData.map((item, index) => {
                            return <FaqCard first={item.first} key={index} title={item.title} content={item.content} open={item.show} />
                        })
                    }</div>
            </div>
        </div>
    );
}
export default Contact