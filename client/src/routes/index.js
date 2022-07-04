import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
import NotFound from "../pages/NotFound"
import NavBar from "../Components/Navbar"
import Appointment from "../pages/Appointment"
import Notification from "../pages/Notification"
import Admin from "../Components/Admin/Admin"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
        
      </Routes>
      <NavBar />
      {/* <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes> */}
      
    </BrowserRouter>
  )
}

export default AppRoutes
