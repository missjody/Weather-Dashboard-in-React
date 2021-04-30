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

    // const [city, setCity] = useState("Denver, CO")
    const [lat, setLat] = useState(39.59)
    const [lon, setLon] = useState(-104.97)
    const [fetchedCity, setFetchedCity] = useState([])
    // const [fetchedWeather, setFetchedWeather] = useState([])
    const [fetchedIcon, setFetchedIcon] = useState("")
    const [fetchedTemp, setFetchedTemp] = useState(0)
    let fetchCityLink = ""
    let weatherLink = ""
    let fetchedIconLink = "test"
    
    useEffect(() => {

        // use if it is available or not to decide what to give CurCity/set state to
        if ("geolocation" in navigator) {
            // console.log("Available");

            navigator.geolocation.getCurrentPosition(function(position) {
                // console.log("Called information, " + lat + ", " + lon + ", " + city);
                // console.log("Latitude is :", position.coords.latitude.toFixed(2));
                // console.log("Longitude is :", position.coords.longitude.toFixed(2));

                setLat(position.coords.latitude.toFixed(2))
                setLon(position.coords.longitude.toFixed(2))

            });

            fetchCityLink = "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" + lat + "&longitude=" + lon + "&localityLanguage=en";
            weatherLink = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat +"&lon=" + lon + "&appid=" + process.env.REACT_APP_API_KEY;
            
            Promise.all([
                fetch(fetchCityLink),
                fetch(weatherLink)
            ])
            .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
            .then(([data1, data2]) => {
                setFetchedCity(data1.city + ", " + data1.principalSubdivisionCode)
                setFetchedIcon(data2.current.weather[0].icon)
                let Ktemp =  ((data2.current.temp - 273) * (9/5) + 32);
                let Ftemp = Math.floor(Ktemp);
                setFetchedTemp(Ftemp);
            })
            
            
            
            
        }
        
        
    })
    
    fetchedIconLink = "http://openweathermap.org/img/wn/" + fetchedIcon + "@2x.png"
    console.log("is the img broken?? ", fetchedIconLink) // it's not btw

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
                    <Col> <img alt="weatherIcon" src={fetchedIconLink}/> {fetchedTemp}° </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
  }
  
  
  export default Header;



     // Do call for the api to set the new city
            // fetch(fetchCityLink) 
            //     .then(res => res.json())
            //     .then((result) => {
            //         // console.log("Did it work? ", fetchedCity)
         
            //         setFetchedCity(result.city + ", " + result.principalSubdivisionCode)

            //     })
                // Do call for the new lat/lon for weather information
                // set it to a variable? or a state? -- state, for reasons
                // does this need to be called in a line with the last fetch -- yes otherwise it gets skipped
                // .then(fetch(weatherLink)
                // .then(res2 => res2.json())
                // .then((result2) => {
                //     // console.log("Did weather fetch work? ", result.current.temp)
                //     setFetchedIcon(result2.current.weather[0].icon)
                //     let Ktemp =  ((result2.current.temp - 273) * (9/5) + 32);
                //     let Ftemp = Math.floor(Ktemp);
                //     setFetchedTemp(Ftemp);
                // }).then(
                //     fetchedIconLink = "http://openweathermap.org/img/wn/" + fetchedIcon + "@2x.png"
                // )
                
            
            //   } else {
                
                // console.log("Use Default, " + lat + ", " + lon + ", " + city);
                
                // Do call for the lat/lon for weather information
                // set it to a variable? or a state?