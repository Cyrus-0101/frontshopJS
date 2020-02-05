import React from "react";
import { Link } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { ReactComponent as Logo } from '../../assets/crown.svg'; 

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <div className="align-title">
        <MDBRow>
          <MDBCol md="6">
            <Link className='logo-container' to="/">
                <Logo className='logo'/>
            </Link>
            <h4 className="title">Online Store</h4>
            <p>
              Our mission is to ensure that we provide you with 
              the latest fashion trends in the global market.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Get In Touch</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Twitter</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
        </div>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.0101solutions.wordpress.com"> 0101 Solutions </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;