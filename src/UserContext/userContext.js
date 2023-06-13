import React, { createContext, useEffect, useState } from "react";
import Api from "../utility/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [deleteData, setDeleteData] = useState({});
  const [deleteBlog, setDeleteBlog] = useState({});
  const [tours, setTours] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const email = userData?.email;


  // to get all tour data data
  useEffect(() => {
    async function fetchData() {
      const response = await Api.get('/tour/all');
      setTours(response?.data)
    }
    fetchData();
  }, [deleteData])

  // to get all blogs data 
  useEffect(() => {
    async function fetchData() {
      const response = await Api.get('/blog/all');
      setBlogs(response?.data)
    }
    fetchData();
  }, [deleteBlog])

  // set user local storage
  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

  //this state stored user data  //==> Don't move this one !
  const contextData = {
    userData,
    setUserData,
    tours,
    blogs,
    setDeleteBlog,
    setDeleteData,
    email

  };

  return (
    <UserContext.Provider
      value={contextData} >
      {children}
    </UserContext.Provider>
  );
};
