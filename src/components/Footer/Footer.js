import React from 'react'
import "./footer.css"
import * as ReactBootStrap from "react-bootstrap";


const Footer =()=>{
    return(
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
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Movies4u | All rights Reserved | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;