
import bannnerBackground from '../assets/banner.jpg';

const Expertise = () => {
  return (
    <>
        <div className="my-2 ">
            <h1 className="text-center text-5xl underline font-bold">My Expertise</h1>

            {/* box section */}
            <div style={
              {
                backgroundImage:`url(${bannnerBackground})`,
                backgroundSize:"cover"
              }
              
            }
            className="box-container flex mb-16 p-8 mt-6 justify-center item-center  ">
                <div className="w-2/3  text-center space-y-4 text-white">
                    {/* text container */}
                    <h1 className="text-4xl font-bold">
                        I Love These Technologies
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed dolores pariatur modi fugit voluptate aperiam nobis officiis delectus illum minus repellendus recusandae odio odit asperiores ad, reiciendis magnam consectetur itaque?</p>
                    <button className="px-4 py-2 bg-orange-500 rounded-full shadow-lg text-2xl">Hire Me</button>
                </div>
                {/* skills container */}
                <div className="skills-container flex justify-center ">
                    <div className="flex justify-center space-x-2 flex-wrap  h-fit w-2/3 ">
                        <p className="bg-slate-300 w-fit px-3 py-2 mt-4 rounded-full hover:bg-orange-500 cursor-pointer">Core Java</p>
                        <p className="bg-slate-300 w-fit px-3 py-2 mt-4 rounded-full hover:bg-orange-500 cursor-pointer">J2EE</p>
                        <p className="bg-slate-300 w-fit px-3 py-3 mt-4 rounded-full hover:bg-orange-500 cursor-pointer">Hibernate (ORM Tool)</p>
                        <p className="bg-slate-300 w-fit px-3 py-2 mt-4 rounded-full hover:bg-orange-500 cursor-pointer">Spring Framework</p>
                        <p className="bg-slate-300 w-fit px-3 py-2 mt-4 rounded-full hover:bg-orange-500 cursor-pointer">spring Boot Framework</p>
                        <p className="bg-slate-300 w-fit px-3 py-2 mt-4 rounded-full hover:bg-orange-500 cursor-pointer">Javascript</p>
                        <p className="bg-slate-300 w-fit px-3 py-2 mt-4 rounded-full hover:bg-orange-500 cursor-pointer">React JS</p>
                        <p className="bg-slate-300 w-fit px-3 py-2 mt-4 rounded-full hover:bg-orange-500 cursor-pointer">Next JS</p>
                        <p className="bg-slate-300 w-fit px-3 py-2 mt-4 rounded-full hover:bg-orange-500 cursor-pointer">Angular</p>
                        <p className="bg-slate-300 w-fit px-3 py-2 mt-4 rounded-full hover:bg-orange-500 cursor-pointer">State AMnagement</p>
                        <p className="bg-slate-300 w-fit px-3 py-2 mt-4 rounded-full hover:bg-orange-500 cursor-pointer">Database</p>
                        <p className="bg-slate-300 w-fit px-3 py-2 mt-4 rounded-full hover:bg-orange-500 cursor-pointer">AWS Cloud</p>
                        <p className="bg-slate-300 w-fit px-3 py-2 mt-4 rounded-full hover:bg-orange-500 cursor-pointer">App development</p>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Expertise