import React from 'react'; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import InvalidPath from "./components/InvalidPath";
import HomeContainer from "./components/HomeContainer";
import UserHome from './components/user/UserHome'; 
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
        <NavBar />
         <Switch>
          <Route path="/signup" component={UserSignUp} />
          <Route path="/login" component={UserLogIn} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/home" component={UserHome} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/dashboard" component={UserDashboard} />
          <Route path="/search" component={UserSearch} />
          <Route path="/userjobs" component={UserJobs} />
          <Route path="/usercompanies" component={UserCompanies} />
          <Route>
            <InvalidPath />
          </Route>
         </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
