
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card, Modal, Container, Row, Col } from 'react-bootstrap';
// import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRupeeSign, FaRegHeart, FaShoppingBag, FaRegStar } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { CiDeliveryTruck } from 'react-icons/ci';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { GoDotFill } from 'react-icons/go';
import { BiDetail } from 'react-icons/bi';
import Navvbar from './Navvbar';

const ItemCard = ({ item, onAddToCart }) => (
  <Card style={{ width: '18rem', margin: '10px' }}>
    <Card.Img variant="top" src={item.image} />
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>{item.description}</Card.Text>
      <Card.Text><strong>Price:</strong> ${item.price}</Card.Text>
      <Button variant="primary" onClick={onAddToCart}>Add to Cart</Button>
    </Card.Body>
  </Card>
);

const CartModal = ({ show, onHide, cartItems }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Cart Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <Card style={{ width: '100%', margin: '10px' }}>
                    <div className="d-flex">
                      <Card.Img
                        variant="top"
                        src={item.image}
                        style={{ width: '200px', height: 'auto', objectFit: 'cover' }}
                      />
                      <Card.Body className="d-flex flex-column justify-content-between">
                        <div>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>{item.description}</Card.Text>
                          <Card.Text><strong>Price:</strong> Rs.{item.price}</Card.Text>
                        </div>
                      </Card.Body>
                    </div>
                  </Card>
                </li>
              ))}
            </ul>
            <h5>Total Amount: Rs.{totalAmount}</h5>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

const App = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);

  const items = [
    {
      title: "T-shirt",
      description: "Men Black & White Printed Round Neck T-shirt",
      image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29736046/2024/5/24/3ceec62e-8730-4933-bfd6-b1c63a676c5a1716534398193MenNavyLogoFleeceHoodie1.jpg",
      price: 429.99
    }
    // Add more items as needed
  ];

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Select the first item or any specific item from the items array
  const selectedItem = items[0]; // Change this index if you want to display a different item

  return (
    <div>
      <Navvbar cartItems={cartItems} setShowModal={setShowModal} />
      <div className="product-page" style={{ marginTop: '80px' }}>
    
          <div className="images-section" style={{marginTop:'40px'}}>
        {/* Replace with your images */}
        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29736046/2024/5/24/3ceec62e-8730-4933-bfd6-b1c63a676c5a1716534398193MenNavyLogoFleeceHoodie1.jpg" alt="Product Image 1"  />
        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29736046/2024/5/24/4ab76b78-ab13-4e1a-803e-558fb3161fe21716534398175MenNavyLogoFleeceHoodie2.jpg" alt="Product Image 2" />
        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29736046/2024/5/24/43a5ed1d-1960-4d6d-8341-c141e13c99051716534398211MenNavyLogoFleeceHoodie3.jpg" alt="Product Image 3" />
        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29736046/2024/5/24/956bdaed-4778-43fc-b122-a8b37ba2b37b1716534398158MenNavyLogoFleeceHoodie4.jpg" alt="Product Image 4" />
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
      <CartModal show={showModal} onHide={() => setShowModal(false)} cartItems={cartItems} />
    </div>
  );
};

export default App;
