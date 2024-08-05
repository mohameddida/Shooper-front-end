import BrandsPage from "../Pages/BrandsPage";

export const BrandsRoutes = [
  {
    path: "Brands",
    element: <BrandsPage />,
    
  },
  {
    path: "Brands/:id",
    element: <BrandsPage />,
  },
];
