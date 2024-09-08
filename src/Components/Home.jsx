
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css"
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import Sliders from './Sliders';
import Time from './Time';
import Navvbar from "./Navvbar";



export const Home = () => {

    return (
     <> 
    <Navvbar />
     <Time/>
       <Banner/>
      <Sliders/>
      <Cart/>
      <Footer/>
   </>
    )
}