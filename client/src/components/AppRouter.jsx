import React, { Component, useContext } from 'react';
import { Routes, Navigate, Route, Redirect } from 'react-router-dom'
import { publicRoutes, authRoutes } from '../routes';
import { LOGIN_ROUTE, SHOP_ROUTE, AUTH_ROUTE } from '../utils/consts';
import { Context } from '../index';

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user);
    
    const isAuth = true
    return (
        
        <Routes>
                    {user.isAuth && authRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                    
         
               
                    {publicRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
           
            
        </Routes>
            
    );
};

export default AppRouter;