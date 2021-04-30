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

import React, {useState, useEffect} from "react";
import {Jumbotron, Container, Row, Col} from "react-bootstrap"

// import CurCity from "../CurCity/CurCity"

const Header = () => {

    const [city, setCity] = useState("Denver, CO")
    const [lat, setLat] = useState(39.59)
    const [lon, setLon] = useState(-104.97)
    
    useEffect(() => {

        // use if it is available or not to decide what to give CurCity/set state to
        if ("geolocation" in navigator) {
            console.log("Available");
            navigator.geolocation.getCurrentPosition(function(position) {
                // console.log("Latitude is :", position.coords.latitude.toFixed(2));
                setLat(position.coords.latitude.toFixed(2))
                // console.log("Longitude is :", position.coords.longitude.toFixed(2));
                setLon(position.coords.longitude.toFixed(2))
                console.log("Called information, " + lat + ", " + lon + ", " + city);
              });
            
          } else {
            console.log("Use Default, " + lat + ", " + lon + ", " + city);
          }

          // added the [] because it was running multiple time on load
    }, [])


    return (
        <Jumbotron fluid>
            <Container>
                <Row>
                    {/* <CurCity />  */}
                    <Col> {city} </Col>
                    <Col> WeatherDash Logo Goes Here </Col>
                    <Col> Current City's Weather Icon and Current Temp </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
  }
  
  
  export default Header;