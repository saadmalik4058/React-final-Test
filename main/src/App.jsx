import AddTodo from "./Components/AddTodo";
import CategoryDetails from "./Components/ProductsListing/CategoryDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      element: <AddTodo />,
    },
    {
      path: "Category/:id",
      element: <CategoryDetails />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
