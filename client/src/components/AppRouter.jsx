import React, { Component, useContext } from 'react';
import { Routes, Navigate, Route, Redirect } from 'react-router-dom'
import { publicRoutes, authRoutes } from '../routes';
import { LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Context } from '../index';

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user);
    
    const isAuth = true
    return (
        
        <Routes>
          
            {user.isAuth ? (
                <>
                    {authRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                    <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
         
                </>
            ) : (
                <>
                    {publicRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                     <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
                </>
            )}
        </Routes>
            
    );
};

export default AppRouter;