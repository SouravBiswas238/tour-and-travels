import React, { useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddTour from "./AdminDashboard/AddTour/AddTour";
import AllTour from "./AdminDashboard/AllTour/AllTour";
import AllBlogs from "./AdminDashboard/AllBlogs/AllBlogs.jsx";
import MainAdmin from "./AdminDashboard/MainAdmin/MainAdmin";
import "./App.css";
import BlogPage from "./Component/Blogs/BlogPage";
import SingleBlogPage from "./Component/Blogs/SingleBlogPage";
import Contact from "./Component/Contact/Contact";
import HomeIndex from "./Component/Home/HomeIndex";
import Navigation from "./Component/Navigation/Navigation";
import SingleTour from "./Component/Pages/SingleTour/SingleTour";
import AdminPrivate from "./Component/Private/AdminPrivate";
import Private from "./Component/Private/Private";
import Login from "./Component/Shared/Authentication/Login";
import RegisterForm from "./Component/Shared/Authentication/RegisterForm";
import "./Component/Shared/Button.css";
import Footer from "./Component/Shared/Footer";
import { UserContext } from "./UserContext/userContext";

function App() {
  const location = useLocation();
  const showFooter = !location?.pathname.includes("admin");
  const { userData } = useContext(UserContext);
  const data = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  return (
    <div className="mx-auto container overflow-hidden">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomeIndex />} />
        {/* <Route path="/blog" element={<BlogPage />} /> */}
        <Route
          path="/blog"
          element={
            <Private user={userData}>
              <BlogPage />
            </Private>
          }
        />
        <Route path="/blog/:id" element={<SingleBlogPage />} />
        <Route path="/single/:id" element={<SingleTour />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<RegisterForm />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/admin"
          element={
            <AdminPrivate user={data}>
              <MainAdmin />
            </AdminPrivate>
          }
        >
          <Route index element={<AllTour />}></Route>
          <Route path="addTour" element={<AddTour />}></Route>
          <Route path="allBlog" element={<AllBlogs />}></Route>
        </Route>
      </Routes>

      <ToastContainer />
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
