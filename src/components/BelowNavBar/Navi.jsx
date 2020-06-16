import React from 'react'
import "./style.scss"
import * as ReactBootStrap from "react-bootstrap";



export default function Navi() {
  return (
    <div className="margintop">
    <ReactBootStrap.Navbar collapseOnSelect expand="lg" className="color" variant="dark" style={{height:"40px"}}>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#features">Movies</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing">Offer</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing">Gift Card</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
</div>
  )
}