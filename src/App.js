import React from 'react';
import './App.css';
import Navigation from './Component/Navigation/Navigation';
import './Component/Shared/Button.css'
import HomeIndex from './Component/Home/HomeIndex';
import Footer from './Component/Shared/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import SingleTour from './Component/Pages/SingleTour/SingleTour';
import MainAdmin from './AdminDashboard/MainAdmin/MainAdmin';
import AiSalesBot from './AdminDashboard/Products/AiSalesBot';
import DashboardHome from './AdminDashboard/DashboardHome/DashboardHome';
import BlogPage from './Component/Blogs/BlogPage';
import SingleBlogPage from './Component/Blogs/SingleBlogPage';
import Login from './Component/Shared/Authentication/Login';
import RegisterForm from './Component/Shared/Authentication/RegisterForm';
import AddTour from './AdminDashboard/AddTour/AddTour';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const location = useLocation();
  const showFooter = !location?.pathname.includes("admin");

  return (
    <div className='mx-auto container overflow-hidden'>

      <Navigation />

      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<SingleBlogPage />} />
        <Route path="/single" element={<SingleTour />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<RegisterForm />} />


        <Route path="/admin" element={<MainAdmin />}>
          <Route index element={<DashboardHome />}></Route>
          <Route path="aiSalesBot" element={<AiSalesBot />}></Route>
          <Route path="addTour" element={<AddTour />}></Route>
        </Route>
      </Routes>


      <ToastContainer />
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
