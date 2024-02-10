import Typed from "typed.js";
import bannerIamge from "../assets/user.jpeg"
import bannnerBackground from '../assets/banner.jpg';
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  const el = useRef(null)

 
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Full Stack Web Developer", "Android Developer", "Backend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 100,
      loop:true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
        <div style={
              {
                backgroundImage:`url(${bannnerBackground})`,
                backgroundSize:"cover",
                
              }
              
            }
        className=" main w-fit  pt-10 flex item-center justify-center  items-center gap-2 text-white pb-10">
          {/* text */}
            <div className="main-section-left w-full flex items-center  justify-center">
              <div className="w-2/3 space-y-6 ms-10">
                <h3 className=" text-3xl font-semibold">Hii I am</h3>
                <h1 className=" text-5xl font-bold">Rajeev Ranjan</h1>
                <h2 className=" text-3xl ">I am a <span ref={el} className="underline font-bold text-orange-500"></span></h2>
                <p className="font-semibold text-md tracking-widest">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, doloribus ducimus. Nisi dolorum sed at iure cum, eligendi nostrum quibusdam deserunt doloremque quia magnam. Aliquid quam sapiente rerum quod, eveniet cum est. Autem suscipit porro perspiciatis placeat facilis! Odio corrupti eaque explicabo non dolorum consectetur ratione est provident impedit aut?</p>
                {/* icons */}
                <div className="icons-container text-3xl space-x-6 flex ">
                  <Link to={"https://github.com/Rajeev2016"} className="hover:border hover:border-4 w-16  h-16  cursor-pointer hover:bg-orange-600  rounded-full flex  justify-center items-center bg-gray-800">
                    <i className="fa-brands fa-github "></i>
                  </Link>
                  <Link to={"https://www.linkedin.com/in/rajeev-ranjan-a43a0b162?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} className="hover:border hover:border-4 w-16 h-16  cursor-pointer hover:bg-orange-600  rounded-full flex  justify-center items-center bg-gray-800">
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                  <Link to={"https://www.facebook.com/rajeev.singhking.94?mibextid=9R9pXO"} className="hover:border hover:border-4 w-16  h-16   cursor-pointer hover:bg-orange-600 rounded-full flex  justify-center items-center bg-gray-800">
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                  <Link to={"https://www.instagram.com/rajeevsingh2016/?igsh=dW1tcW5rdG5iMnZn"} className="hover:border hover:border-4 w-16  h-16 cursor-pointer hover:bg-orange-600   rounded-full  flex justify-center items-center bg-gray-800">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                 
                </div>
                <br />
                <Link href="/contact" className="px-5  py-3  bg-orange-500 rounded-full shadow-lg hover:bg-white hover:text-black font-bold ">Contact me</Link>
              </div>
            </div>
            {/* image */}
            <div className=" main-section-right flex items-center justify-center ">
                <img src={bannerIamge} alt="img" className=" rounded-full shadow-lg w-[60%]   border-8 border-slate-100  "/>
            </div>
        </div>
    </>
  )
}

export default Banner