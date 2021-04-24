// import Head from 'next/head'
// import styles from '../styles/Home.module.css'

// import React, {useEffect} from 'react';

// // import RecentlySearchedCities from "../components/RecentlySearchedCities";
// // import FiveDayForcast from "../components/FiveDayForcast";
// // import TodaysWeather from "../components/TodaysWeather";
// import CurrentCity from "../components/CurrentCity";
// // import Search from "../components/Search";

// import {Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

// export default function Home() {

//   // use state or local storage for the previously searched? 
//   // whatever was the last searched is the currently displayed if you leave
//   // and come back to the page?
  
//   useEffect(() => {

//     // ON LOAD ASK FOR PERMISSION TO GRAB CURRENT LOCATION TO DISPLAY THAT LOCATIONS WEATHER
//       // if they say yes grab lat/lon and do a search
//       // https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
//       // else
//       // pull the search for Denver, CO lat/lon

//   }, []);
    
//   handleSearch(() => {

//     // DO WE DO OUR ASYNC CALLS HERE AND THEN PASS THEM AS PROPS TO EACH OF THE COMPONENTS??
//     // let apiKey = process.env.REACT_APP_WEATHER_API_KEY;
//     // or let call = `https://api.openweathermap.org/data/2.5/weather?q={searchTerm}&appid={process.env.REACT_APP_WEATHER_API_KEY}`
//     // the search term can be just a city, or a city and state but spelled out fully? 

//     // or look up lon and lat based on search term? 
//     // then pass that to the api call
//     // https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//   })



//     return (
//     // 1)
//     // Head with "Weather Dashboard"
//     // [cloud icon?]
//     <div>
//       <Head>
//         <title>Weather Dashboard</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* 2)
//         Hero Image with "Weather Dashboard"
//         Just do navbar for now
//         Background image randomly generates on refresh to different weather images? MAYBE LATER
//         City name displays here, search bar is available here */}

//       {/* VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV */}
//       {/* STILL TO DO: STYLE */}
//       {/* LINK SEARCH TO API CALL, LINK CURRENT CITY NAME DYNAMIC */}
//       {/* VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV */}


//       <Navbar sticky="top" bg="light" expand="lg">
//         <Navbar.Brand href="#home">Weather Dashboard</Navbar.Brand>

//         {/* VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV */}
//         {/* PUT THE CURRENT CITY HERE WHEN CURRENT CITY HAS A VALUE */}
//         {/* VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV */}
//         {/* city={city} */}
//         <CurrentCity  />

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">  
//           <Form inline  >
//             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Navbar>


//        {/* 3)
//        Left hand column is 2/3 of page
//        first row is current city being viewed and city's information
//        second row is the five day forcast for that city
//        has blurred border
//        Right hand column is 1/3 of page
//        first row is the recently searched cities
//        has blurred border */}
//       <Container>

//         <Row>
//           <Col sm={12} md={8} className={styles.bkg}>
//             <h4> TEST CONTAINTER/ROW/1st COL</h4>
//             {/* VVVVVVVVVVV MAKE THIS A COMPONENT VVVVVVVVVVV */}
//             {/* <div className="shadow-lg p-3 mb-5 bg-white rounded mt-5">
//               <h1> TODAYS DATE AND WEATHER ICON FOR TODAY </h1>
//               <h3>Temp</h3>
//               <h3>Humidity</h3>
//               <h3>Wind Speed</h3>
//               <h3>UV Index and Index Icon</h3> */}
//               {/* weatherToday={weatherToday} */}
//               {/* <TodaysWeather /> */}


//               {/* VVVVVVVVVVV MAKE THIS A COMPONENT VVVVVVVVVVV */}
//               {/* <div>
//                 Internal box with Five day forcast in a spreadsheet type format
//               </div> */}
//                {/* fiveDayInfo={fiveDayInfo} */}
//               {/* <FiveDayForcast /> */}
//             {/* </div> */}
//           </Col>
          
//           <Col md={{span: 2, offset: 2}} className={styles.bkg}>
//             <h4> TEST CONTAINTER/ROW/1st COL</h4>

//             {/* VVVVVVVVVVV MAKE THIS A COMPONENT VVVVVVVVVVV */}
//             {/* <div className="shadow-lg p-3 mb-5 bg-white rounded mt-md-5 mt-sm-0">Recently searched cities' links</div> */}
//             {/* dataInRecentHistory={dataInRecentHistory} */}
//             {/* <RecentlySearchedCities /> */}
//           </Col>
//         </Row>


//       </Container>
      
//       {/* VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV */}
//       {/* I DO WANT A FOOTER EVENTUALLY, TO PUT INFO ABOUT THE    */}
//       {/* API AND SUCH AT THE BOTTOM OF THE PAGE                  */}
//       {/* VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV */}

//     </div>
//   )
// }

// // VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// //   OLD CODE FROM NEXT EXAMPLE
// // VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

//         // <main className={styles.main}>
//         //   <h1 className={styles.title}>
//         //     Welcome to <a href="https://nextjs.org">Next.js!</a>
//         //   </h1>

//         //   <p className={styles.description}>
//         //     Get started by editing{' '}
//         //     <code className={styles.code}>pages/index.js</code>
//         //   </p>

//         //   <div className={styles.grid}>
//         //     <a href="https://nextjs.org/docs" className={styles.card}>
//         //       <h3>Documentation &rarr;</h3>
//         //       <p>Find in-depth information about Next.js features and API.</p>
//         //     </a>

//         //     <a href="https://nextjs.org/learn" className={styles.card}>
//         //       <h3>Learn &rarr;</h3>
//         //       <p>Learn about Next.js in an interactive course with quizzes!</p>
//         //     </a>

//         //     <a
//         //       href="https://github.com/vercel/next.js/tree/master/examples"
//         //       className={styles.card}
//         //     >
//         //       <h3>Examples &rarr;</h3>
//         //       <p>Discover and deploy boilerplate example Next.js projects.</p>
//         //     </a>

//         //     <a
//         //       href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//         //       className={styles.card}
//         //     >
//         //       <h3>Deploy &rarr;</h3>
//         //       <p>
//         //         Instantly deploy your Next.js site to a public URL with Vercel.
//         //       </p>
//         //     </a>
//         //   </div>
//         // </main>

//       //   <footer className={styles.footer}>
//       //   <a
//       //     href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//       //     target="_blank"
//       //     rel="noopener noreferrer"
//       //   >
//       //     Powered by{' '}
//       //     <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//       //   </a>
//       // </footer>