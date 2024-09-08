// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import { Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaRupeeSign, FaRegHeart, FaShoppingBag } from 'react-icons/fa';
// import { IoIosArrowForward } from 'react-icons/io';
// import { CiDeliveryTruck } from 'react-icons/ci';
// import { MdOutlineLocalOffer } from 'react-icons/md';
// import { GoDotFill } from 'react-icons/go';
// import { BiDetail } from 'react-icons/bi';
// import Navbar from './Components/Navbar';
// import './ProductPage.css';
// import Cartshow from './Cartshow';

// export default function Modern() {
//   const [cartItems, setCartItems] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   const items = [
//     {
//       title: "T-shirt",
//       description: "Men Black & White Printed Round Neck T-shirt",
//       image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29736046/2024/5/24/3ceec62e-8730-4933-bfd6-b1c63a676c5a1716534398193MenNavyLogoFleeceHoodie1.jpg",
//       price: 429.99
//     }
//     // Add more items as needed
//   ];

//   const handleAddToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };


//   const handleRemoveItem = (index) => {
//     const newCartItems = cartItems.filter((_, i) => i !== index);
//     setCartItems(newCartItems);
//   };

//   const selectedItem = items[0]; // Select the first item or any specific item from the items array

//   return (
//     <div>
//       <Navbar cartItems={cartItems} setShowModal={setShowModal} />
//       <div className="product-page" style={{ marginTop: '80px' }}>
//         <div className="images-section" style={{ marginTop: '40px' }}>
//           <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29736046/2024/5/24/3ceec62e-8730-4933-bfd6-b1c63a676c5a1716534398193MenNavyLogoFleeceHoodie1.jpg" alt="" />
//           <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29736046/2024/5/24/4ab76b78-ab13-4e1a-803e-558fb3161fe21716534398175MenNavyLogoFleeceHoodie2.jpg" alt="" />
//           <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29736046/2024/5/24/43a5ed1d-1960-4d6d-8341-c141e13c99051716534398211MenNavyLogoFleeceHoodie3.jpg" alt="" />
//           <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29736046/2024/5/24/956bdaed-4778-43fc-b122-a8b37ba2b37b1716534398158MenNavyLogoFleeceHoodie4.jpg" alt="" />
//         </div>
//         <aside className="aside-section">
//           <Container style={{ marginTop: '0', padding: '0' }}>
//             <Container fluid style={{ marginTop: '0' }}>
//               <Row>
//                 <Col style={{ marginTop: '0' }}>
//                   <h2 className="text-primary"><b>Moda Rapido</b></h2>
//                   <p>Men Black & White Printed Round Neck T-shirt</p>
//                   <hr />
//                   <p>MRP <span><FaRupeeSign />{selectedItem.price}</span></p>
//                   <h6 className="text-success"> inclusive of all taxes </h6>
//                   <br />
//                   <p> MORE COLOR </p>
//                 </Col>
//               </Row>
//               <Row className="mt-1">
//                 <Col xs={6}>
//                   <h5 style={{ color: "purple", fontStyle: "italic" }}>
//                     SELECT SIZE <IoIosArrowForward />
//                   </h5>
//                   <Button style={{ height: "50px", width: '50px', borderRadius: '50%' }}>S</Button>{' '}
//                   <Button style={{ height: "50px", width: '50px', borderRadius: '50%' }}>M</Button>{' '}
//                   <Button style={{ height: "50px", width: '50px', borderRadius: '50%' }}>L</Button>{' '}
//                   <Button style={{ height: "50px", width: '50px', borderRadius: '50%' }}>XL</Button>{' '}
//                   <br /><br />
//                   <div style={{ display: 'inline-flex' }}>
//                     <Button
//                       style={{ width: "200px", padding: '0', height: "60px", backgroundColor: "rgb(255, 62, 108)", border: "none", marginRight: '10px' }}
//                       onClick={() => selectedItem && handleAddToCart(selectedItem)}
//                     >
//                       <FaShoppingBag style={{ marginRight: "8px" }} /> ADD TO BAG
//                     </Button>
//                     <Button style={{ width: "200px", padding: "0", height: "60px", color: "black", border: "1px solid black" }} variant="light">
//                       <FaRegHeart style={{ marginRight: "8px", marginBottom: "4px" }} /> WISHLIST
//                     </Button>
//                   </div>
//                   <br /><br />
//                   <hr />
//                   <h3> Delivery Option <CiDeliveryTruck /> </h3>
//                   <br />
//                   <input type="pincode" placeholder="Enter Your PinCode" style={{ width: "35%", padding: "10px", border: "2px solid grey" }} />
//                   <h6 className="mt-1"> Please enter PIN code to check delivery time & Pay on Delivery Availability </h6>
//                   <hr />
//                   <h3> BEST OFFERS <MdOutlineLocalOffer /> </h3>
//                   <h5> Best Price <IoIosArrowForward /> </h5>
//                   <ul className="p-2" style={{ listStyle: "none" }}>
//                     <li><GoDotFill /> Applicable on: Orders above Rs. 799 (only on first purchase)</li>
//                     <li><GoDotFill /> Coupon code: <b>MYNTRA10</b></li>
//                     <li><GoDotFill /> Coupon Discount: 10% off upto Rs. 600 (check cart for final savings)</li>
//                   </ul>
//                   <h6 className="text-success"> View Eligible Products </h6>
//                   <hr />
//                   <h3> PRODUCT DETAILS <BiDetail /> </h3>
//                   <ul style={{ listStyle: "none" }}>
//                     <li> Fabric: Cotton</li>
//                     <li> Fit: Regular Fit</li>
//                     <li> Length: Regular</li>
//                     <li> Main Trend: New Basics</li>
//                   </ul>
//                 </Col>
//               </Row>
//             </Container>
//           </Container>
//         </aside>
//       </div>
//       <Cartshow show={showModal} onHide={() => setShowModal(false)} cartItems={cartItems} handleRemoveItem={handleRemoveItem} />
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRupeeSign, FaRegHeart, FaShoppingBag } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { CiDeliveryTruck } from 'react-icons/ci';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { GoDotFill } from 'react-icons/go';
import { BiDetail } from 'react-icons/bi';
import Navbar from './Components/Navbar';
import './ProductPage.css';
import Cartshow from './Cartshow';

export default function Modern() {
  const [cartItems, setCartItems] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const items = [
    {
      title: "T-shirt",
      description: "Men Black & White Printed Round Neck T-shirt",
      image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29736046/2024/5/24/3ceec62e-8730-4933-bfd6-b1c63a676c5a1716534398193MenNavyLogoFleeceHoodie1.jpg",
      price: 429.99
    }
    // Add more items as needed
  ];

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  // Save cart items to localStorage whenever cartItems state changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const selectedItem = items[0]; // Select the first item or any specific item from the items array

  return (
    <div>
      <Navbar cartItems={cartItems} setShowModal={setShowModal} />
      <div className="product-page" style={{ marginTop: '80px' }}>
        <div className="images-section" style={{ marginTop: '40px' }}>
          <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29736046/2024/5/24/3ceec62e-8730-4933-bfd6-b1c63a676c5a1716534398193MenNavyLogoFleeceHoodie1.jpg" alt="" />
          <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29736046/2024/5/24/4ab76b78-ab13-4e1a-803e-558fb3161fe21716534398175MenNavyLogoFleeceHoodie2.jpg" alt="" />
          <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29736046/2024/5/24/43a5ed1d-1960-4d6d-8341-c141e13c99051716534398211MenNavyLogoFleeceHoodie3.jpg" alt="" />
          <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29736046/2024/5/24/956bdaed-4778-43fc-b122-a8b37ba2b37b1716534398158MenNavyLogoFleeceHoodie4.jpg" alt="" />
        </div>
        <aside className="aside-section">
          <Container style={{ marginTop: '0', padding: '0' }}>
            <Container fluid style={{ marginTop: '0' }}>
              <Row>
                <Col style={{ marginTop: '0' }}>
                  <h2 className="text-primary"><b>Moda Rapido</b></h2>
                  <p>Men Black & White Printed Round Neck T-shirt</p>
                  <hr />
                  <p>MRP <span><FaRupeeSign />{selectedItem.price}</span></p>
                  <h6 className="text-success"> inclusive of all taxes </h6>
                  <br />
                  <p> MORE COLOR </p>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col xs={6}>
                  <h5 style={{ color: "purple", fontStyle: "italic" }}>
                    SELECT SIZE <IoIosArrowForward />
                  </h5>
                  <Button style={{ height: "50px", width: '50px', borderRadius: '50%' }}>S</Button>{' '}
                  <Button style={{ height: "50px", width: '50px', borderRadius: '50%' }}>M</Button>{' '}
                  <Button style={{ height: "50px", width: '50px', borderRadius: '50%' }}>L</Button>{' '}
                  <Button style={{ height: "50px", width: '50px', borderRadius: '50%' }}>XL</Button>{' '}
                  <br /><br />
                  <div style={{ display: 'inline-flex' }}>
                    <Button
                      style={{ width: "200px", padding: '0', height: "60px", backgroundColor: "rgb(255, 62, 108)", border: "none", marginRight: '10px' }}
                      onClick={() => selectedItem && handleAddToCart(selectedItem)}
                    >
                      <FaShoppingBag style={{ marginRight: "8px" }} /> ADD TO BAG
                    </Button>
                    <Button style={{ width: "200px", padding: "0", height: "60px", color: "black", border: "1px solid black" }} variant="light">
                      <FaRegHeart style={{ marginRight: "8px", marginBottom: "4px" }} /> WISHLIST
                    </Button>
                  </div>
                  <br /><br />
                  <hr />
                  <h3> Delivery Option <CiDeliveryTruck /> </h3>
                  <br />
                  <input type="pincode" placeholder="Enter Your PinCode" style={{ width: "35%", padding: "10px", border: "2px solid grey" }} />
                  <h6 className="mt-1"> Please enter PIN code to check delivery time & Pay on Delivery Availability </h6>
                  <hr />
                  <h3> BEST OFFERS <MdOutlineLocalOffer /> </h3>
                  <h5> Best Price <IoIosArrowForward /> </h5>
                  <ul className="p-2" style={{ listStyle: "none" }}>
                    <li><GoDotFill /> Applicable on: Orders above Rs. 799 (only on first purchase)</li>
                    <li><GoDotFill /> Coupon code: <b>MYNTRA10</b></li>
                    <li><GoDotFill /> Coupon Discount: 10% off upto Rs. 600 (check cart for final savings)</li>
                  </ul>
                  <h6 className="text-success"> View Eligible Products </h6>
                  <hr />
                  <h3> PRODUCT DETAILS <BiDetail /> </h3>
                  <ul style={{ listStyle: "none" }}>
                    <li> Fabric: Cotton</li>
                    <li> Fit: Regular Fit</li>
                    <li> Length: Regular</li>
                    <li> Main Trend: New Basics</li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </Container>
        </aside>
      </div>
      <Cartshow show={showModal} onHide={() => setShowModal(false)} cartItems={cartItems} handleRemoveItem={handleRemoveItem} />
    </div>
  );
}