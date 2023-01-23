import React,{useRef} from 'react'
import Helmet from '../components/Helmet/Helmet'
import ComonSection from '../components/UI/common-section/ComonSection'
import { Container,Row,Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'

const Login = () => {

  const loginNameRef=useRef();
  const loginPasswordRef=useRef();

  const submitHandler=e=>{
    e.preventDefault();
  }

  return <Helmet title='Login'>
    <ComonSection title='Login'/>
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6' sm='12' className='m-auto text-center'>
             <form className='form mb-5' onSubmit={submitHandler}>
                <div className="form__group">
                  <input type="text" placeholder='Email' required ref={loginNameRef}/>
                </div>

                <div className="form__group">
                  <input type="password" placeholder='Password' required ref={loginPasswordRef}/>
                </div>
                <button type='submit' className="addTOCart__btn">Login</button>
             </form>
             <Link to='/register' className='login__btn'>Don't Have an account? Create an Account</Link>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Login
