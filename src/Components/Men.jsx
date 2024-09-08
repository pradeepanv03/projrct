import React from 'react'
import Mensliders from './Menslider'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Footer from './Footer';
import Navvbar from './Navvbar';
import { Link } from 'react-router-dom';
export default function Men() {
  return (
    <>
      <Navvbar />
      <div style={{
        height: "80px",
        width: "100%",
        background: "linear-gradient(to right, #f9faff, #eaeff7)"
      }}></div>
      <Mensliders />
      <Container fluid className='mt-5'>
        <h1>BIGGEST DEALS ON TOP BRANDS</h1>
        <Row>
          <Col xs={6} md={3}><Link to='/modern'><Image src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/1dce9c3e-77fa-48f1-85a3-d3c136c1d73e1598892377652-USPA.jpg" fluid />
          </Link>
          </Col>
          <Col xs={6} md={3}>
            <Link to='/modern'>            <Image src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/3fa337a0-c792-4038-8d12-50d463c189a11598892377363-Levis.jpg" fluid />
            </Link>
          </Col>
          <Col xs={6} md={3}>        <Link to='/modern'>            <Image src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg" fluid />
          </Link>

          </Col>
          <Col xs={6} md={3}>        <Link to='/modern'>            <Image src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8d5afb84-a464-40af-9971-2e9f0827e9b71598892377591-UCB.jpg" fluid />
          </Link>

          </Col>
        </Row>
        <Row>
          <Col xs={6} md={3}>        <Link to='/modern'>            <Image src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/a7d3676a-9694-4a84-835e-0408fdad884b1598892377407-Nike.jpg" fluid />
          </Link>

          </Col>
          <Col xs={6} md={3}>        <Link to='/modern'>            <Image src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/cec595c6-c7ec-4259-af8b-997a33a09ce71598892377444-Puma.jpg" fluid />
          </Link>

          </Col>
          <Col xs={6} md={3}>        <Link to='/modern'>            <Image src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/0206da63-a7cc-4f83-8527-90d7dc74706b1598892377489-Skechers.jpg" fluid />
          </Link>

          </Col>
          <Col xs={6} md={3}>        <Link to='/modern'>            <Image src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/d977e7ac-67dd-4fa6-b922-fe0057385dfa1598892377205-Crocs.jpg" fluid />
          </Link>

          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}
