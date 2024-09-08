import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

function Cart() {
    return (
        // <Container fluid>
        //     <Row><Image src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/83eb6f2f-aac3-4ea0-a753-bf097cc086dd1718179294010-Shop-By-Category.jpg" fluid />
        //     </Row>
        //     <Row>
        //         <Col>

        //             <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/5614c613-b3c1-4f32-a79e-51cb660084d81718181892443-Shop-By-Category_HP_04.jpg" fluid />
        //         </Col>
        //         <Col>
        //             <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/437660bc-7404-4b9c-aba8-4d7cd6542ede1718181892598-Shop-By-Category_HP_22.jpg" fluid />
        //         </Col>
        //         <Col><Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/fba1c8fa-4980-41d7-8eb3-1a079eed2cca1718181892544-Shop-By-Category_HP_16.jpg" fluid /></Col>

        //         <Col>
        //             <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/142274e6-08c9-4dc7-bf0d-b3254990d1461718181892553-Shop-By-Category_HP_17.jpg" fluid />
        //         </Col>
        //     </Row>
        //     <Row>
        //         <Col><Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/fba1c8fa-4980-41d7-8eb3-1a079eed2cca1718181892544-Shop-By-Category_HP_16.jpg" fluid /></Col>
        //         <Col><Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/93765524-b600-4d7b-b718-90be235685871718181892490-Shop-By-Category_HP_10.jpg" fluid /></Col>
        //         <Col><Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/8e037788-54a8-4b9f-865a-f5ec60f80c191718181892653-Shop-By-Category_HP_28.jpg" fluid /></Col>
        //         <Col><Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/2a8ed5ac-0e3b-4b58-aaf5-3426a8e294201718181892500-Shop-By-Category_HP_11.jpg" fluid /></Col>
        //     </Row>
        //     <Row>
        //     <Image src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/8a0d1dde-1afd-4443-94a9-161d2b2e2d8f1718178516608-App-Install-Banner.jpg" fluid />

        //     </Row>
        // </Container>
        <>
            <Container fluid>
                <Row> <Link to='/modern'>        <Image src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/83eb6f2f-aac3-4ea0-a753-bf097cc086dd1718179294010-Shop-By-Category.jpg" fluid />
                </Link>
                </Row>
                <Row>
                    <Col xs={6} md={3}> <Link to='/modern'><Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/5614c613-b3c1-4f32-a79e-51cb660084d81718181892443-Shop-By-Category_HP_04.jpg" fluid />
                    </Link>
                    </Col>
                    <Col xs={6} md={3}> <Link to='/modern'><Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/437660bc-7404-4b9c-aba8-4d7cd6542ede1718181892598-Shop-By-Category_HP_22.jpg" fluid />
                    </Link>
                    </Col>
                    <Col xs={6} md={3}> <Link to='/modern'><Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/fba1c8fa-4980-41d7-8eb3-1a079eed2cca1718181892544-Shop-By-Category_HP_16.jpg" fluid />
                    </Link>
                    </Col>
                    <Col xs={6} md={3}> <Link to='/modern'><Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/142274e6-08c9-4dc7-bf0d-b3254990d1461718181892553-Shop-By-Category_HP_17.jpg" fluid />
                    </Link>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={3}> <Link to='/modern'><Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/fba1c8fa-4980-41d7-8eb3-1a079eed2cca1718181892544-Shop-By-Category_HP_16.jpg" fluid />
                    </Link>
                    </Col>
                    <Col xs={6} md={3}> <Link to='/modern'><Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/93765524-b600-4d7b-b718-90be235685871718181892490-Shop-By-Category_HP_10.jpg" fluid />
                    </Link>
                    </Col>
                    <Col xs={6} md={3}> <Link to='/modern'><Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/8e037788-54a8-4b9f-865a-f5ec60f80c191718181892653-Shop-By-Category_HP_28.jpg" fluid />
                    </Link>
                    </Col>
                    <Col xs={6} md={3}><Link to='/modern'><Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/2a8ed5ac-0e3b-4b58-aaf5-3426a8e294201718181892500-Shop-By-Category_HP_11.jpg" fluid />
                    </Link>
                    </Col>
                </Row>
                <Row> <Link to='/modern'><Image src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/8a0d1dde-1afd-4443-94a9-161d2b2e2d8f1718178516608-App-Install-Banner.jpg" fluid />
                </Link>
                </Row>
            </Container>
        </>

    );
}

export default Cart;