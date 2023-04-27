import App from "next/app";
import { Navbar } from "../navbar";
import { Contact } from "../contact";
import { Product } from "../product";

const routesConfig = [
    {
      path: "/",
      element: (
        <>
          <Navbar />
        </>
      ),
    //   errorElement: <NotFound />,
      errorElement: null,

      children: [
        { path: "/", element: <App /> },
        { path: "/contact", element: <Contact /> },
        { path: "/:id", element: <Product /> },
      ],
    },
  ];
  
  export default routesConfig;