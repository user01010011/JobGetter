import React from "react";
import { connect } from "react-redux";
import UserHome from "./user/UserHome";
import VisitorHome from "./VisitorHome";
import './Home.css';

const HomeContainer = (props) => {
    return (
        <div className="page-wrapper">
            {props.isLoggedIn ? 
                <UserHome /> 
                : 
                <VisitorHome />
            }
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        isLoggedIn: state.auth.loggedIn
    })
}

export default connect(mapStateToProps)(HomeContainer);