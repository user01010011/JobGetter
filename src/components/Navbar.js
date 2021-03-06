import { connect, useDispatch } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";
import { userLogOut } from "../redux/actions/UserAuthentication";
import "./Navbar.css";

const NavBar = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const routeChange = (event) => {
    const path = event.target.name;
    history.push(path);
  };
  return (
    <div>
      <nav className="navbar">
        <nav className="navbar-left">
          <button
            className="navbar-button"
            id="home"
            name="/"
            onClick={routeChange}
          >
            Job Getter
          </button>
          <button
            className="navbar-button"
            id="about"
            name="/about"
            onClick={routeChange}
          >
            About
          </button>
          <button
            className="navbar-button"
            id="contact"
            name="/contact"
            onClick={routeChange}
          >
            Contact Us
          </button>
        </nav>
        <nav className="error-message navbar-end pt-3" style={{ color: "red" }}>
          {props.errorMessage}
        </nav>
        <nav className="navbar-right">
          {" "}
          {props.isLoggedIn ? (
            <div className="navbar-logout">
              <button
                className="navbar-button"
                id="logout"
                name="/logout"
                onClick={() => dispatch(userLogOut(history))}
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="navbar-auth">
              <button
                className="navbar-button"
                id="login"
                name="/login"
                onClick={routeChange}
              >
                Log In
              </button>
              <button
                className="navbar-button"
                id="signup"
                name="/signup"
                onClick={routeChange}
              >
                Sign Up
              </button>
            </div>
          )}
        </nav>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.loggedIn,
    errorMessage: state.auth.message || state.favorites.message,
  };
};

export default withRouter(connect(mapStateToProps)(NavBar));
