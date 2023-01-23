import React,{useRef} from 'react'
import Helmet from '../components/Helmet/Helmet'
import ComonSection from '../components/UI/common-section/ComonSection'
import { Container,Row,Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'

const Register = () => {

  const signupNameRef=useRef();
  const signupPasswordRef=useRef();
  const signEmailRef=useRef();

  const submitHandler=e=>{
    e.preventDefault();
  }

  return <Helmet title='Signup'>
    <ComonSection title='Signup'/>
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6' sm='12' className='m-auto text-center'>
             <form className='form mb-5' onSubmit={submitHandler}>

             <div className="form__group">
                  <input type="text" placeholder='Name' required ref={signupNameRef}/>
                </div>
                <div className="form__group">
                  <input type="text" placeholder='Email' required ref={signEmailRef}/>
                </div>

                <div className="form__group">
                  <input type="password" placeholder='Enter your Password' required ref={signupPasswordRef}/>
                </div>
                <div className="form__group">
                  <input type="password" placeholder='Re-Enter your Password' required ref={signupPasswordRef}/>
                </div>
                <button type='submit' className="addTOCart__btn">Register</button>
             </form>
             <Link to='/login' className='login__btn'>Already Have an account? Create an Account</Link>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Register