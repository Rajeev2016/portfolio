import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

const Header = () => {
    const [brandName, setBrandName] = useState("Rajeev Ranjan")
    //dynamically call all links
    const [menuLinks,setMenuLinks]=useState([
        {
            title:"Home",
            link:"/",
            id:1,
        },
        {
            title:"About Me",
            link:"/about",
            id:2,
        },
        {
            title:"Skills",
            link:"/skill",
            id:3,
        },
        {
            title:"Project",
            link:"/project",
            id:4,
        },
        {
            title:"Contact",
            link:"/contact",
            id:5,
        },
        
    ])
    // for hire me button
    const [actionButton, setActionButton] = useState(
        {
            title:"Hire Me",
            link:"/hireme"
        }
    )
  return (
    <>
        <div className="h-20   main flex justify-between items-center py-4 px-16 font-bold text-lg  bg-blue-500 text-white">
            <div>
                {/* {main logo} */}
                <h1 className="text-2xl font-bold">{brandName}</h1>
            </div>
            <div className="space-x-6   ">
                {/* {main lINKS} */}
                {
                    //for iteration all navbar value & dynamically call all these value
                    menuLinks.map((link)=>(
                        <NavLink key={link.id} to={link.link} className="hover:text-black">{link.title}</NavLink>
                    ))
                }
            </div>
            <div>
                {/* {buttons} */}
                <Link to={actionButton.link} className=" px-5 py-2 text-white bg-orange-500 hover:bg-white  hover:text-black rounded-xl">{actionButton.title}</Link>
            </div>
        </div>
    </>
  )
}

export default Header