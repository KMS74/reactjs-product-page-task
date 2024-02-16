import { useState } from 'react';
import {
  Button,
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Stack,
} from 'react-bootstrap';

import { HiMenuAlt1 } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineShoppingCart } from 'react-icons/md';

import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineShoppingBasket, MdPersonOutline } from 'react-icons/md';

import Logo from '../Logo/Logo';
import AdidasLogo from '../../assets/images/adidas-logo.svg';
import SearchBox from '../SearchBox/SearchBox';
import { FaRegHeart } from 'react-icons/fa';
import SpecialOffer from '../SpecialOffer/SpecialOffer';

const MainHeader = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Stack gap={1}>
      {/* top navbar */}
      <Navbar bg="secondary" data-bs-theme="light" className="shadow-sm">
        <Container>
          <div className="d-flex align-items-center gap-1">
            <Button variant="" className="btn" onClick={handleShow}>
              <HiMenuAlt1 size={24} />
            </Button>
            <Navbar.Brand>
              <Logo />
            </Navbar.Brand>
          </div>
          {/* special offer component */}
          <SpecialOffer />
          <Nav className="text-black">
            <Nav.Link className="d-flex align-items-center gap-2 text-black">
              <BsTelephone size={20} />
              <span className="fw-bold"> Contact Us</span>
            </Nav.Link>
            <Nav.Link className="d-flex align-items-center gap-2 text-black">
              <MdOutlineShoppingCart size={20} />
              <span className="fw-bold"> Track Order</span>
            </Nav.Link>
            <Nav.Link className="d-flex align-items-center gap-2 text-black">
              <HiOutlineLocationMarker size={20} />
              <span className="fw-bold">Find Store</span>
            </Nav.Link>
          </Nav>
        </Container>

        {/* Offcanvas */}
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>

      {/* bottom navbar */}
      <Navbar data-bs-theme="light">
        <Container>
          {/* search box */}
          <SearchBox />
          {/* adidas logo */}
          <Navbar.Brand href="#home">
            <img src={AdidasLogo} alt="adidas" />
          </Navbar.Brand>
          <Nav className="text-black gap-3">
            <Nav.Link className="d-flex align-items-center gap-2 text-black">
              <MdOutlineShoppingBasket size={32} />
              <span className="fw-bold"> Cart</span>
            </Nav.Link>
            <Nav.Link className="d-flex align-items-center gap-2 text-black">
              <FaRegHeart size={30} />
              <span className="fw-bold"> Wishlist</span>
            </Nav.Link>
            <Nav.Link className="d-flex align-items-center gap-2 text-black">
              <MdPersonOutline size={32} />
              <span className="fw-bold">Login</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Stack>
  );
};

export default MainHeader;
