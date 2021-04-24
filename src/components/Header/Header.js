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

import React from "react";
import {Jumbotron, Container, Row, Col} from "react-bootstrap"

// import CurCity from "../CurCity/CurCity"

const Header = () => {


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