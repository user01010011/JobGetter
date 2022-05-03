import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import InvalidPath from "./components/InvalidPath";
import HomeContainer from "./components/HomeContainer";
import UserHome from "./components/user/UserHome";
import UserSignUp from "./components/user/UserSignUp";
import UserLogIn from "./components/user/UserLogIn";
import UserSearch from "./components/user/UserSearch";
import UserProfile from "./components/user/UserProfile";
import UserDashboard from "./components/user/UserDashboard";
import UserJobs from "./components/user/UserJobs";
import UserCompanies from "./components/user/UserCompanies";

import "./App.css";

// import background from "./images/background1.png";
// style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', }}

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app-navbar">
          <NavBar />
          <Switch>
            <Route path="/signup" component={UserSignUp} />
            <Route path="/login" component={UserLogIn} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
        <div className="app-main">
          <HomeContainer />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
