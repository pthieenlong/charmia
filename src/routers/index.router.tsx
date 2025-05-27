import { createBrowserRouter, RouterProvider } from "react-router";
import { Homepage } from "../pages/home";

function AppRouter() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>
  }
  ])
  return <RouterProvider router={router} />
}

export default AppRouter;