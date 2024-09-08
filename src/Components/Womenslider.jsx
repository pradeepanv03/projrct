import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'react-bootstrap/Image';

function Womensliders() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container" >
      <Slider {...settings} >
        <div>
        <Image src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/30/b9aa3c3d-17a5-4d5e-afed-ba679d629a0d1693375596341-DB.png" fluid/>
        </div>
        <div>
        <Image src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/a20271c6-249f-480b-bcc7-1b150516e54e1651599573998-Dressberry_Desk.jpg"  fluid/>
        </div>
        <div>
        <Image src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/3f6d1e2a-5ef6-4921-be5d-443a11b11d801651599573985-Dresses_Desk.jpg"  fluid/>

        </div>
        <div>
        <Image src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/bc89bda3-e7dc-42fc-91f8-e380f36303c11651599573964-Tops---Tees_Desk.jpg" fluid />

        </div>
        <div>
        <Image src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/f1874a9d-c423-44d3-a529-6c63521d6f991650181498608-Sarees_Desk.jpg" fluid />

        </div>
        <div>
        <Image src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/5f930503-ecb2-489a-9ab8-5081e10a15681649581894257-Staycation-Essentials_DEsk.jpg"  fluid/>
        </div>
       
      </Slider>
    </div>
  );
}

export default Womensliders;
