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
import Footer from "./components/Footer"

function App() {
  return (
 
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
        <Route>
          <NoMatch />
        </Route> */}
      {/* </Switch> */}

      <Footer />
    </div>
  </BrowserRouter>

  );
}

export default App;
