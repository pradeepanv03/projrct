import React from 'react'
import Footer from './Footer'

import './Homeliving.css'
import Navvbar from './Navvbar'
export default function Homeliving() {
  return (
    <>
    <Navvbar/>

    <section id="banner">
        <div>
          <img src="https://bit.ly/3qOkAXl" alt="" className="forMob" />
          <img src="https://bit.ly/36AvNUN" alt="" className="forWeb forDesk" />
        </div>
      </section>

      <main>
        <div id="content">
          <h1 className="brand_heading" id="content_head">nice to see you, come on in!</h1>
          <div id="category">
            <div><img src="https://bit.ly/3JP9yIJ" alt="category1" /></div>
            <div><img src="https://bit.ly/3NHZxQj" alt="category2" /></div>
            <div><img src="https://bit.ly/3tNDj7i" alt="category3" /></div>
            <div><img src="https://bit.ly/38c0sIk" alt="category4" /></div>
            <div><img src="https://bit.ly/3DAhsUp" alt="category5" /></div>
            <div><img src="https://bit.ly/3NwvMS5" alt="category6" /></div>
          </div>
        </div>


        <aside>
  <div>
    <h4 style={{ fontSize: '14px' }}>Furnishings & Bed Linen</h4>
    <p style={{ fontSize: '12px' }}>Bed Sheets</p>
    <p style={{ fontSize: '12px' }}>Bedding Sets & Bed Covers</p>
    <p style={{ fontSize: '12px' }}>Blankets, Quilts & Dohars</p>
    <p style={{ fontSize: '12px' }}>Pillows & Pillow Covers</p>
    <p style={{ fontSize: '12px' }}>Cushions & Cushion Covers</p>
    <p style={{ fontSize: '12px' }}>Curtains</p>
    <p style={{ fontSize: '12px' }}>Mats & Dhurries</p>
    <p style={{ fontSize: '12px' }}>Carpets</p>
  </div>

  <div>
    <h4 style={{ fontSize: '14px' }}>Bath & Bed Linen</h4>
    <p style={{ fontSize: '12px' }}>Towels & Towel Sets</p>
    <p style={{ fontSize: '12px' }}>Bath Robes</p>
    <p style={{ fontSize: '12px' }}>Bathroom Accessories</p>
    <p style={{ fontSize: '12px' }}>Shower Curtains</p>
    <p style={{ fontSize: '12px' }}>Bath Rugs</p>
  </div>

  <div>
    <h4 style={{ fontSize: '14px' }}>Home Décor</h4>
    <p style={{ fontSize: '12px' }}>Plants & Planters</p>
    <p style={{ fontSize: '12px' }}>Aromas, Candles & Candle Holders</p>
    <p style={{ fontSize: '12px' }}>Clocks</p>
    <p style={{ fontSize: '12px' }}>Mirrors</p>
    <p style={{ fontSize: '12px' }}>Wall Décor</p>
    <p style={{ fontSize: '12px' }}>Wall Shelves</p>
    <p style={{ fontSize: '12px' }}>Fountains</p>
    <p style={{ fontSize: '12px' }}>Showpieces & Vases</p>
  </div>

  <div>
    <h4 style={{ fontSize: '14px' }}>Lamps & Lighting</h4>
    <p style={{ fontSize: '12px' }}>Floor & Wall Lamps</p>
    <p style={{ fontSize: '12px' }}>Table Lamps</p>
  </div>

  <div>
    <h4 style={{ fontSize: '14px' }}>Kitchen & Table</h4>
    <p style={{ fontSize: '12px' }}>Tableware & Serveware</p>
    <p style={{ fontSize: '12px' }}>Bar & Drinkware</p>
    <p style={{ fontSize: '12px' }}>Cookware & Kitchen Tools</p>
    <p style={{ fontSize: '12px' }}>Kitchen Storage</p>
    <p style={{ fontSize: '12px' }}>Table Covers & Furnishings</p>
  </div>

  <div>
    <h4 style={{ fontSize: '14px' }}>Storage & Organisers</h4>
    <p style={{ fontSize: '12px' }}>Organisers</p>
    <p style={{ fontSize: '12px' }}>Hooks & Holders</p>
  </div>
</aside>


      </main>

      {/* Brands & Other Content Sections */}
      <section className="wrapper">
        <div><img src="https://bit.ly/35oLzBq" alt="trends" /></div>
        <div className="container">
          <div><img src="https://bit.ly/3JQGjWh" alt="trend1" /></div>
          <div><img src="https://bit.ly/3iMuwfy" alt="trend2" /></div>
          <div><img src="https://bit.ly/3LsCffk" alt="trend3" /></div>
        </div>
      </section>

      <section className="wrapper">
        <div><img src="https://bit.ly/3IQtgCA" alt="trends" id="featured" /></div>
        <div className="container">
          <div><img src="https://bit.ly/36EypRl" alt="brand1" /></div>
          <div><img src="https://bit.ly/3uFSwGD" alt="brand2" /></div>
          <div><img src="https://bit.ly/3tLl1DM" alt="brand3" /></div>
          <div><img src="https://bit.ly/3LnF0y9" alt="brand4" /></div>
          <div><img src="https://bit.ly/3iMLRoK" alt="brand5" /></div>
        </div>
      </section>

      <Footer/>
    </>
  )
}
