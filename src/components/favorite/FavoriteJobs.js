import React, { Component } from "react";
import { connect } from "react-redux";
import FavoriteJobCard from "./FavoriteJobCard";
import { getFavorites, deleteFavorites } from "../../redux/actions/Favorites";
// import { showFavorites, clearFavorites } from "../../redux/actions/Favorites";

import './Favorite.css';


class FavoriteJobs extends Component {
    componentDidMount() {
        this.props.getFavorites(this.props.currentUser)
        // this.props.showFavorites(this.props.currentUser)
    }
    render() {
        return (
            <div>
                <h3 className="header">Your Favorite Jobs ❤️ </h3>
                <button className="button is-warning" id="sort" onClick={this.handleOnClick}>Sort Favorites</button>
                {this.props.favorites.map((favjob, i) => 
                    <FavoriteJobCard 
                        favjob={favjob} 
                        key={i + 1} 
                        id={i + 1} 
                        currentUser={this.props.currentUser} 
                        delete={() => (this.props.deleteFavorites(favjob, this.props.currentUser))} 
                        // clear={() => (this.props.clearFavorites(job, this.props.currentUser))} 
                        show={() => (this.props.getFavorites(favjob, this.props.currentUser))} 
                        // show={() => (this.props.showFavorites(job, this.props.currentUser))} 
                    />)
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        favorites: state.favorites.favorites,
        currentUser: state.auth.currentUser
    })
}

export default connect(mapStateToProps, { getFavorites, deleteFavorites })(FavoriteJobs);
// export default connect(mapStateToProps, { showFavorites, clearFavorites })(FavoritesBar);