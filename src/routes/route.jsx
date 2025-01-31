import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../components/Home';
import LoginPage from '../components/LoginPage';
import SignUpPage from '../components/SignUpPage';
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';

const route = () => {
  const [users, setUsers] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handlerLogout = () =>{
    setIsAuthenticated(false); 
  }

  return (
    <>
      <BrowserRouter>
      <Navbar isAuthenticated ={isAuthenticated} handlerLogout = {handlerLogout} />
        <Routes>
          <Route path='/' element = {<Home/>} ></Route>
          <Route path='/login' element = {<LoginPage users = {users} setIsAuthenticated = {setIsAuthenticated} />} ></Route>
          <Route path='/signup' element = {<SignUpPage setUsers = {setUsers} setIsAuthenticated = {setIsAuthenticated}/>} ></Route>
          <Route path='/dashboard' element = {isAuthenticated ? <Dashboard users = {users}/> :<Navigate to="/"/> } ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default route;