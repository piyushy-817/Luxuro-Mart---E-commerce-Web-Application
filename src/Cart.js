import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../utils/Cartslice";
import { useTheme } from "../utils/ThemeContext";

const Cart = () => {
  const {isDarkMode} = useTheme()
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearall = () => {
    dispatch(clearItems());
  };

  return (
    <div className="dark:bg-slate-700">
      <div className="dark:text-white pt-20 text-center font-arvo text-4xl border-b-2 border-blue-200">
        Cart
      </div>

     

      <div className="w-8/12 m-auto">
        {cartItems.length > 0 ? (
          <div className="">
             <div className="flex justify-end">
    
    <button className="mr-4 mt-10 shadow-lg transition ease-in-out delay-50 hover:text-slate-100 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 bg-blue-300 rounded-lg py-2 px-6 font-arvo font-bold text-slate-700 text-lg" onClick={handleClearall}>
      Clear All
    </button>
  </div>
            {cartItems.map((item, index) => (
              <div className="dark:text-white flex mt-20 pb-20 " key={index}>
                <div>
                  <div className="font-bold text-lg">{item.title}</div>
                  <div className=" mt-4 font-arvo">{item.description}</div>
                  <div className="mt-10 font-arvo font-bold text-2xl ml-72">
                    Price - $ {item.price}
                  </div>
                </div>

                <img className="w-36 ml-4 rounded-2xl h-auto" src={item.image}></img>
              </div>
            ))}
          </div>
        ) : (
          <div className="dark:text-white text-center pt-10 font-orbitron text-5xl pb-10">No items in the cart.</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
