import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/Navbar";
import HomeContainer from "./components/HomeContainer";
import UserSignUp from "./components/user/UserSignUp";
import UserLogIn from "./components/user/UserLogIn";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import InvalidPath from "./components/InvalidPath";
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
