import React, {Component} from "react";
import { connect } from "react-redux";

import FavoritesCard from "./FavoritesCard";
import { getFavorites, deleteFavorites } from "../../redux/actions/Favorites";


class FavoritesBar extends Component {
    componentDidMount() {
        this.props.getFavorites(this.props.currentUser)
    }
    render() {
        return (
            <div>
                {
                    this.props.favorites.map((job, i) => 
                    <FavoritesCard 
                        job={job} 
                        key={i + 1} 
                        id={i + 1} 
                        currentUser={this.props.currentUser} 
                        delete={() => (this.props.deleteFavorites(job, this.props.currentUser))} 
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

export default connect(mapStateToProps, { getFavorites, deleteFavorites })(FavoritesBar);