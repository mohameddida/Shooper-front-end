import ProductsPage from "../Pages/ProductsPage";

export const ProductsRouter = [
  {
    path: "/results/products",
    element: <ProductsPage />,
  },
  {
    path: "/results/products/:id",
    element: <ProductsPage />,
  },
];
