import luxuraMartLogo from "../utils/luxuraMartLogo.png"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { useTheme } from "../utils/ThemeContext";



const Header =()=>{
    const { isDarkMode } = useTheme();
    const cartItems = useSelector((store) => store.cart.items);
    return(
        <div >
           <div className={` ${isDarkMode ? "bg-slate-600":"bg-gradient-to-r  from-blue-200 to-blue-300 ..."} shadow-xl flex flex-wrap  justify-between pl-10 p-4 align-middle`}   >
            <img className=" w-14" src={luxuraMartLogo}></img>
            <ul className=" dark:text-white font-orbitron font-semibold text-lg flex flex-wrap items-center justify-center ">
               <Link to={"/"}> <li className="m-4 ">Home</li></Link>
                <Link to={"/about"}><li className="m-4">About Us</li></Link>
                <Link to={"/cart"}><li className="m-4">Cart- {cartItems.length}</li></Link>
                <Link to={"/contact"}><li className="m-4">Contact Us</li></Link>
            </ul>
           </div>
           
        </div>
    )
}

export default Header