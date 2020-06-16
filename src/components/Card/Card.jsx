import React from 'react'
//import "./style.scss"
import * as ReactBootStrap from "react-bootstrap";
import CardDeck from 'react-bootstrap/CardDeck'



export default function Card() {
  return (
      <>
      <div>
          <h3> Popular Movies</h3>
    <ReactBootStrap.CardDeck>
    <ReactBootStrap.Card>
      <ReactBootStrap.Card.Img variant="top" src="https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <ReactBootStrap.Card.Body>
        <ReactBootStrap.Card.Title>Movie Name</ReactBootStrap.Card.Title>
        <div ><h6>Genre</h6></div>
        <div ><h6>Cast</h6></div>
      </ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </ReactBootStrap.Card.Footer>
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
  <div> <h3> Plays</h3>
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
  <div> <h3> Events</h3>
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
</>
  )
}