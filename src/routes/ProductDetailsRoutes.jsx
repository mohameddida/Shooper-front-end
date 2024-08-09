import ProductsDetails from "../Pages/ProductsDetails";
import ComparePage from "../Pages/ComparePage";

export const ProductDetailsRoutes = [
  {
    path: "/results/products/:id",
    element: <ProductsDetails />,
  },
  {
    path: "/results/products/compare/:id",
    element: <ComparePage />,
  },
];
