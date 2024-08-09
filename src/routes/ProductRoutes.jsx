import ProductsPage from "../Pages/ProductsPage";

export const ProductsRouter = [
  {
    path: "/results/",
    element: <ProductsPage />,
  },
  {
    path: "/results/products/:id",
    element: <ProductsPage />,
  },
  {
    path: "/results/products/suggestion",
    element: <ProductsPage />,
  },
];
