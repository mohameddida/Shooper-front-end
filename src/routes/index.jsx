import ResultLayout from "../layout/ResultLayout";
import ProductDeatilsLayout from "../layout/ProductDeatilsLayout";
import SearchLayout from "../layout/SearchLayout";
import { BrandsRoutes } from "./BrandsRoutes";
import { ProductsRouter } from "./ProductRoutes";
import { ProductDetailsRoutes } from "./ProductDetailsRoutes";
import SignInPage from "../Pages/SignInPage";
import SignUpPage from "../Pages/SignUpPage";

export const IndexRouters = [
  {
    path: "/",
    element: <SearchLayout />,
  },
  {
    path: "/results",
    element: <ResultLayout />,
    children: [...ProductsRouter, ...BrandsRoutes],
  },

  //AZIZ
  {
    path: "/results/products",
    element: <ProductDeatilsLayout />,
    children: [...ProductDetailsRoutes],
  },
  {
    path: "/SignIn",
    element: <SignInPage />,
  },  {
    path: "/signup",
    element: <SignUpPage />,
  },
];
