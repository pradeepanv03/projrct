import React from 'react'
import Kidsliders from './Kidslider'
import Footer from './Footer'
import Navvbar from './Navvbar'
export default function Kids() {
  return (
    <>
    <Navvbar/>
    <div style={{ height: "80px",
    width: "100%",
    background: "linear-gradient(to right, #f9faff, #eaeff7)"}}></div>
    <Kidsliders/>
    <Footer/>
    </>
  )
}
