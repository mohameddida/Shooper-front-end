import ResultLayout from "../layout/ResultLayout";
import SearchLayout from "../layout/SearchLayout";
import { BrandsRoutes } from "./BrandsRoutes";
import { ProductsRouter } from "./ProductRoutes";
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
];
