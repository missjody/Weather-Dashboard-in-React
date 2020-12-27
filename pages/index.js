import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import recentlySearchedCities from "../components/recentlySearchedCities";
import fiveDayForcast from "../components/fiveDayForcast";
import todaysWeather from "../components/todaysWeather";
import currentCity from "../components/currentCity";

import {Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

// DO WE DO OUR ASYNC CALLS HERE AND THEN PASS THEM AS PROPS TO EACH OF THE COMPONENTS??

// ON LOAD ASK FOR PERMISSION TO GRAB CURRENT LOCATION TO DISPLAY THAT LOCATIONS WEATHER

export default function Home() {
    
  return (
    // 1)
    // Head with "Weather Dashboard"
    // [cloud icon?]
    <div>
      <Head>
        <title>Weather Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 2)
        Hero Image with "Weather Dashboard"
        Just do navbar for now
        Background image randomly generates on refresh to different weather images? MAYBE LATER
        City name displays here, search bar is available here */}

      {/* VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV */}
      {/* STILL TO DO: STYLE */}
      {/* LINK SEARCH TO API CALL, LINK CURRENT CITY NAME DYNAMIC */}
      {/* VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV */}


      <Navbar sticky="top" bg="light" expand="lg">
        <Navbar.Brand href="#home">Weather Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">  
 
          {/* VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV */}
          {/* PUT THE CURRENT CITY HERE WHEN CURRENT CITY HAS A VALUE */}
          {/* VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV */}
          {/* city={city} */}
          <currentCity  />
    

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>


       {/* 3)
       Left hand column is 2/3 of page
       first row is current city being viewed and city's information
       second row is the five day forcast for that city
       has blurred border
       Right hand column is 1/3 of page
       first row is the recently searched cities
       has blurred border */}
      <Container>

        <Row>
          <Col sm={12} md={8}>

            {/* VVVVVVVVVVV MAKE THIS A COMPONENT VVVVVVVVVVV */}
            {/* <div className="shadow-lg p-3 mb-5 bg-white rounded mt-5">
              <h1> TODAYS DATE AND WEATHER ICON FOR TODAY </h1>
              <h3>Temp</h3>
              <h3>Humidity</h3>
              <h3>Wind Speed</h3>
              <h3>UV Index and Index Icon</h3> */}
              {/* weatherToday={weatherToday} */}
              <todaysWeather />


              {/* VVVVVVVVVVV MAKE THIS A COMPONENT VVVVVVVVVVV */}
              {/* <div>
                Internal box with Five day forcast in a spreadsheet type format
              </div> */}
               {/* fiveDayInfo={fiveDayInfo} */}
              <fiveDayForcast />
            {/* </div> */}
          </Col>
          
          <Col>

            {/* VVVVVVVVVVV MAKE THIS A COMPONENT VVVVVVVVVVV */}
            {/* <div className="shadow-lg p-3 mb-5 bg-white rounded mt-md-5 mt-sm-0">Recently searched cities' links</div> */}
            {/* dataInRecentHistory={dataInRecentHistory} */}
            <recentlySearchedCities />
          </Col>
        </Row>


      </Container>
      
      {/* VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV */}
      {/* I DO WANT A FOOTER EVENTUALLY, TO PUT INFO ABOUT THE    */}
      {/* API AND SUCH AT THE BOTTOM OF THE PAGE                  */}
      {/* VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV */}

    </div>
  )
}

// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
//   OLD CODE FROM NEXT EXAMPLE
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

        // <main className={styles.main}>
        //   <h1 className={styles.title}>
        //     Welcome to <a href="https://nextjs.org">Next.js!</a>
        //   </h1>

        //   <p className={styles.description}>
        //     Get started by editing{' '}
        //     <code className={styles.code}>pages/index.js</code>
        //   </p>

        //   <div className={styles.grid}>
        //     <a href="https://nextjs.org/docs" className={styles.card}>
        //       <h3>Documentation &rarr;</h3>
        //       <p>Find in-depth information about Next.js features and API.</p>
        //     </a>

        //     <a href="https://nextjs.org/learn" className={styles.card}>
        //       <h3>Learn &rarr;</h3>
        //       <p>Learn about Next.js in an interactive course with quizzes!</p>
        //     </a>

        //     <a
        //       href="https://github.com/vercel/next.js/tree/master/examples"
        //       className={styles.card}
        //     >
        //       <h3>Examples &rarr;</h3>
        //       <p>Discover and deploy boilerplate example Next.js projects.</p>
        //     </a>

        //     <a
        //       href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        //       className={styles.card}
        //     >
        //       <h3>Deploy &rarr;</h3>
        //       <p>
        //         Instantly deploy your Next.js site to a public URL with Vercel.
        //       </p>
        //     </a>
        //   </div>
        // </main>

      //   <footer className={styles.footer}>
      //   <a
      //     href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Powered by{' '}
      //     <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      //   </a>
      // </footer>