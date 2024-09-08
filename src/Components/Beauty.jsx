import React from 'react'
// import Navbar from './Navbar'
import { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Footer from './Footer'
import './Beauty.css'
import { Link } from 'react-router-dom';
import Navvbar from './Navvbar';
export default function Beauty() {
  const [cards, setCards] = useState([
    { id: 1, title: 'lake me', content: 'Rs.219', img:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11629094/2024/2/7/c21de620-741a-4790-991d-9b64e7213ce31707303210615-Lakme-Set-of-2-Eyeconic-Kajal-035g-Each---Deep-Black-7601707-1.jpg' },
    { id: 2, title: 'Ayuvya', content: 'Rs.497', img:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30008084/2024/6/20/da2262bd-190c-4abf-85fe-67847540fb331718886163211Ayuvya3in1AntiAcneCleanser-Mask-ScrubForAcne-50g1.jpg' },
    { id: 3, title: 'seven Seas', content: 'Rs.292', img:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30028893/2024/6/24/5033009e-17c7-4a89-ae7b-83fb4eb9c49b1719223789834SevenSeasBBMiracleCompactPowder-196g-Natural031.jpg' },
    { id: 4, title: 'Avimee Herbal', content: 'Rs.310', img:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30100927/2024/7/3/c1637472-1eba-4e7b-b227-663d3ebf79511720000148745AvimeeHerbalPushpPureLavenderWater-110ml1.jpg' },
    { id: 5, title: 'Oziva', content: 'Rs.759', img:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24738702/2023/8/30/e1739cbf-7366-42bb-b327-60acb3074aa31693415816865SkinSupplements1.jpg' },
    { id: 6, title: 'seven Seas bottle', content: 'Rs.236', img:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30082768/2024/7/8/abfd7779-1f83-4b6e-a26b-7e1c97d09cc31720434694378SevenSeasFullCoverageStayMatteFoundationWithVitaminC-40ml-Na1.jpg' },
    { id: 7, title: 'Adbeni', content: 'Rs.247', img:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30076028/2024/6/29/d9fd8db1-15c8-4f49-b81a-a5843d46f2421719649888960AdbeniProfessionalHairBrush1.jpg' },
    { id: 8, title: 'Philips', content: 'Rs.2569', img:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10244851/2024/5/20/77dc7071-09ff-491d-acdd-7b6ad59ad57e1716202428871-Philips-BHH88010-Heated-Hair-Straightener-Brush-with-ThermoP-1.jpg' },

  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
 
  return (
    <>
    <Navvbar searchQuery={searchQuery} handleSearchChange={handleSearchChange}/>
    <Container style={{ marginTop: "80px" }}>
  <Row className="mt-4">
    {filteredCards.map((card) => (
      <Col xs={6} md={3} key={card.id}>
        <Card className="mb-4 card" style={{ textAlign: "center", justifyContent: 'center', border: 'none', alignItems: 'center' }}>
          <Link to='/modern'>
          <Card.Img variant="top" src={card.img} style={{ height: '280px', width: '210px' }} /></Link>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.content}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>

    <Footer/>
    </>
  )
}