import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Features from "./pages/Features";
import Home from "./pages/HomePage/Home";
import Error_404 from "./pages/Error_404";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/About Us" element={<AboutUs />} />
        <Route path="*" element={<Error_404 />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App