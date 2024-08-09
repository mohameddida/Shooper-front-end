import FormRegister from "../components/forms/FormRegister";
import FormLoginLayout from "../layout/FormLoginLayout";
import FormRegisterLayout from "../layout/FormRegisterLayout";
import ResultLayout from "../layout/ResultLayout";
import SearchLayout from "../layout/SearchLayout";
import { BrandsRoutes } from "./BrandsRoutes";
import { ProductsRouter } from "./ProductRoutes";
export const IndexRouters = [
  {
    path: "/",
    element: <FormLoginLayout/>,
  },

  {
    path: "/search",
    element: <SearchLayout/>,
  },

  {
    path: "/register",
    element: <FormRegisterLayout/>,
  },
  {
    path: "/results",
    element: <ResultLayout />,
    children: [...ProductsRouter, ...BrandsRoutes],
  },
];
