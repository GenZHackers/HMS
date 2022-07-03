import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
import NotFound from "../pages/NotFound"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
