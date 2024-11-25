import Header from "./src/Header";
import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/Body";
import Footer from "./src/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/About";
import Contact from "./src/Contact";
import ProductPage from "./src/ProductPage";
import Errorpge from "./src/ErrorPge";
import { Provider } from "react-redux";
import AppStore from "./utils/Appstore";
import Cart from "./src/Cart";
import { ThemeProvider } from "./utils/ThemeContext";

const Mainapp = () => {
  return (
    <div>
      <ThemeProvider>
      <Provider store={AppStore}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </Provider>
      </ThemeProvider>
    </div>
  );
};

const Mainroute = createBrowserRouter([
  {
    path: "/",
    element: <Mainapp></Mainapp>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/products/:productId",
        element: <ProductPage />,
      },{
        path: "/cart",
        element: <Cart/>,
      }
    ],
    errorElement: <Errorpge></Errorpge>,
  },
]);

const rooting = ReactDOM.createRoot(document.getElementById("root"));
rooting.render(<RouterProvider router={Mainroute} />);
