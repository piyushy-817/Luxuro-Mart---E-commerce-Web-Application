import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/Cartslice";
import { useTheme } from "../utils/ThemeContext";


const ProductPage = () => {
  
  const { isDarkMode } = useTheme();
  const { productId } = useParams(); // Get the productId from the URL
  const [productData, setProductData] = useState(null);

  const fetchProductData = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    const data = await response.json();
    setProductData(data);

    console.error(productData);
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  if (!productData) {
    return <div>Loading...</div>;
  }
 
  const dispatch = useDispatch()
  const handleAddProduct = (product)=>{
     dispatch(addItem(product))
     
  }



  return (
    <div className="p-32  dark:bg-slate-700 flex flex-wrap">
      <div className="">
        <img className="rounded-lg w-60" src={productData.image} alt={productData.title} />
      </div>
      <ul className=" ml-60">
        <li className=" dark:text-white font-orbitron font-bold text-5xl text-slate-800 text-wrap w-[700px]">
          {productData.title}
        </li>
        <li className="mt-4 flex space-x-4">
          <span className="font-arvo dark:text-white text-slate-600"> ⭐{productData.rating.rate} </span>
          <span className="font-arvo dark:text-white text-slate-600" > {productData.rating.count} Ratings & Reviews</span>
        </li>
        <li className=" dark:text-white font-arvo text-slate-800  text-xl text-left w-[500px] text-wrap mt-20">
          {productData.description}
        </li>
        <li className="mt-4">Category: {productData.category}</li>
        <li className="mt-10 dark:text-white font-orbitron font-bold text-3xl text-slate-950">Price: ${productData.price}</li>
        <div>
        <button  onClick={()=>handleAddProduct(productData)} className="mt-20 shadow-lg transition ease-in-out delay-50 hover:text-slate-100 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 bg-blue-300 rounded-lg py-2 px-6 font-arvo font-bold text-slate-700 text-lg" >Add To Cart</button>
      </div>
      </ul>
     
    </div>
  );
};

export default ProductPage;
