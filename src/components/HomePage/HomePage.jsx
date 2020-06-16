import React from 'react'
import "./style.scss"
import * as ReactBootStrap from "react-bootstrap";
import { Slide } from 'react-slideshow-image';
import {
    BrowserRouter as Router,
    Link
}from 'react-router-dom';

const slideImages = [
    'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
];
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

export default function HomePage() {
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
                            <Link to="/login">
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
                            <Link to="/offers">
                            <ReactBootStrap.Nav.Link href="#offer">Offer</ReactBootStrap.Nav.Link>
                            </Link>
                            <Link to="/giftcard">
                            <ReactBootStrap.Nav.Link href="#giftcard">Gift Card</ReactBootStrap.Nav.Link>
                            </Link>
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
            </div>

            <div className="slide-container">
                <Slide {...properties}>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>

                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>

                        </div>
                    </div>
                </Slide>
            </div>

            <div >
                <h3 style={{textAlign:"center"}}> Popular Movies</h3>
                <ReactBootStrap.CardDeck>
                    <ReactBootStrap.Card>
                        <ReactBootStrap.Card.Img variant="top" src="https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title>Movie Name</ReactBootStrap.Card.Title>
                            <div ><h6>Genre</h6></div>
                            <div ><h6>Cast</h6></div>
                        </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>
                    <ReactBootStrap.Card>
                        <ReactBootStrap.Card.Img variant="top" src="https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title>Movie Name</ReactBootStrap.Card.Title>
                            <div ><h6>Genre</h6></div>
                            <div ><h6>Cast</h6></div>
                        </ReactBootStrap.Card.Body>

                    </ReactBootStrap.Card>
                    <ReactBootStrap.Card>
                        <ReactBootStrap.Card.Img variant="top" src="https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title>Movie Name</ReactBootStrap.Card.Title>
                            <div ><h6>Genre</h6></div>
                            <div ><h6>Cast</h6></div>
                        </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>
                </ReactBootStrap.CardDeck>
            </div>
            <div> <h3 style={{textAlign:"center"}}> Plays</h3>
                <ReactBootStrap.CardDeck>
                    <ReactBootStrap.Card>
                        <ReactBootStrap.Card.Img variant="top" src="https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title>Movie Name</ReactBootStrap.Card.Title>
                            <div ><h6>Genre</h6></div>
                            <div ><h6>Cast</h6></div>
                        </ReactBootStrap.Card.Body>

                    </ReactBootStrap.Card>
                    <ReactBootStrap.Card>
                        <ReactBootStrap.Card.Img variant="top" src="https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title>Movie Name</ReactBootStrap.Card.Title>
                            <div ><h6>Genre</h6></div>
                            <div ><h6>Cast</h6></div>
                        </ReactBootStrap.Card.Body>

                    </ReactBootStrap.Card>
                    <ReactBootStrap.Card>
                        <ReactBootStrap.Card.Img variant="top" src="https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title>Movie Name</ReactBootStrap.Card.Title>
                            <div ><h6>Genre</h6></div>
                            <div ><h6>Cast</h6></div>
                        </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>
                </ReactBootStrap.CardDeck></div>
            <div> <h3 style={{textAlign:"center"}}> Events</h3>
                <ReactBootStrap.CardDeck>
                    <ReactBootStrap.Card>
                        <ReactBootStrap.Card.Img variant="top" src="https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title>Movie Name</ReactBootStrap.Card.Title>
                            <div ><h6>Genre</h6></div>
                            <div ><h6>Cast</h6></div>
                        </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>
                    <ReactBootStrap.Card>
                        <ReactBootStrap.Card.Img variant="top" src="https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title>Movie Name</ReactBootStrap.Card.Title>
                            <div ><h6>Genre</h6></div>
                            <div ><h6>Cast</h6></div>
                        </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>
                    <ReactBootStrap.Card>
                        <ReactBootStrap.Card.Img variant="top" src="https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title>Movie Name</ReactBootStrap.Card.Title>
                            <div ><h6>Genre</h6></div>
                            <div ><h6>Cast</h6></div>
                        </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>
                </ReactBootStrap.CardDeck>
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
                        <p className="col-sm" style={{textAlign:"center"}}>
                                &copy;{new Date().getFullYear()} Movies4u | All rights Reserved | Privacy
                        </p>
                    </div>
                </div>
            </div>

        </>

    )
}