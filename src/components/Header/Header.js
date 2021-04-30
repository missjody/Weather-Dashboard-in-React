// this is at the top of the screen always

// on load it asks permission to see what your current city is
// if you say yes then...

//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
//                                                                                      //
//                                                                                      //
//  On this side                    WeatherDash                 Whatever is set to      //            
//  the current city                Logo                        the current city will   //
//  will display;                   goes here                   display weather icon    //
//  either automatically                                        and current temp here   //
//  or set in preferences                                                               //
//                                                                                      //
//                                                                                      //
//                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////

import React, {useEffect} from "react";
import {Jumbotron, Container, Row, Col} from "react-bootstrap"

// import CurCity from "../CurCity/CurCity"

const Header = () => {

    
    useEffect(() => {

        // use if it is available or not to decide what to give CurCity/set state to
        if ("geolocation" in navigator) {
            console.log("Available");
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log("Latitude is :", position.coords.latitude.toFixed(2));
                console.log("Longitude is :", position.coords.longitude.toFixed(2));
              });
            
          } else {
            console.log("Not Available");
          }

    })


    return (
        <Jumbotron fluid>
            <Container>
                <Row>
                    {/* <CurCity />  */}
                    <Col> Current City goes here </Col>
                    <Col> WeatherDash Logo Goes Here </Col>
                    <Col> Current City's Weather Icon and Current Temp </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
  }
  
  
  export default Header;