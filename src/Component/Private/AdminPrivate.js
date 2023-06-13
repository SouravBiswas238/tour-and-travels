import React from 'react'
import { Navigate } from 'react-router-dom'
const AdminPrivate=({ user, children })=> { 
    
  if (user?.role!=="admin") {
    return <Navigate to="/login" replace/>
  }
  else{

      return children
  }
}
export default AdminPrivate