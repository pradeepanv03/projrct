import './App.css';
// import Banner from './Components/Banner';
// import Cart from './Components/Cart';
// import Footer from './Components/Footer';
// import Sliders from './Components/Sliders';
// // // import { Home } from './Components/Home';
// import Navbar from './Components/Navbar';
// import Time from './Components/Time';
// import Men from './Components/Men'
import {Home} from './Components/Home';
// import {Products} from './Components/Product'
// import { Route, Routes } from 'react-router-dom';
// import { ProductDetails } from './Components/ProductDetails';
// import { Cart } from './Components/Cart';
// import { Login } from './Components/login';
// import Done  from './Components/Done';


// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
// import Home from "./Components/Hom";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";
import Men from "./Components/Men";
import Women from './Components/Women';
import Kids from './Components/Kids';
import Beauty from './Components/Beauty';
import Studio from './Components/Studio';
import Homeliving from './Components/Homeliving';
import Modern from './Modern';

// import Studio  from '/Components/Studio';

  // const location = useNavigate();

      {/* <Navbar />
     <Time/>
       <Banner/>
      <Sliders/>
      <Cart/>

      <Footer/> */}
      function App() {
      return (
        <>
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}/>        
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
          <Route path="homeliving" element={<Homeliving />} />
          <Route path="beauty" element={<Beauty />} />
          <Route path="studio" element={<Studio />} />
          <Route path="modern" element={<Modern />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;


