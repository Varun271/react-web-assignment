import React from 'react'
import "./style.scss"
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
}from 'react-router-dom';


export default function MainPage() {
    return (
        <>
            <div>
                <ReactBootStrap.Navbar collapseOnSelect expand="xl" className="color1" variant="dark">
                    <ReactBootStrap.Navbar.Brand href="#home" className="ml-auto">Movies4u</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Form inline>
                        <ReactBootStrap.FormControl type="text" style={{ "width": "200px" }} placeholder="Search" className="ml-5" />
                    </ReactBootStrap.Form>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="ml-8">
                            <ReactBootStrap.NavDropdown title="Language" id="collasible-nav-dropdown">
                                <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Divider />
                                <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
                            </ReactBootStrap.NavDropdown>
                        </ReactBootStrap.Nav>
                        <ReactBootStrap.Nav className="ml-6">
                            <ReactBootStrap.NavDropdown title="Location" id="collasible-nav-dropdown">
                                <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Divider />
                                <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
                            </ReactBootStrap.NavDropdown>
                            <Link to='/login'>
                            <ReactBootStrap.Button variant="light" className="ml-box" size='sm'>SignIn</ReactBootStrap.Button>{' '}
                            </Link>
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
            </div>

            <div className="margintop">
                <ReactBootStrap.Navbar collapseOnSelect expand="lg" className="color" variant="dark" style={{ height: "40px" }}>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="mr-auto">
                            <ReactBootStrap.Nav.Link href="#movies">Movies</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="#offer">Offer</ReactBootStrap.Nav.Link>
                            <Link to="/giftcard">
                            <ReactBootStrap.Nav.Link href="#giftcard">Gift Card</ReactBootStrap.Nav.Link>
                            </Link>
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
            </div>
            <div className="white">
                <h3>Offers</h3>
            </div>
            <div className="grey">
                <div class="row">
                    <div class="column">
                        <div class="card">
                            <h3>Card 1</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <h3>Card 2</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <h3>Card 3</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <h3>Card 4</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card" >
                            <h3>Card 5</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card" >
                            <h3>Card 6</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card" >
                            <h3>Card 7</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card" >
                            <h3>Card 8</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-footer">
                <div className="container">
                    <div className="row">

                        <div className="col">
                            <h6> Best Language Genre Movies</h6>
                            <ul className="list-unstyled">
                                <li>Comedy Movie</li>
                                <li>Action Movie</li>
                            </ul>
                        </div>

                        <div className="col">
                            <h6> Movies By Genre</h6>
                            <ul className="list-unstyled">
                                <li>Comedy Movie</li>
                                <li>Action Movie</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h6> Moview Reviews</h6>
                            <ul className="list-unstyled">
                                <li>Comedy Movie</li>
                                <li>Action Movie</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <p className="col-sm" style={{ textAlign: "center" }}>
                            &copy;{new Date().getFullYear()} Movies4u | All rights Reserved | Privacy
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}