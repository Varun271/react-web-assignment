import React, { Component } from 'react';
import logo from './logo.svg';
// import Navbar from './components/Navbar/Navbar'
// import Carousel from './components/Carousel/Carousel'
// import Navi from './components/BelowNavBar/Navi'
//import Table from './components/Table/Table'
// import Card from './components/Card/Card'
// import Footer from './components/Footer/Footer'
import MainPage from './components/Offers/MainPage'
import HomePage from './components/HomePage/HomePage'
import GiftCard from './components/Gift Card/GiftCard'
import Login from './components/Login/ValidateLoginForm'
import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class App extends Component {
  render () {
    return (
      <div className="body">
        <Router>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={HomePage}>
          <HomePage/> 
          </Route>
          <Route path="/offers" exact component={MainPage}>
          <MainPage/>
          </Route>
          <Route path="/giftcard" exact component={GiftCard}>
          <GiftCard/> 
          </Route>
          <Route path="/login" exact component={Login}>
          <Login/> 
          </Route>
        </Switch>
    </Router>
       
        {/* <Navbar/>
        <Navi/>
        <Carousel/>
        <Card/>
        <Footer/> */}
      </div>
  
    )
  }
}



