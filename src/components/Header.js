import { NavLink ,Link} from 'react-router-dom';


import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  Row,
  Col
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faShoppingBag,
  faShoppingBasket
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Navbar
    id="nvBar"
    bg="primary"
    variant="dark"
    style={{
      position: "fixed",
      top: 0,
      right: 0,
      width: "100%",
      overflow: "hidden",
      zIndex: 1000,
      postion: "left"
    }}
  >
    <Row style={{ width: "100%" }}>
      <Col xs={4} md={2}>
        <Nav className="mr-auto">
          <Nav.Link href="/products">Home</Nav.Link>      
        </Nav>
      </Col>
      <Col xs={4} md={6} style={{ right: 0 }}>
      
      </Col>
      <Col xs={2} md={1}>
        <Nav.Link>
          <div style={{ color: "white" }}>
            <Row>
              <Col xs={4} md={3}></Col>
              <Col xs={1} md={3}>
                <Link to="/Shopping">
                  <FontAwesomeIcon
                    icon={faShoppingBasket}
                    size="lg"
                    color="white"
                  ></FontAwesomeIcon>
                </Link>
              </Col>
            </Row>
          </div>
        </Nav.Link>
      </Col>
    </Row>
  </Navbar>
  );
};

export default Header;
