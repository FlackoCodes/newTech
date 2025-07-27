import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Features from "./pages/Features";
import Home from "./pages/HomePage/Home";
import Error_404 from "./pages/Error_404";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import AboutComp from "./pages/AboutUs/index";
import PricingSingle from "./pages/PricingSingle";
import CaseStudySingle from "./pages/CaseStudySingle";
import CareerSingle from "./pages/CareerSingle";
import License from "./pages/License";
import BlogSingle from "./pages/BlogSingle";
import CaseStudy from "./pages/CaseStudy";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/About Us" element={<AboutComp />} />
        <Route path="/Pricing Single" element={<PricingSingle />} />
        <Route path="/Case Studies" element={<CaseStudy />} />
        <Route path="/Case Study Single" element={<CaseStudySingle />} />
        <Route path="/Career Single" element={<CareerSingle />} />
        <Route path="/Licenses" element={<License />} />
        <Route path="/Blog Post" element={<BlogSingle />} />
        <Route path="/Features" element={<Features />} />
        <Route path="*" element={<Error_404 />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
