import React from "react";
import {
  Route,
  BrowserRouter
} from "react-router-dom";

// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from "./pages/Dashboard"
import Header from "./components/Header/Header"

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


    <BrowserRouter>
    <div>
      <Header />

      {/* <Switch> */}
        <Route exact path={["/", "/home"]}>
          <Dashboard />
        </Route>
        {/* <Route path={"/project/:id"}>
          <Projects />
        </Route>
        <Route path={"/article/:id"}>
          <Articles />
        </Route>
        <Route>
          <NoMatch />
        </Route> */}
      {/* </Switch> */}

      {/* <Footer /> */}
    </div>
  </BrowserRouter>

  );
}

export default App;
