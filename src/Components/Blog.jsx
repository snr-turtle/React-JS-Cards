// import React, { useEffect, useState } from "react";
import classess from "./Blog.module.css";
import "../App.css";
// import { Button, Row, Col } from 'react-bootstrap';

// const Blog = () => {
//   return (
//     <div>
//       <div className={classess.navbar}>
//         <a href="#">
//           <h1>МШ2</h1>
//         </a>
//         <div className={classess.contacts}>
//           <a href="#about">About</a>
//           <a href="#project">Project</a>
//           <a href="#contact">Contact</a>
//         </div>
//       </div>

//       <div className={classess.btns}>
//         <Row className="mx-0">
//           <Button as={Col} variant="primary">
//             Button #1
//           </Button>
//           <Button as={Col} variant="secondary" className="mx-2">
//             Button #2
//           </Button>
//           <Button as={Col} variant="success">
//             Button #3
//           </Button>
//         </Row>
//       </div>
//     </div>
//   );
// };

// export default Blog;

import React, { useState, useEffect } from "react";
import {
  // Button,
  // Modal,
  // FormControl,
  Navbar,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";

const ModalRegistration = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div className={classess.all}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />

      <div className={classess.allCard}>
        <div className={classess.wrapper}>
          {todos.map((item, index) => (
            <div className={classess.card} key={index}>
              <h4 className={classess.title}>
                {/* <span>#{item.id}</span> */}
                {item.title}
              </h4>
              <br />
              <img src={item.image} alt="" className={classess.img} />
              <h5 className={classess.description}>{item.description}</h5>
              <br />
              <span className={classess.price}>
                <span> $</span>
                {item.price}
              </span>
              <br />
              <div className={classess.reyting}>
                <div>{item.rating.rate}</div>
                <div>{item.rating.count}</div>
              </div>
              <button className={classess.button}>Buy</button>
              <br />
              <br />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="mx-auto">
        <Button variant="info" onClick={handleShow} className="btn">
          Launch demo modal
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            placeholder="UserName"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
};

export default ModalRegistration;
