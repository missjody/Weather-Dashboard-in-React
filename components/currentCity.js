// {/* VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV */}
// {/* PUT THE CURRENT CITY HERE WHEN CURRENT CITY HAS A VALUE */}
// {/* VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV */}
// <currentCity city={city} />
// {/* <p className="mr-auto ml-auto mt-3">Current City: Dynamically Insert City Name Here</p> */}

import React from 'react';
import {Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import styles from "./CurrentCity.module.css"


const CurrentCity = () => {
    // if (city) {
    //     //display city
    //     return (
    //         <h5> woops </h5>
    //     )
    // } else {
        return ( 
        //display nothing
        <Row className={styles.custom}>
            <Col >
                <h5> test </h5>
            </Col> 
        </Row>
        )
    // }
}

export default CurrentCity;