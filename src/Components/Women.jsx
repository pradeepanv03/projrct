import React from 'react'
// import Navbar from './Navbar'
import Womensliders from './Womenslider'
import Footer from './Footer'
import Navvbar from './Navvbar'
export default function Women() {
  return (
    <>
    <Navvbar/>
    <div style={{ height: "80px",
    width: "100%",
    background: "linear-gradient(to right, #f9faff, #eaeff7)"}}></div>
    <Womensliders/>
    <Footer/>
    </>
  )
}
