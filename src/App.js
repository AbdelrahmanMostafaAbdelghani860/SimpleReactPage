import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Gallery from "./components/Gallery/Gallery";
import Error404 from "./components/404/Error404";
import Portfolio from "./components/portfolio/Portfolio";
function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        {
          index: true,

          element: <Home></Home>,
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "Contact",
          element: <Gallery></Gallery>,
        },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
          path: "*",
          element: <Error404></Error404>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
