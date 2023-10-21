import React from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {token}=useSelector((state)=>state.auth);
  
    if(token !==null){
        return children
    }
    else{
        return <Navigate to="/login"/>
    }
}

export default PrivateRoute
