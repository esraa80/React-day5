import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  Dropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrency, selectSelectedCurrency } from "../store/slices/CurrencySlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(selectSelectedCurrency);

  const handleCurrencyChange = (currency) => {
    dispatch(selectCurrency(currency));
  };

  return (
    <BootstrapNavbar expand="lg" className="bg-body-tertiary w-100">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          React-Bootstrap
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Movies">
              Movies
            </Nav.Link>
            <Nav.Link as={Link} to="/Register">
              Signup
            </Nav.Link>
            
            <Nav.Link as={Link} to="/Login">
              Login
            </Nav.Link>
          </Nav>
          
          <select
            value={selectedCurrency}
            onChange={(e) => handleCurrencyChange(e.target.value)}
            className="form-select text-dark"
          >
            <option value="E.L">E.L</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
