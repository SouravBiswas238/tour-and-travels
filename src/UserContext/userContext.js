import React, { createContext, useEffect, useState } from "react";
import Api from "../utility/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [tours, setTours] = useState([]);

  const email = userData?.email;


  // to get company data data
  useEffect(() => {
    async function fetchData() {
      const response = await Api.get('/tour/all');
      setTours(response?.data)
    }
    fetchData();
  }, [])



  //this state stored user data  //==> Don't move this one !
  const contextData = {
    userData,
    setUserData,
    tours,
    email

  };

  return (
    <UserContext.Provider
      value={contextData} >
      {children}
    </UserContext.Provider>
  );
};
