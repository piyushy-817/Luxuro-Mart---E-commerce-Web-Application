import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { useTheme } from "../utils/ThemeContext";

const Body = () => {
  const [dataList, setDataList] = useState([]);
  const { isDarkMode, toggleTheme } = useTheme();

  const fetchData = async () => {
    const fetchingData = await fetch("https://fakestoreapi.com/products");
    const mainFetchedData = await fetchingData.json();
    setDataList(mainFetchedData);
    console.log(dataList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-slate-100-200 dark:text-white dark:bg-slate-800">
      <div className="dark:bg-slate-700 flex justify-center items-center h-20 bg-gray-100">
        <span className="text-5xl font-doto  font-extraboldbold dark:text-white text-blue-800 overflow-hidden border-r-2 whitespace-nowrap w-[12ch] animate-typing">
          Luxura Mart
        </span>
      </div>
      <div>
        
        <button
          onClick={toggleTheme} 
          className={`mt-10 ml-20 text-5xl p-2 rounded-md focus:outline-none ${
            isDarkMode ? "bg-gray-500 text-white " : "bg-blue-200 text-slate-700"
          }`}
        >
          {isDarkMode ? "☀️" : "🌛"}
        </button>
      </div>
      <div className="mx-40 mt-20 flex flex-wrap justify-items-center">
        {dataList.map((item) => (
          <Link
            to={`/products/${item.id}`}
            key={item.id}
            className="no-underline"
          >
            <ProductCard dataList={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
