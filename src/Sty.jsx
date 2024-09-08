import React , {useState , useEffect} from "react";
import { Container, Row, Col, Carousel} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
// import './shop.css'; 

// import logo from './images/logo.jpg'
import logo from './Assets/image1.png'
// import deal from './images/deal.png';
// import coupens from './images/coupens.png';
// import slide1 from './images/slide1.png';
// import slide2 from './images/slide2.png';
// import slide3 from './images/slide3.png';
// import slide4 from './images/slide4.png';

// import brands from './images/brands.png';
// import western from './images/western.png';
// import trending from './images/trending.png';
// import indian from './images/indian.png';
// import category from './images/category.png';
// import footwear from './images/footwear.png';
// import sports from './images/sports.png';
// import original from './images/orginal.png';
// import app from './images/app.png';
// import style1 from './images/style1.png';
// import style2 from './images/style2.png';
// import studio from './images/studio.png';

// import shirt from './images/shirt.jpg';
// import shoes from './images/shoes.jpeg';
// import wallet from './images/wallet.jpg';
// import skincare from './images/skincare.jpg';
// import watch from './images/watch.jpg';
// import glass from './images/glass.jpg';
// import pant from './images/pant.jpeg';
// import tshirt from './images/tshirt.jpg';

// import saree from './images/saree.jpg';
// import jeans from './images/jeans.jpeg';
// import coats from './images/coats.jpg';
// import jewellery from './images/jewellery.jpg';
// import bags from './images/bags.jpg';
// import kurti from './images/kurti.jpg';
// import makeup from './images/makeup.jpg';
// import slipper from './images/slipper.jpg';

// import toys from './images/toys.jpg';
// import babycare from './images/babycare.jpg';
// import books from './images/books.jpg';
// import stationary from './images/stationary.jpg';
// import ethnicwear from './images/ethnicwear.jpg';
// import chocolate from './images/chocolate.jpg';
// import cycle from './images/cycle.jpg';
// import booties from './images/booties.jpg';

// import eyeliner from './images/eyeliner.jpg';
// import lipstick from './images/lipstick.jpg';
// import bangle from './images/bangle.jpg';
// import earrings from './images/earring.jpeg';
// import foundation from './images/foundation.jpg';
// import powder from './images/powder.jpg';
// import nail from './images/nail.jpeg';
// import hairoil from './images/hairoil.jpeg';



export default function Sty()
 {

    const [searchTerm, setSearchTerm] = useState(""); // State to store search term
    

    const handleImageClick = (imageId, categoryImages) => {
      const selectedImage = categoryImages.find(img => img.id === imageId);
      if (selectedImage) {
          window.open(selectedImage.link, '_blank');
      }
  };


  const [mensImages] = useState([
    {id: 1, title: "Shoes", image: logo , link:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fsports-shoes-of-boy-girl-casual&psig=AOvVaw3pnp81zaaK9lljtOrWh7pG&ust=1721112563776000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjTtpCJuqiHAxWRTWwGHTrWAGsQjRx6BAgAEBU' },
    {id: 2, title: "Shirts", image: logo , link:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fshirts%2Froadster%2Fthe-roadster-lifestyle-co-men-pure-cotton-checked-casual-shirt%2F21990854%2Fbuy&psig=AOvVaw3n7-L5IFoJrCFEqSoDRkKr&ust=1721134023710000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiO7IKCiqmHAxXNamwGHR72CtMQjRx6BAgAEBU" },
    {id: 3, title: "Wallet", image: logo , link:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fmen-wallets&psig=AOvVaw3MO3uyOsMOAs525OmSIpPH&ust=1721134166805000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjO06DGiqmHAxWvbmwGHUOdBfgQjRx6BAgAEBU' },
    {id: 4, title: "SkinCare", image: logo ,link:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fskin-care-gift-set%2Fmcaffeine%2Fmcaffeine-men-start-easy-skincare-gift-kit-with-premium-coffee-range%2F21711184%2Fbuy&psig=AOvVaw2OhqubsnASiPtMnsxnOswl&ust=1721134231797000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjPu5_liqmHAxVIamwGHchIBTwQjRx6BAgAEBU' },
    {id: 5, title: "Glass", image: logo ,link:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fmen-sunglasses&psig=AOvVaw3ZlAW_xQktHT84ugj7W8RW&ust=1721134289671000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiX5uuAi6mHAxUyZmwGHW5hCGwQjRx6BAgAEBU' },
    {id: 6, title: "Watch", image: logo ,link:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fmen-watches&psig=AOvVaw3wTFrjk_U1nJs_f-7HRmQp&ust=1721134340084000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwi95fCYi6mHAxXDbmwGHculDtoQjRx6BAgAEBU' },
    {id: 7, title: "Pant", image: logo ,link:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Ftrousers%2Ftheindiangarageco%2Fthe-indian-garage-co-men-beige-slim-fit-regular-trousers%2F14161872%2Fbuy&psig=AOvVaw0W_PHzlP2gSfN8oYzI5S5S&ust=1721134392512000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjBz_Cxi6mHAxVnSWwGHYDlDXsQjRx6BAgAEBU'},
    {id: 8, title: "Tshirt", image: logo ,link:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Ftshirts%2Fmoda%2Brapido%2Fmoda-rapido-men-black--white-printed-round-neck-t-shirt%2F2378361%2Fbuy&psig=AOvVaw2qiZm8mLGF47ECMa4BWOf4&ust=1721134433810000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjtrcnFi6mHAxUObmwGHeXXDVkQjRx6BAgAEBU'},
  ]);



  const [womensImages] = useState([
    { id: 1, image: logo, title: 'Saree', link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fsarees%2Fmitera%2Fmitera-pink--gold-toned-floral-zari-pure-chiffon-saree%2F19442274%2Fbuy&psig=AOvVaw3jMEMjemhcOT56oZh_vWHf&ust=1721134560713000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjc8oqCjKmHAxUsbmwGHSHxBYMQjRx6BAgAEBU' },
    { id: 2, image: logo, title: 'Jeans', link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fjeans%2Fcalvinkleinjeans%2Fcalvin-klein-jeans-women-straight-fit-high-rise-light-fade-jeans%2F23688060%2Fbuy&psig=AOvVaw3z2r6FuX5TXriZIG2g9TnY&ust=1721134619874000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjz6aWejKmHAxUTb2wGHdbYAXEQjRx6BAgAEBU' },
    { id: 3, image: logo, title: 'Jewellery', link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fjewellery-set%2Fluckyjewellery%2Flucky-jewellery-women-kundan-jewellery-set%2F20193594%2Fbuy&psig=AOvVaw0EsYWhB8F0VimxGpUcwpR3&ust=1721134658110000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwijwMOwjKmHAxWyZmwGHXLgCNsQjRx6BAgAEBU' },
    { id: 4, image: logo, title: 'Coats', link: 'https://www.google.com/imgres?q=coats%20womens%20for%20mythra%20online%20shopping&imgurl=https%3A%2F%2Fassets.myntassets.com%2Fdpr_1.5%2Cq_60%2Cw_400%2Cc_limit%2Cfl_progressive%2Fassets%2Fimages%2F23055312%2F2023%2F8%2F23%2Fd6f08eed-f8cf-434a-ad2f-26375535dd811692768333909-DressBerry-Women-Coats-9591692768333449-1.jpg&imgrefurl=https%3A%2F%2Fwww.myntra.com%2Fwomen-coat-coats&docid=GhcBj9hpv0x9vM&tbnid=P0gOR-gIGiTCIM&vet=12ahUKEwih9tKhzKiHAxUY-DgGHR1OBn0QM3oECDkQAA..i&w=600&h=800&hcb=2&ved=2ahUKEwih9tKhzKiHAxUY-DgGHR1OBn0QM3oECDkQAA' },
    { id: 5, image: logo, title: 'Slipper', link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2FFlip-Flops%2FCASSIEY%2FCASSIEY-Women-Rubber-Room-Slippers%2F21169020%2Fbuy&psig=AOvVaw1hk2csW1R8sq4rslNPJi9T&ust=1721134699659000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiFvavEjKmHAxUER2wGHb9ODNAQjRx6BAgAEBU' },
    { id: 6, image: logo, title: 'Bags', link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fhandbags%2Flafille%2Flafille-beige-solid-shoulder-bag%2F11571310%2Fbuy&psig=AOvVaw3KaEAkiBs4S8wFRPRSOtGq&ust=1721134738075000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiin9TWjKmHAxUhTGwGHdU5AWsQjRx6BAgAEBU' },
    { id: 7, image: logo, title: 'Kurti', link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fv-neck-kurtis-and-kurtas-for-women&psig=AOvVaw0PBf_wPMFNEWOWp1fpREg1&ust=1721134789076000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwj1i_3ujKmHAxVBZmwGHchwCXYQjRx6BAgAEBU' },
    { id: 8, image: logo, title: 'Makeup', link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fmakeup-combo%2Fnoy%2Fnoy-set-of-15-makeup-gift-set%2F24576676%2Fbuy&psig=AOvVaw2J5f0HiCa0SzXGtSk44T5Z&ust=1721134842681000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjs7MSIjamHAxW6UGwGHcu1D40QjRx6BAgAEBU' },
]);


const [kidsImages] = useState([
  { id: 1, image: logo, title: 'Toys', link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fkids-activity-toys&psig=AOvVaw33DzWrjZk8BHm59KZMDpTM&ust=1721134894035000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiMo4OhjamHAxVee2wGHeeVDJAQjRx6BAgAEBU' },
  { id: 2, image: logo, title: 'Chocolate', link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fchocolate-gifts%2Fhyperfoods%2Fhyperfoods-kids-set-of-2-toy-rakhi-with-cadbrury-chocolate-167-gms%2F24389240%2Fbuy&psig=AOvVaw0zVRnZTHmMmmO46-zttnWJ&ust=1721134934081000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiJwI-0jamHAxUNbGwGHU-XD6sQjRx6BAgAEBU' },
  { id: 3, image: logo, title: 'Stationary', link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fstationery%2Fpassionpetals%2Fpassion-petals-kids-set-of-3-stationary-gift-set%2F22079294%2Fbuy&psig=AOvVaw3ZecF8-FRQOMq0POOxgUDD&ust=1721134971149000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiN9OXFjamHAxUNTmwGHVELBGwQjRx6BAgAEBU' },
  { id: 4, image: logo, title: 'Books', link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Flearning-and-development-toys%2Fdreamland%2Fdreamland-kids-set-of-10-my-first-early-learning-book%2F25863358%2Fbuy&psig=AOvVaw2taWM837m1mo8ZOy_-qudr&ust=1721135029235000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwj2nb_hjamHAxUufGwGHVzxAr4QjRx6BAgAEBU' },
  { id: 5, image: logo, title: 'Cycle', link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Ftoy-vehicles%2Fbaybee%2Fbaybee-kids-2-in-1-tricycle%2F25080890%2Fbuy&psig=AOvVaw0ErxpzkfgwAHhpZqfkLuFI&ust=1721135068087000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjHwoL0jamHAxUnfGwGHdbjBpsQjRx6BAgAEBU' },
  { id: 6, image: logo, title: 'BabyCare', link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fbaby-care-kit%2Fhimalaya%2Fhimalaya-happy-baby-gift-pack%2F24877118%2Fbuy&psig=AOvVaw0DCSObKbbf1n7e3MzOl3ko&ust=1721135106359000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjQu6KGjqmHAxWQTWwGHXSBDHoQjRx6BAgAEBU' },
  { id: 7, image: logo, title: 'Ethnicwear', link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fdresses%2Fkinder%2Bkids%2Fkinder-kids-pink-print-a-line-dress%2F25319634%2Fbuy&psig=AOvVaw1G7LOUFaHF4Kx9KweoOLBd&ust=1721135137161000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiSvfqUjqmHAxXNfGwGHUvEBaEQjRx6BAgAEBU' },
  { id: 8, image: logo, title: 'Booties', link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fbooties%2Fbabymoo%2Fbaby-moo-infants-kids-bunny-cotton-socks-booties%2F23572254%2Fbuy&psig=AOvVaw1SypmFfFKSJOZ65eF9deeV&ust=1721135171604000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjc3rCljqmHAxVqcmwGHVOvCF0QjRx6BAgAEBU' },
]);

const [beautyImages] = useState([
  { id: 1, image: logo , title: 'Foundation', link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fmakeup-combo%2Fmaybelline%2Fmaybelline-new-york-fit-me-matteporeless-liquid-foundation---128--primer---30ml-each%2F27926514%2Fbuy&psig=AOvVaw0QC0gANPm8n21wU1Dwau0Y&ust=1721135214650000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjRiPS5jqmHAxXrSWwGHXxgBT0QjRx6BAgAEBU' },
  { id: 2, image: logo , title: 'Bangle', link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fbangle%2Fyoubella%2Fyoubella-set-of-6-gold-plated-stone-studded-bangles%2F12526684%2Fbuy&psig=AOvVaw3S0QxgntFoTaH7K1wsvgfb&ust=1721135244601000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjRkJjIjqmHAxXYa2wGHYtmA9oQjRx6BAgAEBU' },
  { id: 3, image: logo, title: 'Eyeliner', link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Feyeliner%2Flakme%2Flakme-eyeconic-liquid-eyeliner-45-ml---black%2F13105508%2Fbuy&psig=AOvVaw29-qQMMEJiUUh7dbXxArL4&ust=1721135270758000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjbzNTUjqmHAxX5b2wGHcm0B4EQjRx6BAgAEBU' },
  { id: 4, image: logo , title: 'Earrings', link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fearrings%2Fzaveripearls%2Fzaveri-pearls-gold-plated-crescent-shaped-kundan--pearls-studded-chandbalis-earrings%2F18616320%2Fbuy&psig=AOvVaw1pa1lgssbPfaA7C5nn9MgV&ust=1721135302408000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwj2suDjjqmHAxWJT2wGHVtaDX4QjRx6BAgAEBU' },
  { id: 5, image: logo, title: 'Compact Powder', link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fcompact%2Fhuda%2Bbeauty%2Fhuda-beauty-easy-bake--snatch-compact-pressed-powder---banana-bread%2F26151396%2Fbuy&psig=AOvVaw3-j24t2ptcGlv7Cu8QvBI2&ust=1721135333076000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwi3nbDyjqmHAxXNSGwGHbphAEsQjRx6BAgAEBU' },
  { id: 6, image: logo, title: 'HairOil', link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fhair-oil%2Findulekha%2Findulekha-bringha-hair-oil-100-ml%2F2508145%2Fbuy&psig=AOvVaw2uHiX6uBoBEoW6qZOkkJrG&ust=1721135362640000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiC0byAj6mHAxWsXmwGHbBjD2MQjRx6BAgAEBU' },
  { id: 7, image: logo, title: 'Lipstick', link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Flipstick%2Fcvb%2Fcvb-12-pcs-liquid-matte-lipstick-%2F24267474%2Fbuy&psig=AOvVaw3NJN1NSluCocRNhZvCD6mv&ust=1721135390889000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjL5fiNj6mHAxURa2wGHRChCGEQjRx6BAgAEBU' },
  { id: 8, image: logo, title: 'NailPolish', link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fnail-polish%2Fforfor%2Fforfor-set-of-6-perfect-stay-trendy-long-lasting-nail-polishes---5-ml-each-%2F23603498%2Fbuy&psig=AOvVaw3Kuxgj-zaegyVF0NocvhI3&ust=1721137634874000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwik6fq7l6mHAxUpe2wGHTxNDJYQjRx6BAgAEBU' },
]);
    


    const calculateTimeLeft = () => {
        const difference = +new Date("2024-12-31") - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearTimeout(timer);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        timerComponents.push(
          <span key={interval}>
            {timeLeft[interval] < 10 ?` 0${timeLeft[interval]} `: timeLeft[interval]} {interval}{" "}
          </span>
        );
      });




    //  Filter images based on searchTerm for each section
      const filteredMensImages = mensImages.filter(item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
       );

    const filteredWomensImages = womensImages.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredKidsImages = kidsImages.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredBeautyImages = beautyImages.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


   

    return (
        <Container fluid className="app bg-white">
            {/* <Container fluid className="top bg-light p-2">
                <Row>
                    <Col xs={1} className="mt-2">
                        <img src={logo} alt="Logo" style={{ width: "60px", height: "60px" }} />
                    </Col>



<Col xs={5} className="mt-4 d-flex">
<div className="link1">
          <span
            className="link"
            style={{
              marginLeft: "3%",
              fontWeight: "bold",
              fontSize: "15px",
              textDecoration: "none",
              color: "#282C3F",
              paddingBottom: "25px",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
            // to="/Men"
          >
            MEN
          </span>
          <div className="down">
            <div className="flex">
              <div className="a1">
                <ul>
                  <li>Topwear</li>
                  <li>T-Shirts</li>
                  <li>Casual Shirts</li>
                  <li>Formal Shirts</li>
                  <li>Sweatshirts</li>
                  <li>Sweaters</li>
                  <li>Jackets</li>
                  <li>Blazers & Coats</li>
                  <li>Suits</li>
                  <li>Rain Jackets</li>
                </ul>
                <ul class="nextul">
                  <li>Indian & Festive Wear</li>
                  <li>Kurtas & Kurta Sets</li>
                  <li>Sherwanis</li>
                  <li>Nehru Jackets</li>
                  <li>Dhotis</li>
                </ul>
              </div>
              <div className="a2">
                <ul>
                  <li>Bottom Wear</li>
                  <li>Jeans</li>
                  <li>Casual Trousers</li>
                  <li>Formal Trousers</li>
                  <li>Shorts</li>
                  <li>Track Pants & Joggers</li>
                </ul>

                <ul class="nextul">
                  <li>Innerwear & Sleepwear</li>
                  <li>Briefs & Trunks</li>
                  <li>Boxers</li>
                  <li>Vests</li>
                  <li>Sleepwear & Loungewear</li>
                  <li>Thermals</li>
                </ul>
                <ul class="nextul">
                  <li>Plus Size</li>
                  <li>S, M, L, XL, XXl, XXl</li>
                </ul>
              </div>
              <div className="a1">
                <ul>
                  <li>Footwear</li>
                  <li>Casual Shoes</li>
                  <li>Sports Shoes</li>
                  <li>Formal Shoes</li>
                  <li>Sneakers</li>
                  <li>Sandals & Floaters</li>
                  <li>Flip Flops</li>
                  <li>Socks</li>
                </ul>
                <ul class="nextul">
                  <li>Personal Care & Grooming</li>
                  <li>Lotions</li>
                  <li>Shaving kit</li>
                </ul>
                <ul clss="nextul">
                  <li>Watches</li>
                  <li>Fastrack</li>
                  <li>Puma</li>
                  <li>Rado</li>
                </ul>
              </div>
              <div className="a2">
                <ul>
                  <li>Sports & Active Wear</li>
                  <li>Sports Shoes</li>
                  <li>Sports Sandals</li>
                  <li>Active T-Shirts</li>
                  <li>Track Pants & Shorts</li>
                  <li>Tracksuits</li>
                  <li>Jackets & Sweatshirts</li>
                  <li>Sports Accessories</li>
                  <li>Swimwear</li>
                </ul>
                <ul class="nextul">
                  <li>Gadgets</li>
                  <li>Smart Wearables</li>
                  <li>Fitness Gadgets</li>
                  <li>Headphones</li>
                  <li>Speakers</li>
                </ul>
              </div>
              <div
                className="a1"
                style={{
                  paddingRight: "25px",
                }}
              >
                <ul>
                  <li>Fashion Accessories</li>
                  <li>Wallets</li>
                  <li>Belts</li>
                  <li>Perfumes & Body Mists</li>
                  <li>Trimmers</li>
                  <li>Deodorants</li>
                  <li>Ties, Cufflinks & Pocket Squares</li>
                  <li>Accessory Gift Sets</li>
                  <li>Caps & Hats</li>
                  <li>Mufflers, Scarves & Gloves</li>
                  <li>Phone Cases</li>
                  <li>Rings & Wristwear</li>
                  <li>Helmets</li>
                </ul>
                <ul class="nextul">
                  <li>Bags & Backpacks</li>
                  <li>Reebok</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="link1">
          <span
            className="link"
            style={{
              marginLeft: "3%",
              marginBottom: "-2%",
              fontWeight: "bold",
              fontSize: "15px",
              textDecoration: "none",
              color: "#282C3F",
              paddingBottom: "25px",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
            // to="/Women"
          >
            WOMEN
          </span>
          <div
            className="down"
            style={{
              marginLeft: "-100px",
            }}
          >
            <div className="flex">
              <div className="a1">
                <ul>
                  <li>Indian & Fusion Wear</li>
                  <li>Kurtas & Suits</li>
                  <li>Kurtis, Tunics & Tops</li>
                  <li>Ethnic Wear</li>
                  <li>Leggings, Salwars & Churidars</li>
                  <li>Skirts & Palazzos</li>
                  <li>Sarees</li>
                  <li>Dress Materials</li>
                  <li>Lehenga Cholis</li>
                  <li>Dupattas & Shawls</li>
                  <li>Jackets</li>
                </ul>

                <ul class="nextul">
                  <li>Belts, Scarves & More</li>
                </ul>
                <ul class="nextul">
                  <li>Watches & Wearables</li>
                </ul>
              </div>
              <div className="a2">
                <ul>
                  <li>Western Wear</li>
                  <li>Dresses</li>
                  <li>Jumpsuits</li>
                  <li>Tops</li>
                  <li>Jeans</li>
                  <li>Trousers & Capris</li>
                  <li>Shorts & Skirts</li>
                  <li>Shrugs</li>
                  <li>Sweaters & Sweatshirts</li>
                  <li>Jackets & Coats</li>
                  <li>Blazers & Waistcoats</li>
                </ul>

                <ul class="nextul">
                  <li>Plus Size</li>
                </ul>
                <ul class="nextul">
                  <li>Sunglasses & Frames</li>
                </ul>
              </div>
              <div className="a1">
                <ul>
                  <li>Footwear</li>
                  <li>Flats</li>
                  <li>Casual Shoes</li>
                  <li>Heels</li>
                  <li>Boots</li>
                  <li>Sports Shoes & Floaters</li>
                </ul>

                <ul class="nextul">
                  <li>Sports & Active Wear</li>
                  <li>Clothing</li>
                  <li>Footwear</li>
                  <li>Sports Accessories</li>
                  <li>Sports Equipment</li>
                </ul>
              </div>
              <div className="a2">
                <ul>
                  <li>Lingerie & Sleepwear</li>
                  <li>Bra</li>
                  <li>Briefs</li>
                  <li>Shapewear</li>
                  <li>Sleepwear & Loungewear</li>
                  <li>Swimwear</li>
                  <li>Camisoles & Thermals</li>
                </ul>

                <ul class="nextul">
                  <li>Beauty & Personal Care</li>
                  <li>Makeup</li>
                  <li>Skincare</li>
                  <li>Premium Beauty</li>
                  <li>Lipsticks</li>
                  <li>Fragrances</li>
                </ul>
              </div>
              <div
                className="a1"
                style={{
                  paddingRight: "25px",
                }}
              >
                <ul>
                  <li>Gadgets</li>
                  <li>Smart Wearables</li>
                  <li>Fitness Gadgets</li>
                  <li>Headphones</li>
                  <li>Speakers</li>
                </ul>

                <ul class="nextul">
                  <li>Jewellery</li>
                  <li>Fashion Jewellery</li>
                  <li>Fine Jewellery</li>
                  <li>Earrings</li>
                </ul>
                <ul class="nextul">
                  <li>Backpacks</li>
                </ul>
                <ul class="nextul">
                  <li>Handbags, Bags & Wallets</li>
                </ul>
                <ul class="nextul">
                  <li>Luggages & Trolleys</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="link1">
          <span
            className="link"
            style={{
              marginLeft: "3%",
              fontWeight: "bold",
              fontSize: "15px",
              textDecoration: "none",
              color: "#282C3F",
              paddingBottom: "25px",
              paddingLeft: "5px",
              paddingRight: "5px",
              marginBottom: "-2%",
            }}
            // to="/Kids"
          >
            KIDS
          </span>
          <div
            className="down"
            style={{
              marginLeft: "-200px",
            }}
          >
            <div className="flex">
              <div className="a1">
              <ul>
              <li>Boys Clothing</li>
              <li>T-Shirts</li>
              <li>Shirts</li>
              <li>Shorts</li>
              <li>Jeans</li>
              <li>Trousers</li>
              <li>Clothing Sets</li>
              <li>Ethnic Wear</li>
              <li>Track Pants & Pyjamas</li>
              <li>Jacket, Sweater & Sweatshirts</li>
              <li>Party Wear</li>
              <li>Innerwear & Thermals</li>
              <li>Nightwear & Loungewear</li>
              <li>Value Packs</li>
            </ul>
              </div>
              <div className="a2">
              <ul>
              <li>Girls Clothing</li>
              <li>Dresses</li>
              <li>Tops</li>
              <li>Tshirts</li>
              <li>Clothing Sets</li>
              <li>Lehenga choli</li>
              <li>Kurta Sets</li>
              <li>Party wear</li>
              <li>Dungarees & Jumpsuits</li>
              <li>Skirts & shorts</li>
              <li>Tights & Leggings</li>
              <li>Jeans, Trousers & Capris</li>
              <li>Jacket, Sweater & Sweatshirts</li>
              <li>Innerwear & Thermals</li>
              <li>Nightwear & Loungewear</li>
              <li>Value Packs</li>
            </ul>
              </div>
              <div className="a1">
              <ul>
              <li>Footwear</li>
              <li>Casual Shoes</li>
              <li>Flipflops</li>
              <li>Sports Shoes</li>
              <li>Flats</li>
              <li>Sandals</li>
              <li>Heels</li>
              <li>School Shoes</li>
              <li>Socks</li>
            </ul>

            <ul class="nextul">
              <li>Toys</li>
              <li>Learning & Development</li>
              <li>Activity Toys</li>
              <li>Soft Toys</li>
              <li>Action Figure / Play set</li>
            </ul>
              </div>
              <div className="a2">
              <ul>
              <li>Infants</li>
              <li>Bodysuits</li>
              <li>Rompers & Sleepsuits</li>
              <li>Clothing Sets</li>
              <li>Tshirts & Tops</li>
              <li>Dresses</li>
              <li>Bottom wear</li>
              <li>Winter Wear</li>
              <li>Innerwear & Sleepwear</li>
              <li>Infant Care</li>
            </ul>

            <ul class="nextul">
              <li>Home & Bath</li>
            </ul>
            <ul class="nextul">
              <li>Home & Bath</li>
            </ul>
              </div>
              <div
                className="a1"
                style={{
                  paddingRight: "25px",
                }}
              >
                <ul>
              <li>Kids Accessories</li>
              <li>Bags & Backpacks</li>
              <li>Watches</li>
              <li>Jewellery & Hair accessory</li>
              <li>Sunglasses</li>
              <li>Masks & Protective Gears</li>
              <li>Caps & Hats</li>
            </ul>

            <ul class="nextul">
              <li>Brands</li>
              <li>H&M</li>
              <li>Max Kids</li>
              <li>Pantaloons</li>
              <li>United Colors Of Benetton Kids</li>
              <li>YK</li>
              <li>U.S. Polo Assn. Kids</li>
              <li>Mothercare</li>
              <li>HRX</li>
            </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="link1">
          <span
            className="link"
            style={{
              marginLeft: "3%",
              fontWeight: "bold",
              fontSize: "15px",
              textDecoration: "none",
              color: "#282C3F",
              paddingBottom: "25px",
              paddingLeft: "5px",
              paddingRight: "5px",
              marginBottom: "-2%",
            }}
            // to="/Home&Living"
          >
            HOME&LIVING
          </span>
          <div
            className="down"
            style={{
              marginLeft: "-300px",
            }}
          >
            <div className="flex">
              <div className="a1">
              <ul>
              <li>Bed Linen & Furnishing</li>
              <li>Bedsheets</li>
              <li>Bedding Sets</li>
              <li>Blankets, Quilts & Dohars</li>
              <li>Pillows & Pillow Covers</li>
              <li>Bed Covers</li>
            </ul>

            <ul class="nextul">
              <li>Flooring</li>
              <li>Carpets</li>
              <li>Floor Mats & Dhurries</li>
              <li>Door Mats</li>
            </ul>
              </div>
              <div className="a2">
              <ul>
              <li>Bath</li>
              <li>Bath Towels</li>
              <li>Hand & Face Towels</li>
              <li>Beach Towels</li>
              <li>Towels Set</li>
              <li>Bath Rugs</li>
              <li>Bath Robes</li>
              <li>Bathroom Accessories</li>
            </ul>

            <ul class="nextul">
              <li>Lamps & Lighting</li>
              <li>Floor Lamps</li>
              <li>Ceiling Lamps</li>
              <li>Table Lamps</li>
              <li>Wall Lamps</li>
              <li>Outdoor Lamps</li>
              <li>String Lights</li>
            </ul>
              </div>
              <div className="a1">
              <ul>
              <li>Home Décor</li>
              <li>Plants & Planters</li>
              <li>Aromas & Candles</li>
              <li>Clocks</li>
              <li>Mirrors</li>
              <li>Wall Décor</li>
              <li>Wall Shelves</li>
              <li>Fountains</li>
              <li>Showpieces & Vases</li>
            </ul>

            <ul class="nextul">
              <li>Cushions & Cushion Covers</li>
            </ul>

            <ul class="nextul">
              <li>Curtains</li>
            </ul>

            <ul class="nextul">
              <li>Home Gift Sets</li>
            </ul>
              </div>
              <div className="a2">
              <ul>
              <li>Kitchen & Table</li>
              <li>Dinnerware & Serveware</li>
              <li>Cups and Mugs</li>
              <li>Bakeware & Cookware</li>
              <li>Kitchen Storage & Tools</li>
              <li>Bar & Drinkware</li>
              <li>Table Covers & Furnishings</li>
            </ul>

            <ul class="nextul">
              <li>Storage</li>
              <li>Organisers</li>
              <li>Hooks & Holders</li>
            </ul>
              </div>
              <div
                className="a1"
                style={{
                  paddingRight: "25px",
                }}
              >
                <ul>
              <li>Brands</li>
              <li>Home Centre</li>
              <li>Spaces</li>
              <li>D'Decor</li>
              <li>Portico New York</li>
              <li>Pure Home & Living</li>
              <li>Swayam</li>
              <li>Raymond Home</li>
              <li>Maspar</li>
              <li>Corelle</li>
              <li>Trident</li>
              <li>Cortina</li>
              <li>Story@Home</li>
              <li>Random</li>
              <li>Ellementry</li>
              <li>ROMEE</li>
              <li>SEJ by Nisha Gupta</li>
            </ul>
              </div>
            </div>
          </div>
        </div>

       
<div className="link1">
          <span
            className="link"
            style={{
              marginLeft: "3%",
              fontWeight: "bold",
              fontSize: "15px",
              textDecoration: "none",
              color: "#282C3F",
              paddingBottom: "25px",
              paddingLeft: "5px",
              paddingRight: "5px",
              marginBottom: "-2%",
            }}
            // to="/Beauty"
          >
            BEAUTY
          </span>
          <div
            className="down"
            style={{
              marginLeft: "-300px",
            }}
          >

            <div className="flex">
              <div className="a1">
              <ul>
              <li>Makeup</li>
              <li>Lipstick</li>
              <li>Lip Gloss</li>
              <li>Lip Liner</li>
              <li>Mascara</li>
              <li>Eyeliner</li>
              <li>Kajal</li>
              <li>Eyeshadow</li>
              <li>Foundation</li>
              <li>Primer</li>
              <li>Concealer</li>
              <li>Compact</li>
              <li>Nail Polish</li>
            </ul>
              </div>
              <div className="a2">
              <ul>
              <li>Skincare, Bath & Body</li>
              <li>Face Moisturiser</li>
              <li>Cleanser</li>
              <li>Masks & Peel</li>
              <li>Sunscreen</li>
              <li>Serum</li>
              <li>Face Wash</li>
              <li>Eye Cream</li>
              <li>Lip Balm</li>
              <li>Body Lotion</li>
              <li>Body Wash</li>
              <li>Body Scrub</li>
              <li>Hand Cream</li>
            </ul>

            <ul class="nextul">
              <li>Baby Care</li>
            </ul>

            <ul class="nextul">
              <li>Masks</li>
            </ul>
              </div>
              <div className="a1">
              <ul>
              <li>Haircare</li>
              <li>Shampoo</li>
              <li>Conditioner</li>
              <li>Hair Cream</li>
              <li>Hair Oil</li>
              <li>Hair Gel</li>
              <li>Hair Color</li>
              <li>Hair Serum</li>
              <li>Hair Accessory</li>
            </ul>

            <ul class="nextul">
              <li>Fragrances</li>
              <li>Perfume</li>
              <li>Deodorant</li>
              <li>Body Mist</li>
            </ul>
              </div>
              <div className="a2">
              <ul>
              <li>Appliances</li>
              <li>Hair Straightener</li>
              <li>Hair Dryer</li>
              <li>Epilator</li>
            </ul>

            <ul class="nextul">
              <li>Men's Grooming</li>
              <li>Trimmers</li>
              <li>Beard Oil</li>
              <li>Hair Wax</li>
            </ul>

            <ul class="nextul">
              <li>Beauty Gift & Makeup Set</li>
              <li>Beauty Gift</li>
              <li>Makeup Kit</li>
            </ul>

            <ul class="nextul">
              <li>Premium Beauty</li>
            </ul>

            <ul class="nextul">
              <li>Wellness & Hygiene</li>
            </ul>
              </div>
              <div
                className="a1"
                style={{
                  paddingRight: "25px",
                }}
              >
                 <ul>
              <li>Top Brands</li>
              <li>Lakme</li>
              <li>Maybelline</li>
              <li>LOreal</li>
              <li>Philips</li>
              <li>Bath & Body Works</li>
              <li>THE BODY SHOP</li>
              <li>Biotique</li>
              <li>Mamaearth</li>
              <li>MCaffeine</li>
              <li>Nivea</li>
              <li>Lotus Herbals</li>
              <li>LOreal Professionnel</li>
              <li>KAMA AYURVEDA</li>
              <li>M.A.C</li>
              <li>Forest Essentials</li>
            </ul>
              </div>
              
            </div>
          </div>
        </div>

        <div className="link1 ">
          <span
            className="link"
            style={{
              marginLeft: "3%",
              fontWeight: "bold",
              fontSize: "15px",
              textDecoration: "none",
              color: "#282C3F",
              paddingBottom: "25px",
              paddingLeft: "5px",
              paddingRight: "5px",
              marginBottom: "-2%",
            }}
            // to="/Studio"
          >
            STUDIO<sup style={{
              color:"red"
            }}>NEW</sup>
          </span>
          <div
            className="down"
            style={{
              marginLeft: "-400px",
            }}
          >
            
             <img src={logo} style={{ width: "40%",marginTop:"10px", height: "500px", marginLeft:"30%" }} />

</div>
</div>

</Col>


               <Col xs={4} className="mt-2">
                        <input type="text" placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />
                </Col>

        <Col xs={2} className="mt-2 text-center d-flex">
            <div className="icon-container">
                <FontAwesomeIcon icon={faUser} style={{ fontSize: "25px", marginRight: "5px" }} />
                <p style={{ fontSize: "15px" }}>Profile</p>
            </div>

            <div className="icon-container">
                <FontAwesomeIcon icon={faHeart} style={{ fontSize: "20px", marginRight: "5px" }} />
                <p style={{ fontSize: "15px" }}>Wishlist</p>
            </div>

            <div className="icon-container">
                <FontAwesomeIcon icon={faShoppingBag} style={{ fontSize: "20px", marginRight: "5px" }} />
                <p style={{ fontSize: "15px" }}>Bag</p>
            </div>
        </Col>
        </Row>           
    </Container> */}

            {/* <Container fluid className="time text-center bg-white p-4">
            <div className="countdown">
      <span>Offer Ends In</span>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
                <img src={logo} alt="Deal" />
                <img src={logo} alt="Coupens" />
            
                <Carousel controls={false} indicators={true} className="custom-carousel ">
                    <Carousel.Item interval={1500}>
                        <img className="d-block w-100 " src={logo} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item interval={1500} >
                        <img className="d-block w-100" src={logo} alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img className="d-block w-100" src={logo} alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img className="d-block w-100" src={logo} alt="Fourth slide" />
                    </Carousel.Item>
                </Carousel>
            
 

        <Container fluid className="mt-5">
            <Carousel controls={false} indicators={true} className="carousel">
                    <Carousel.Item interval={500}>
                        <img className="d-block w-100" src={logo} />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img className="d-block w-100" src={logo}  />
                    </Carousel.Item>
            </Carousel>
        </Container>
        </Container> */}


 {/* MENS section */}
 <input type="text" placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />
 <Container fluid className="mt-5">
                <h2 className="bg-info p-3 text-white">Mens Images</h2>
                
                <Container>
                    <Row className="mt-4">
                    {filteredMensImages.length > 0 && filteredMensImages.map((item, index) => (
                            <Col xs={3} key={item.id}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    onClick={() => handleImageClick(item.id, mensImages)}
                                    style={{ cursor: 'pointer', width: '100%', height: '250px' }}
                                />
                                <p style={{textAlign:"center" , padding:"5px" , fontWeight:"bold" , fontSize:"25px"}}>{item.title}</p>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>

           


{/* <Container fluid className="mt-3">
            <h2 className="bg-info p-3 text-white">Womens Images</h2>
            <Container>
                <Row className="mt-4">
                    {filteredWomensImages.length > 0 && filteredWomensImages.map((item, index) => (
                        <Col xs={3} key={item.id}>
                            <img
                                src={item.image} // Use item.image instead of image.image
                                alt={item.title} // Use item.title instead of image.title
                                onClick={() => handleImageClick(item.id, filteredWomensImages)}
                                style={{ cursor: 'pointer', width: '100%', height: '250px' }}
                            />
                            <p style={{ textAlign: "center", padding: "5px", fontWeight: "bold", fontSize: "25px" }}>{item.title}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container> */}

            {/* KIDS section */}
            <Container fluid className="mt-3">
                <h2 className="bg-info p-3 text-white">Kids Images</h2>
                <Container>
                    <Row className="mt-4">
                    {filteredKidsImages.length > 0 && filteredKidsImages.map((item, index) => (
                            <Col xs={3} key={item.id}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    onClick={() => handleImageClick(item.id, kidsImages)}
                                    style={{ cursor: 'pointer', width: '100%', height: '250px' }}
                                />
                                <p style={{textAlign:"center" , padding:"5px" , fontWeight:"bold" , fontSize:"25px"}}>{item.title}</p>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>

            {/* BEAUTY section */}
             {/* <Container fluid className="mt-3">
                <h2 className="bg-info p-3 text-white">Beauty Images</h2>
                <Container>
                    <Row className="mt-4">
                    {filteredBeautyImages.length > 0 && filteredBeautyImages.map((item, index) => (
                            <Col xs={3} key={item.id}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    onClick={() => handleImageClick(item.id, beautyImages)}
                                    style={{ cursor: 'pointer', width: '100%', height: '250px' }}
                                />
                                <p style={{textAlign:"center" , padding:"5px" , fontWeight:"bold" , fontSize:"25px"}}>{item.title}</p>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>  */}

{/* 
            <Container fluid className="trends">
                <Row>
                    <h3 className="head bg-light text-danger mt-4 p-3" > CATEGORIES TO BAG </h3>
                    <img src={logo}  alt="categories" />
                </Row>

                <Row>
                    <h3 className="head bg-light text-danger mt-4 p-3" > EXPLORE TOP BRANDS </h3>
                    <img src={logo} alt="brands" />               
                </Row>

                <Row>
                    <h3 className="head bg-light text-danger mt-4 p-3" > TRENDING IN WESTERN WEAR </h3>
                    <img src={logo} alt="western wear" />
                </Row>

                <Row>
                    <h3 className="head bg-light text-danger mt-4 p-3" >TRENDING IN INDIAN WEAR</h3>
                    <img src={logo} alt="indian trending" />
                </Row>

                <Row>
                    <h3 className="head bg-light text-danger mt-4 p-3" > TRENDING IN SPORTS WEAR </h3>
                    <img src={logo}  alt="sports wears" />
                </Row>

                <Row>
                    <h3 className="head bg-light text-danger mt-4 p-3" > TRENDING IN FOOTWEAR </h3>
                    <img src={logo}  alt="footwears" />
                </Row>

                <Row>
                    <h3 className="head bg-light text-danger mt-4 p-3" > TRENDING IN ACCESSORIES </h3>
                    <img src={logo} alt="trending ACCESSORIES" />
                </Row>
           </Container>
 */}

{/* FOOTER SECTION */}
            {/* <Container fluid className="footer p-3 text-center bg-light mt-5">
             
              <Container>
                <Row>
                    <Col xs={3}>
                    <h5> ONLINE SHOPPING </h5>

                    <ul>
                        <li> MENS </li>
                        <li> WOMENS </li>
                        <li> KIDS </li>
                        <li> BEAUTY </li>
                        <li> HOME & LIVING </li>
                        <li> STUDIO </li>
                    </ul>

                    </Col>

                    <Col xs={3}>
                    <h5> CUSTOMER POLICIES </h5>
                    
                    <ul>
                    <li> Contact Us</li>
                    <li> FAQ </li>
                    <li> T&C </li>
                    <li> Terms Of Uses </li>
                    <li> Track Orders </li>
                    <li> Shipping </li>
                    <li> Canclellation </li>
                    <li> Returns </li>
                    <li> Privacy Policy </li>
                    <li> Grienance Officer </li>
                    </ul>

                    </Col>

                    <Col xs={3}>
                    <h5> EXPERIENCE MYNTRA APP ON MOBILE </h5>
                    <img src={logo} />
                    </Col>

                    <Col xs={3}>
                    <img src={logo} alt="guarantee all products" />
                    </Col>
                </Row>
               <Row>
                <h4 className="text-primary "> POPULAR SEARCHES </h4>
                <hr></hr>
                <p>
                    Kurta Pajama | Leather Jackets | Sherwani | Shirts | T-Shirts |
                Waistcoat | Photo Frames | Denim Shirts | Blazers | Mirror | Bags |
                Jackets | Blouse Designs | Crop Tops | Mysore Silk Saree | Kids Lehenga
                | Suit Design | Lehenga | Girl Dungarees | Top for Girl | Top for Girl |
                Lingerie | Gowns | Saree | Kids Ethnic Wear | Sweaters | Boys Games |
                Barbie Doll | Shoes For Men | Cricket Shoes | Lipstick | Make Up Kit |
                Fastrack Watches | Casual Shoes | Online Shopping | Dresses | Babydolls
                | Eye Makeup | Car Games | Nike Shoes | Puma | United Colors of Benetton
                | Fastrack | Watches | Backpacks | Men Kurtas | Titan Watches               
                </p>
                <hr ></hr>
               </Row>
               </Container>
               
                <Row className="mt-2">
                    <Col xs={3} className="mt-2">
                    <p> In case of any concern, <span className="text-primary"> Contact Us </span>  </p>
                    </Col>

                    <Col xs={3} >
                    <i className="fa-brands fa-twitter p-2 "></i>           
                    <i className="fa-brands fa-facebook p-2"></i>
                    <i className="fa-brands fa-youtube p-2"></i>
                    <i className="fa-brands fa-instagram p-2"></i>
                    </Col> 

                    <Col xs={3} className="mt-2">
                    <p> © 2024 www.myntra.com. All rights reserved. </p>
                    </Col>

                    <Col xs={3} className="mt-2">
                    <p> A Flipkart company </p>
                    </Col>
                    <hr></hr>
                </Row>

                <Row>
                    <Col xs={6}>
                    <h5> Registered Office Address </h5>
                    <br/> 
                    <address style={{textAlign:"left"}}>
                        Buildings Alyssa, <br />
                        Begonia and Clover situated in Embassy Tech Village, <br />
                        Outer Ring Road, <br />
                        Devarabeesanahalli Village, <br />
                        Varthur Hobli, <br />
                        Bengaluru – 560103, India
                    </address>
                    </Col>

                    <Col xs={6} className="mt-5">
                    <p> CIN: U72300KA2007PTC041799 </p>
                    <p> TelePhone : <span> +91-80-61561999 </span> </p>
                    </Col>
                    <hr></hr>
                </Row>


            </Container> */}

            
        </Container>
    );
}