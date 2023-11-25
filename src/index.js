
import React from 'react';

import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';

import ForgetPass from './pages/Forget_pass';
import ResetPassword from './pages/Reset_pass';  // Giả sử bạn cũng đã tạo một component ForgetPass
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import ForgetPass from './ForgetPass'; // Đây là tên file chứa component ForgetPass
import DashboardLayout from './pages/Trangchu';
import Chats from "./pages/dashboard/Chats.js";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />} /> {/* Trang chủ */}
        <Route path="/chats" element={<Chats />} /> {/* Trang chat */}
        <Route path="/login" element={<Login />} /> {/* Trang đăng nhập */}
        <Route path="/forget-password" element={<ForgetPass />} /> {/* Trang quên mật khẩu */}
        <Route path="/reset-password" element={<ResetPassword />} /> {/* Trang reset mật khẩu */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

