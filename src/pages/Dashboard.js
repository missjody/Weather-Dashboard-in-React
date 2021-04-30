import React from "react";
import Search from "../components/Search"
import MainView from "../components/MainView"
import AdsColumn from "../components/AdsColumn"
import {Container, Row} from "react-bootstrap"

const Dashboard = () => {


    return (
      <Container fluid>
      
      <div style={{textAlign: "center"}}>
        <Row>
          <Search />
          <MainView />
          <AdsColumn />
        </Row>
      </div>
      </Container>
    )
  }
  
  
  export default Dashboard;