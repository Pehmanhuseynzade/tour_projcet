import React from 'react'
import Navbar from '../../components/admin/Navbar'
import { Outlet } from 'react-router-dom'

function Adminroot() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Adminroot