import React from 'react'
import logo from '../../assets/images/res-logo.png'
import { Container,Row,Col, ListGroup, ListGroupItem } from 'reactstrap'
import '../../styles/footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
       <Container>
          <Row className='mt-5'>
            <Col lg='3' md='4' sm='6'>
            <div className="footer__logo text-start">
                 <img src={logo} alt="logo"/>
                 <h5>Hungry Point</h5>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ad sunt animi, 
                  iure maxime blanditiis ducimus eos officiis? </p>
             </div>
            </Col>

            <Col lg='3' md='4' sm='6'>
              <h5 className='footer__title'>Delivery Time</h5>
              <ListGroup className='deliver__time-list'>
                 <ListGroupItem className='delivery__time-item  border-0 ps-0'>
                    <span>Sunday-Thursday</span>
                    <p>10:00am-11:00pm</p>
                 </ListGroupItem>

                 <ListGroupItem className='delivery__time-item border-0 ps-0'>
                    <span>Friday-Saturday</span>
                    <p>Closed</p>
                 </ListGroupItem>
              </ListGroup>
            </Col>

            <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Contact</h5>
              <ListGroup className='deliver__time-list'>
              <ListGroupItem className='delivery__time-item  border-0 ps-0'>
                    <span>Location:Solan,Himachal Pradesh</span>
                 </ListGroupItem>

                 <ListGroupItem className='delivery__time-item  border-0 ps-0'>
                    <span>Phone:0176354785</span>
                 </ListGroupItem>

                 <ListGroupItem className='delivery__time-item border-0 ps-0'>
                    <span>Email:Hungry@gmail.com</span>
                   
                 </ListGroupItem>
              </ListGroup>
            </Col>

            <Col lg='3' md='4' sm='6'>
               <h5 className="footer__title">NewsLetter</h5>
               <p>Subscribe Our NewsLetter</p>
               <div className="newsletter">
                <input type="email" placeholder='Enter your email' />
                 <span><i className="ri-send-plane-line" style={{cursor:"pointer"}}></i></span>
               </div>
            </Col>
          </Row>

          <Row>
            <Col lg='6' md='6'>
              <p className='copyright__text'>Copyright-2023,All Rights Reserved</p>
            </Col>
            <Col lg='6' md='6'>
               <div className="social__links d-flex align-items-center gap-4
                justify-content-end">
                <p className='m-0 follow'>Follow:</p>
                <span><Link to=''><i className='ri-facebook-line'></i></Link></span>
                <span><Link to=''><i className='ri-github-line'></i></Link></span>
                <span><Link to=''><i className='ri-instagram-line'></i></Link></span>
                <span><Link to=''><i className='ri-linkedin-line'></i></Link></span>
               </div>
            </Col>
          </Row>
       </Container>
    </footer>
  )
}

export default Footer
