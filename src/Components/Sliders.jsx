import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'react-bootstrap/Image';

function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container" style={{width:"100%"}}>
      <Slider {...settings}>
        <div>
        <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/8b56f7b3-e278-4308-8a72-e714d33f38671717865842367-Gant-_mango_man_-_more.png" fluid />
        </div>
        <div>
        <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/0aa6a8f5-8bb6-428d-bad4-ba621e20de8e1717865842867-Sassafras-Tokyo_Talkies.png" fluid />
        </div>
        <div>
        <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/e872454b-e320-4fa0-8f52-f37b60aa789d1717865842750-Tommy_Hilfiger-_Clarks_-_Upto_50_off.png" fluid />

        </div>
        <div>
        <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/2660692a-a055-4d17-b885-ea8307dfc66d1717865842786-Vero_Moda-ONLYMin_50_Off.png" fluid />

        </div>
        <div>
        <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/d72b6f7c-0aa7-487c-bdaa-97261810f6f61717865842731-Libas_Varanga.png" fluid />

        </div>
        <div>
        <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/96975b25-16c0-48e2-b5cd-fa9a1754cb971717865841970-Wrogn-_nautica.png" fluid />
        </div>
        <div>
        <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/274fcecc-5ad3-42c3-a86a-25d9fe884dca1717865841506-lee_-_wrangler.png" fluid />
        </div>  <div>
        <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/11/80750512-3bdd-448a-b274-72b5b519ae311718087001418-image_png322758596.png" fluid />
        </div>
          <div>
        <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/8b56f7b3-e278-4308-8a72-e714d33f38671717865842367-Gant-_mango_man_-_more.png" fluid />
        </div>
        <div>
        <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/11/f3b69a2b-bda7-4f4a-bdcd-2ef1e3e6cc7d1718087126250-image_png_1684533839.png" fluid />
        </div>    <div>
        <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/6da681dc-287a-4939-9a68-3dfb2d8ea6fe1717865842332-chandbaali.png" fluid />
        </div>    <div>
        <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/ce3d0ecf-669d-41ae-a832-6293ab340d661717865842004-SanskrutiHomes-Bannos_swagger.png" fluid />
        </div>    <div>
        <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/6e1dc146-7445-4d05-b800-be64d4fbab641717865843017-Allen_solly_-_VH_Min_40.png" fluid />
        </div>    <div>
        <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/11/56a13db7-2dca-49ec-996e-92dd4aa6f39a1718087164209-image_png946364045.png" fluid />
        </div>
      </Slider>
    </div>
  );
}

export default Sliders;
