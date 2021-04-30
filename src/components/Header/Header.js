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
    const [fetchedCity, setFetchedCity] = useState([])
    let fetchCityLink = ""
    
    useEffect(() => {

        // use if it is available or not to decide what to give CurCity/set state to
        if ("geolocation" in navigator) {
            // console.log("Available");
            navigator.geolocation.getCurrentPosition(function(position) {
                // console.log("Latitude is :", position.coords.latitude.toFixed(2));
                setLat(position.coords.latitude.toFixed(2))
                // console.log("Longitude is :", position.coords.longitude.toFixed(2));
                setLon(position.coords.longitude.toFixed(2))
                console.log("Called information, " + lat + ", " + lon + ", " + city);
            });

            fetchCityLink = "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" + lat + "&longitude=" + lon + "&localityLanguage=en";
            
            // Do call for the api to set the new city
            fetch(fetchCityLink) 
                .then(res => res.json())
                .then((result) => {
                    setFetchedCity(result.city + ", " + result.principalSubdivisionCode)
                    console.log("Did it work? ", fetchedCity)
                // },
                // (error) => {
                //    setFetchedCity(error)
                // });
                    }
                )

            // Do call for the new lat/lon for weather information
            // set it to a variable? or a state?
            
          } else {
            console.log("Use Default, " + lat + ", " + lon + ", " + city);

            // Do call for the lat/lon for weather information
            // set it to a variable? or a state?
            
        }

    })


    return (
        <Jumbotron fluid>
            <Container>
                <Row>
                    {/* once all the calls are figured out we're going to call the 
                    individual components and pass them what is in sate */}
                    {/* <CurCity />  */}
                    <Col> {fetchedCity} </Col>
                    <Col> WeatherDash Logo Goes Here </Col>
                    {/* change image and temp over to call icon information */}
                    <Col> <img alt="weatherIcon" src="http://openweathermap.org/img/wn/10d@2x.png"/> and Current Temp </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
  }
  
  
  export default Header;