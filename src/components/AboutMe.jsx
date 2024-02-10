
import { useState } from 'react'
import bannerImage from '../assets/img-2.jpeg'
const AboutMe = () => {
  const [data, setData]=useState({
    image:bannerImage,
    title:"Java Developer and Android Developer",
    desc1:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam perspiciatis cumque totam qui, beatae consectetur dolorem? Provident optio necessitatibus quibusdam animi quasi eos eius excepturi ullam corrupti architecto? At recusandae ex`,
    desc2:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur iusto magni totam architecto pariatur nihil, quisquam blanditiis maxime necessitatibus nobis.`,
    actionButton:{
      title:"Read More..",
      link:"/readmore"
    }
  })
  return (
    <>
      <div className="main-container border bg-gray-100 p-5">
        <h1 className="text-center text-5xl pb-16 underline font-bold">About Me</h1>
        <div className="flex items-center justify-center">
            {/* image container */}
          <div className="w-full  border-black flex justify-center ">
            <img 
            src={bannerImage} 
            alt="Rajeev Ranjan" 
            className='w-1/2 rounded-full hover:p-2 hover:bg-black'/>
          </div>
          {/* text container */}
          <div className="w-full  border-black flex justify-center items-center">
           <div className='space-y-5 w-3/4'>
              <h1 className='text-5xl font-semibold mt-5'>{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button  className='bg-orange-500 px-3 py-2 rounded-full text-2xl font-semibold text-white'>{data.actionButton.title}</button>
           </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe