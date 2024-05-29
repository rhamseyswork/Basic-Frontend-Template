import { Link } from 'react-router-dom';
import FooterBox from './Footer_Box';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <div className='Footer mb-8'>
      <hr />
      <br />
      <br />
      <br />
      <Container>
        <Row style={{gap:"20px",}}>
          <Col>
            <FooterBox title='Ryan&nbsp;Michell'><hr style={{border:"solid 3px black"}}/><span>Hello World</span></FooterBox>
          </Col>
          <div className="vr p-0" />
          <Col>
          <FooterBox title="Contact">
            <span>Email:<Link href="mailto:example@example.com" className="ml-1">&nbsp;example@example.com</Link></span>
            <br />
            <span className="mt-2">Phone: <a href="tel:+1234567890">+1234567890</a></span>
          </FooterBox>
          </Col>
          <div className="vr p-0" />
          <Col>
            <FooterBox title='Resources'><span>
              <Link to="/about" className="d-block">About</Link>
              <Link to="/contact" className="d-block">Contact</Link>
              <Link to="/services" className="d-block">Services</Link>
              <Link to="/products" className="d-block">Products</Link>
              <Link to="/blog" className="d-block">Blog</Link>
              <Link to="/gallery" className="d-block">Gallery</Link>
              <Link to="/faq" className="d-block">FAQ</Link>

              </span></FooterBox>
          </Col>
          <div className="vr p-0" />
          <Col>
            <FooterBox title="Example"><hr style={{border:"solid 3px black"}}/>import map</FooterBox>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <hr />
      <p style={{textAlign:"center"}}>All Right Reserved ©<Link to="OCPaceSetters.com" style={{color:"orange"}}>OC Pace Setters</Link> <span className="d-block"><Link to="/terms">Terms </Link>|<Link to="/privacy"> Privacy</Link></span></p>
    </div>
  )
}

export default Footer;
