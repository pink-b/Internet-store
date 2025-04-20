import React from 'react';
import { Context } from '..';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useContext } from 'react';
import { ADMIN_ROUTE, AUTH_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, DEVICE_ROUTE  } from "../utils/consts"
import {observer} from 'mobx-react-lite'

const SiteNavbar = observer(() => {
  const { user } = useContext(Context);
  return (
      <div>
          <Navbar expand="lg" className="bg-dark">
              <Container>
                  <Navbar.Brand>
                      <Nav.Link to={SHOP_ROUTE} className="text-light">Купи девайс</Nav.Link>
                  </Navbar.Brand>
                  {user.isAuth ? (
                      <>
                          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                          <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="me-auto"> {/* Сдвигаем элементы влево */}
                                  <Nav.Link className="text-light">Админ панель</Nav.Link>
                                  <Nav.Link className="text-light" onClick={() => user.setIsAuth(false)}>Выйти</Nav.Link>
                              </Nav>
                          </Navbar.Collapse>
                      </>
                  ) : (
                      <>
                          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                          <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="me-auto">
                                  <Nav.Link className="text-light" onClick={() => user.setIsAuth(true)}>Авторизация</Nav.Link>
                              </Nav>
                          </Navbar.Collapse>
                      </>
                  )}
              </Container>
          </Navbar>
      </div>
  );
});

export default SiteNavbar;