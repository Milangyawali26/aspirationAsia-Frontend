import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../modules/dashboard/view/DashboardPage";
import ProtectedRoute from "./ProtectedRoute";
import Country from "../pages/Country";
import Hotel from "../pages/Hotel";
import VehicleCategory from "../pages/VehicleCategory";
import City from "../pages/City";
import HotelCategory from "../pages/HotelCategory";
import HotelForm from "../modules/hotel_admin/components/HotelForm";
import AllHotels from "../modules/hotel_admin/components/AllHotels";
import PageNotFound from "../pages/PageNotFound";
import RolePermissionManagament from "../pages/role_permission_management_admin";
import AllUsers from "../modules/role_permission_management_admin/components/AllUsers";

const router = createBrowserRouter([
  {
    path:'*',
    element:<PageNotFound />
  },
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />
  },
  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/dashboard",
    element: (
      //<Dashboard />
      <ProtectedRoute >
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path:'rolesAndPermission',
        element:<RolePermissionManagament />,
        children:[
          {
            path:'',
            element:  
            <AllUsers />
        
        }
      ]
      },

      {
        path: "hotel-category",
        element: <HotelCategory />
      },
      {
        path: "hotel",
        element: <Hotel />,
        children:[
          {
            path:'form',
            element:<HotelForm />
          },
          {
            path:'allhotel',
            element:<AllHotels />
          }
        ]
       
      },
      {
        path: "vehicle-category",
        element: <VehicleCategory />
      },
      {
        path: "country",
        element: <Country />
      },
      {
        path: "city",
        element: <City />
      },
   
    ]
  }
]);

export default router;

