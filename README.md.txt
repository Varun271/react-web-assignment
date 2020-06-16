# Assignment 2 - Front End Development

#WEBSITE NAME - Movies4u

* Date Created: 10 JUN 2020
* Last Modification Date: 15 JUN 2020

## Authors

Name: VarunChauhan
Email id:vr805490@dal.ca

#Repository name on Github:-
react-web-assignment
Heroku app name :- movies4u

#PROJECT DESCRIPTION :-
Movies4u is a web application for the people who love to watch movies in a
multiplex theater. The application helps the users to book a ticket for the movie that
is currently being shown in the multiplex. The driving factor behind the application
is to reduce the time of ticket booking and make user life easy by providing an easy
and feasible solution through our website. Starting from movie selection, multiplex
selection, selecting food combos to payment options everything would take place
online. Users can rate the movie other than that they can pre-book tickets for the
movie that is not yet released. In a nutshell, the whole process of ticket booking
would take online and users from any age group would be able to book tickets.

#JUSTIFICATION FOR FRAMEWORK :-
React was used as the front end framework. The major reason for using react as front end was to learn about the new technology and to understand its working while
working on the project. Moreover, react provides with jsx wich is not yet available in other frameworks. With the help of jsx it becomes easy to blend in html 
and javascript to create components. The flexibilty of changing the building blocks gives the control to the developers to choose their style of building block.

#COLOR-SCHEME :-
The color scheme chosen is darkslategrey, white smoke and grey.
The color blend in together really well and gives a refreshing look to the website.

#BUILD WITH :-
Framework used is React.js
Code has been written on visual studio code.
React-Bootstrap classes are used to provide responsiveness. 
Formik library is used for the authentication in the web form.

#DEPLOYMENT :-
After creating the project on the local machine. It was then pushed to the GitHub repository with necessay server file which is used for deployment.
The project was then connected to heroku with the help of heroku gui. After successful deployment of the project a url is provided to access the end-points.

#LINKS TO THE 4 WEB PAGES CREATED :-
1)The home page link is : https://movies4u-react.herokuapp.com/
2)Offer page link is : https://movies4u-react.herokuapp.com/offers
3)Gift page link is : https://movies4u-react.herokuapp.com/giftcard
4)Signin page link is: https://movies4u-react.herokuapp.com/login

#VALIDATIONS :-
Basic validations are added with the help of formik library. Which checks for the email id and password and also verifies that the given email id is in the proper 
format or not. Also it will not allow the user the submit the form if both the fields are not present.

#SOURCES USED :-
1) Home Page- Homepage.jsx, 2) Offer Page- MainPage.jsx, 3) Gift Card Page- GiftCard.jsx
 <ReactBootStrap.Navbar collapseOnSelect expand="xl" className="color1" variant="dark">
                    {<ReactBootStrap.Navbar.Brand href="#home" className="ml-auto">Movies4u</ReactBootStrap.Navbar.Brand>
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
            </div>}
The code above was taken as the reference from react-bootstrap to create the navigation bar[react-bootstrap](https://react-bootstrap.github.io/components/navbar/)
2) Offer - MainPage.jsx
Lines -*****
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
The following code was taken from w3 schools to create card view [w3-schools](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_column_cards)

3)Giftcard- GiftCard.jsx , Homepage.jsx
Lines-*****
 <ReactBootStrap.CardDeck>
                    <ReactBootStrap.Card>
                        <ReactBootStrap.Card.Img variant="top" src="https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title>Gift Card</ReactBootStrap.Card.Title>
                        </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>
                    <ReactBootStrap.Card>
                        <ReactBootStrap.Card.Img variant="top" src="https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title>Gift Card</ReactBootStrap.Card.Title>
                        </ReactBootStrap.Card.Body>

                    </ReactBootStrap.Card>
                    <ReactBootStrap.Card>
                        <ReactBootStrap.Card.Img variant="top" src="https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title>Gift Card</ReactBootStrap.Card.Title>
                        </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>
                </ReactBootStrap.CardDeck>
                
                <ReactBootStrap.CardDeck>
                    <ReactBootStrap.Card>
                        <ReactBootStrap.Card.Img variant="top" src="https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title>Gift Card</ReactBootStrap.Card.Title>
                        </ReactBootStrap.Card.Body>

                    </ReactBootStrap.Card>
                    <ReactBootStrap.Card>
                        <ReactBootStrap.Card.Img variant="top" src="https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title>Gift Card</ReactBootStrap.Card.Title>
                        </ReactBootStrap.Card.Body>

                    </ReactBootStrap.Card>
                    <ReactBootStrap.Card>
                        <ReactBootStrap.Card.Img variant="top" src="https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title>Gift Card</ReactBootStrap.Card.Title>
                        </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>
                </ReactBootStrap.CardDeck>
The above code was taken from react-bootstrap for creation of card deck [react-bootstrap] (https://react-bootstrap.github.io/components/cards/)
## Acknowledgments
4) Login - Login.js
Lines - ****
import React from "react";
import { Formik } from "formik";
//import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import "./style.css";
import {
    BrowserRouter as Router,
    Link
}from 'react-router-dom';
const ValidatedLoginForm = () => (

  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    //********Handling validation messages yourself*******/
    // validate={values => {
    //   let errors = {};
    //   if (!values.email) {
    //     errors.email = "Required";
    //   } else if (!EmailValidator.validate(values.email)) {
    //     errors.email = "Invalid email address";
    //   }

    //   const passwordRegex = /(?=.*[0-9])/;
    //   if (!values.password) {
    //     errors.password = "Required";
    //   } else if (values.password.length < 8) {
    //     errors.password = "Password must be 8 characters long.";
    //   } else if (!passwordRegex.test(values.password)) {
    //     errors.password = "Invalida password. Must contain one number";
    //   }

    //   return errors;
    // }}
    //********Using Yum for validation********/

    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
      
        <div className="size">  
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button type="submit" disabled={isSubmitting} style={{marginTop:"10px"}}>
            Login
          </button>
        </form>
        </div>
      );
    }}
  </Formik>

);

export default ValidatedLoginForm;
The above line were taken for form validation [codesandbox](https://codesandbox.io/s/4203r4582w?file=/src/LoginForm.js)

#IMAGE REFERENCES:-
1) Page Home page 
website taken from:
    'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    "https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
2) Gift card Page
website taken from:
    'https://images.pexels.com/photos/2072150/pexels-photo-2072150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/849973/pexels-photo-849973.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/352782/pexels-photo-352782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
	

#ACKNOWLEDGEMENTS :-
1)React Bootstrap - https://react-bootstrap.github.io/
2)Youtube Channel- Arslan
3)Youtube Channel- James Q Quick

