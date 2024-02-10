

const Services = () => {
    // make services pages dynamically
    // const [data,setData]=useState([
    //     {
    //         id:"",
    //         title:"",
    //         description:"",
    //         actionButton:{
    //             title:"",
    //             link:"",
    //         },


    //     },
    // ]);
  return (
    <>
    <div className="main-container py-16">
        <h1 className="underline text-5xl font-bold text-center ">My Services</h1>

        <div className="services-container flex mt-12 space-x-9 px-10">
            <div className="service1 space-y-3 shadow-lg rounded-xl bg-slate-200 p-5 text-center ">
                <i className="fa-brands fa-aws text-5xl  p-5 bg-white rounded-2xl "></i>
                <h1 className="text-4xl">Web Development</h1> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptates quos nihil, cum dolore tempore quo architecto alias aliquam ipsa?</p>
                <button className="rounded-full px-3 py-2 bg-orange-500 shadow-lg text-2xl">Check</button>
            </div>
            <div className="service2 space-y-3 shadow-lg rounded-xl bg-slate-200 p-5 text-center">
            <i className="fa-solid fa-mobile text-5xl  p-5 bg-white rounded-2xl "></i>

            <h1 className="text-4xl">App Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptates quos nihil, cum dolore tempore quo architecto alias aliquam ipsa?</p>
                <button className="rounded-full px-3 py-2 bg-orange-500 shadow-lg text-2xl">Check</button>
            </div>
            <div className="service3 space-y-3 shadow-lg rounded-xl bg-slate-200 p-5 text-center">
            <i className="fa-solid fa-database text-5xl  p-5 bg-white rounded-2xl "></i>

            <h1 className="text-4xl">Backend Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptates quos nihil, cum dolore tempore quo architecto alias aliquam ipsa?</p>
                <button className="rounded-full px-3 py-2 bg-orange-500 shadow-lg text-2xl">Check</button>
            </div>
        </div>

    </div>
    </>
  )
}

export default Services