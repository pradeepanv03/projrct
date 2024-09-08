import React from 'react'
// import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function Banner() {
    return (

        <Container fluid>
            <Row>
                    <Image src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/4/28338488-13a3-45ad-bbf2-80cbe60503241720096259004-FLAT-300-Off-on-1st-Purchase-Strip.jpg" fluid style={{ width: "100%" }} />
                    <Image src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/4/a8e5ca18-ead2-40bb-9f82-c14bbdfc6e831720089009539-DESKTOP-HP-BANNER_HP_1.jpg" style={{ width: "100%" }} />
                    <Image src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/dde45ca3-3735-46e4-847e-815757c0c2d81718179286708-COUPONS-CORNER.jpg" style={{ width: "100%" }} />
            </Row>
            <Row>
                <Image src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/4/e3ef7e96-9531-4500-b04d-7118a1d84e221720096258975-MYNTRA100.jpg" style={{ width: "50%" }} />

                <Image src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/4/55cd31c7-3e6e-4c14-b401-215c0277a8b81720096258950-MYNTRA200.jpg" style={{ width: "50%" }} />
            </Row>
            <Row>

                <Image src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/204642d1-12af-4254-9457-f31230d7538b1718179286687-Crazy-Deals.jpg" style={{ width: "100%" }} />
            </Row>
        </Container>
    )
}
