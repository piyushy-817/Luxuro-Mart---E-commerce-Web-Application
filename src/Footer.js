import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import luxuraMartLogo from "../utils/luxuraMartLogo.png";
import { useTheme } from "../utils/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className="dark:bg-slate-700">
      <div className="align-middle text-center justify-center h-60  bg-gray-500 shadow-inner">
        <div className="  p-12 text-center  text-slate-100 font-arvo text-2xl">
          Get More Offers,
        </div>
        <button className=" h-10 w-44 text-slate-500 bg-white py-1 px-2 mr-4 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 border-double border-4 border-blue-100 items-center rounded-xl active:bg-blue-400 hover:text-white  cursor-pointer">
          Offers
        </button>
      </div>

      <div className=" items-center dark:bg-slate-900 dark:text-white  rounded-xl space-x-80  p-10 pt-30 flex">
        <div className=" items-center">
          <img className="w-32" src={luxuraMartLogo}></img>
          <div className=" mt-2 text-2xl">
            <span className=" text-blue-400 font-bold font-arvo text-xl">
              LuxuroMart
            </span>
          </div>
          <p className="mt-4 text-center w-80 text-wrap">
            LuxuroMart is a premium e-commerce platform offering a curated
            selection of high-quality products ranging from fashion and
            accessories to electronics and home essentials. Designed for
            convenience and style, LuxuroMart ensures a seamless shopping
            experience with trusted brands, secure payments, and fast delivery
            services.
          </p>

          <div className="ml-20 items-center mt-4 flex space-x-3 text-xl">
            <FaFacebook className=" cursor-pointer text-3xl"></FaFacebook>
            <FaInstagram className=" cursor-pointer text-3xl"></FaInstagram>
            <FaTwitter className=" cursor-pointer text-3xl"></FaTwitter>
          </div>
        </div>

        <div className="mt-44">
          <h4 className="text-slate-500 font-arvo font-bold text-2xl">
            Features
          </h4>
          <ul className=" space-y-6 mt-4">
            <li className="cursor-pointer">Fast Delivery</li>
            <li className="cursor-pointer">Free Delivery if late</li>
            <li className="cursor-pointer">Guranteed Quality</li>
            <li className="cursor-pointer">Easy To use app</li>
            <li className="cursor-pointer">24x7 Service</li>
          </ul>
        </div>

        <div className="mt-44">
          <h4 className="text-slate-500 font-arvo font-bold text-2xl">
            About us
          </h4>
          <ul className="  mt-4">
            <li className="cursor-pointer my-4">Career</li>

            <li className="cursor-pointer my-4">About Us</li>

            <li className="cursor-pointer my-4">Contact Us</li>

            <li className="cursor-pointer my-4">Become a Partner</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
