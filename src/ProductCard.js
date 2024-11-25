import { useTheme } from "../utils/ThemeContext";

const ProductCard = ({dataList})=>{
  const { isDarkMode } = useTheme();
    
    return (
       
             <div
            className=" dark:bg-slate-800 dark:text-white dark:hover:bg-slate-600 w-[350px] h-min  m-5 rounded-xl  p-4 hover:shadow-2xl hover:bg-slate-200 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-300"
           
          >
            <div>
              <div className="overflow-hidden flex justify-center items-center mb-2">
                <img
                  className="rounded-xl object-fill w-60"
                  src={dataList.image}
                  alt={dataList.title}
                />
              </div>
              <div className="mt-6 items-center text-center">
              <div className="font-semibold text-lg mb-2">{dataList.title}</div>
              <div className="dark:text-white text-sm text-gray-700 max-h-20 overflow-hidden text-ellipsis">
                {dataList.description}
              </div>
              <div className="mt-2 text-gray-500 text-sm">{dataList.category}</div>
            </div>
            <div className="text-center mt-2 font-bold text-lg dark:text-white text-black truncate">
              ${dataList.price}
              </div>
            </div>
          
        </div>
    )
}

export default ProductCard