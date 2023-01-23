import React from 'react'

import Helmet from '../components/Helmet/Helmet'
import heroImg from '../assets/images/hero.png';

import { Link } from 'react-router-dom';
import {Container,Row,Col,ListGroup,ListGroupItem} from "reactstrap";

import '../styles/hero-section.css';
import Category from '../components/UI/category/Category';
import '../styles/home.css';

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from '../assets/fake-data/products.js'

import foodCategoryImg01 from '../assets/images/hamburger.png';
import foodCategoryImg02 from '../assets/images/pizza.png';
import foodCategoryImg03 from '../assets/images/bread.png';

import ProductCard from '../components/UI/product card/ProductCard';
import { useState } from 'react';
import { useEffect } from 'react';

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestiMonialSlider from '../components/UI/slider/TestiMonialSlider';


const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];


function Home() {

  const [category,setCategory]=useState('All');
  const [allProducts,setAllProducts]=useState(products);
  const [hotPizza,setHotPizza]=useState([]);

  useEffect(()=>{
     const filteredPizza=products.filter(item=>item.category==='Pizza');
     const slicePizza=filteredPizza.slice(0,4);
     setHotPizza(slicePizza);

  },[hotPizza])

  useEffect(()=>{
    if(category==='ALL'){
      setAllProducts(products);
    }
    if(category==='BURGER'){
      const filteredProducts=products.filter(item=>item.category==='Burger')
      setAllProducts(filteredProducts);
    }
    if(category==='PIZZA'){
      const filteredProducts=products.filter(item=>item.category==='Pizza')
      setAllProducts(filteredProducts);
    }
    if(category==='BREAD'){
      const filteredProducts=products.filter(item=>item.category==='Bread')
      setAllProducts(filteredProducts);
    }
  },[category])

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>

              <div className="hero__content">
                 <h5 className='mb-3'>Easily Make Your Order</h5>
                 <h1 className='mb-4 hero__title'><span>HUNGRY?</span>Just wait for <br/> food at your doorstep <span>in 30 Minutes</span></h1>
                 <p>Lorem ipsum dolor, sit amet consectetur 
                  adipisicing elit. Ipsam, enim officia iusto amet iste nostrum vero, 
                  vitae voluptas ducimus quos molestias illum hic optio cumque recusandae reiciendis in esse ut!</p>
                  <div className="hero__btns d-flex gap-5 align-items-center mt-4">
                     <button className='order__btn d-flex align-items-center justify-content-between'>
                     <Link to='/cart'>Order Now</Link> 
                      <i className='ri-arrow-right-s-line'/>
                     </button>
                     <button className='all__foods-btn'><Link to='/foods'>See All foods</Link></button>
                  </div>

                  <div className=' hero__service d-flex align-items-center gap-5 mt-4'>
                     <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i className="ri-car-line"></i></span>
                     No Shipping Charges!!
                     </p>

                     <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i className="ri-shield-check-line"></i></span>
                    100% secure checkout
                     </p>
                  </div>

              </div>
            </Col>
            <Col lg='6' md='6'>
               <div className="hero__img">
                <img src={heroImg} alt="hero-img" className='w-100'/>
               </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
         <Category/>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
            <h5 className='feature__subtitle mb-4'>What we Serve</h5>
            <h2 className='feature__title'>Just sit back at home</h2>
            <h2 className='feature__title'>We will <span>take care</span></h2>

            <p className='mb-1 mt-4 feature__text'>Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Asperiores por reprehenderit 
            </p>
            <p className='feature__text'>
              Lorem ipsum dolor sit amet 
              consectetur adipisicing elit. Reiciendis, repellat?
            </p>
            </Col>
            
            {
              featureData.map((item,index)=>(
                <Col lg='4' md='6'sm='6' key={index} className='mt-5'>
                <div className="feature__item text-center px-5 py-3">
                   <img src={item.imgUrl} 
                   alt="feature-img" 
                   className='w-30 mb-3'
                   />
                   <h5 className='fw-bold mb-3'>{item.title}</h5>
                   <p>{item.desc}</p>
                </div>
              </Col>
              ))
            }
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Popular Dishes</h2>
            </Col>

            <Col lg='12'>
               <div className="food__category d-flex align-items-center gap-4 justify-content-center">
                 <button 
                  className={`all__btn ${category==='ALL'?'foodBtnActive':''}`}
                  onClick={()=>setCategory('ALL')}>
                    All
                  </button>
                  <button 
                   className={`d-flex align-items-center gap-2 ${category==='BURGER'?'foodBtnActive':''}`} 
                   onClick={()=>setCategory('BURGER')}>
                   <img src={foodCategoryImg01} alt="food-category"/>
                   Burger
                  </button>

                  <button className={`d-flex align-items-center gap-2 ${category==='PIZZA'?'foodBtnActive':''}`}
                    onClick={()=>setCategory('PIZZA')} >
                  <img src={foodCategoryImg02} alt="food-category"/>
                   Pizza
                  </button>

                  <button className={`d-flex align-items-center gap-2 ${category==='BREAD'?'foodBtnActive':''}`}
                   onClick={()=>setCategory('BREAD')}>
                   <img src={foodCategoryImg03} alt="food-category"/>
                   Bread
                  </button>
               </div>
            </Col>
            {
              allProducts.map(item=>(
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
                <ProductCard item={item}/>
             </Col>
              ))
            }
           
          </Row>
        </Container>
      </section>

      <section className='why__choose-us'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src={whyImg} alt='why-hungry-point' className='w-100'/>
            </Col>

            <Col lg='6' md='6'>
                <div className="why__hungry-point">
                   <h2 className="hungry__point-title mb-4">Why  <span>Hungry Point?</span> </h2>
                   <p className='hungry__point-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda veniam unde iste ratione. 
                    Doloremque maiores ad numquam magni doloribus, quibusdam officiis ducimus nisi accusantium 
                    voluptatum minus non voluptatibus, saepe molestiae aut nihil odit et ipsum? Minus illo ex 
                    assumenda cupiditate molestiae pariatur distinctio. Perferendis, enim! A ducimus quibusdam nisi
                   </p>
                   
                   <ListGroup className='mt-4'>
                      <ListGroupItem className='border-0 ps-0'>
                        <p className='choose__us-item d-flex align-items-center gap-2'>
                          <i className="ri-checkbox-circle-line"/>
                           Fresh and Clean Service.
                        </p>
                        <p className='choose__us-desc'>Lorem ipsum dolor sit amet consectetur 
                          adipisicing elit. Vero, quis.</p>
                      </ListGroupItem>

                      <ListGroupItem className='border-0 ps-0'>
                        <p className='choose__us-item d-flex align-items-center gap-2'><i className="ri-checkbox-circle-line"/>
                           Quality Support 24/7.
                        </p>
                        <p className='choose__us-desc'>Lorem ipsum dolor sit amet consectetur 
                          adipisicing elit. Vero, quis.</p>
                      </ListGroupItem>

                      <ListGroupItem className='border-0 ps-0'>
                        <p className='choose__us-item d-flex align-items-center gap-2'><i className="ri-checkbox-circle-line"/>
                           Order from any Location.
                        </p>
                        <p className='choose__us-desc'>Lorem ipsum dolor sit amet consectetur 
                          adipisicing elit. Vero, quis.</p>
                      </ListGroupItem>

                   </ListGroup>
                   
                </div>
            </Col>
          </Row>
        </Container>
      </section>


      <section className='pt-0'>
         <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2>Hot Pizza</h2>
            </Col>

            {
              hotPizza.map((item)=>(
                 <Col lg='3' md='4' key={item.id}>
                    <ProductCard item={item}/>
                 </Col>
              ))
            }
          </Row>
         </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="testimonial mb-4">
              <h5 className='testimonial__subtitle mb-4'>Testimonials</h5>
              <h2 className='testimonial__title mb-4'>Hear From our <span>Customers</span>
              </h2>
              <p className='testimonial__desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, 
                dignissimos odit! Debitis ipsa expedita quod animi suscipit quo quis accusamus!
              </p>

              <TestiMonialSlider/>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <img src={networkImg} 
              alt="testimonial-img" className='w-100' />
            </Col>
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Home;
