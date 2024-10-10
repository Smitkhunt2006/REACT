import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import GetAllRooms from './pages/rooms/GetAllRooms';
import DetailRooms from './pages/rooms/DetailRooms';
import AddRooms from './pages/rooms/AddRooms';
import EditRoom from './pages/rooms/EditRoom';
import GetAllStudents from './pages/students/GetAllStudents';
import HotelDetail from './HotelDetail';
import India from './pages/Hotel/India';
import Usa from './pages/Hotel/Usa';
import Dubai from './pages/Hotel/Dubai';
import Russia from './pages/Hotel/Russia';
import Canada from './pages/Hotel/Canada';
import China from './pages/Hotel/China';
import Australia from './pages/Hotel/Australia';
import London from './pages/Hotel/London';
import Paris from './pages/Hotel/Paris';
import Japan from './pages/Hotel/Japan';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="/HotelDetails" element={<HotelDetail/>} />
        <Route path="/India" element={<India/>} />
        <Route path="/USA" element={< Usa/>} />
        <Route path="/Dubai" element={<Dubai/>} />
        <Route path="/Russia" element={<Russia/>} />
        <Route path="/Canada" element={<Canada/>} />
        <Route path="/China" element={<China/>} />
        <Route path="/Australia" element={<Australia/>} />
        <Route path="/London" element={<London/>} />
        <Route path="/Paris" element={<Paris/>} />
        <Route path="/Japan" element={<Japan/>} />
        <Route path="/rooms" element={<GetAllRooms />} />
        <Route path="/CustomerDetails" element={<GetAllStudents />} />
        <Route path="/room/:id" element={<DetailRooms />} />
        <Route path='/room/add' element={<AddRooms />} />
        <Route path='/room/edit/:id' element={<EditRoom />} />
      </Route>
    </Routes>  
  </BrowserRouter>
);
