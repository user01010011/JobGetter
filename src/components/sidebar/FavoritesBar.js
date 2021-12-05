import React, {Component} from "react";
import { connect } from "react-redux";

import FavoritesCard from "./FavoritesCard";
// import { getFavorites, deleteFavorites } from "../../redux/actions/Favorites";
import { showFavorites, deleteFavorites } from "../../redux/actions/Favorites";


class FavoritesBar extends Component {
    componentDidMount() {
        this.props.showFavorites(this.props.currentUser)
    }
    render() {
        return (
            <div>
                <h3>Favorite Jobs: </h3>
                {this.props.favorites.map((job, i) => 
                    <FavoritesCard 
                        job={job} 
                        key={i + 1} 
                        id={i + 1} 
                        currentUser={this.props.currentUser} 
                        // clear={() => (this.props.clearFavorites(job, this.props.currentUser))} 
                        delete={() => (this.props.deleteFavorites(job, this.props.currentUser))} 
                        show={() => (this.props.showFavorites(job, this.props.currentUser))} 
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

// export default connect(mapStateToProps, { getFavorites, deleteFavorites })(FavoritesBar);
export default connect(mapStateToProps, { showFavorites, deleteFavorites })(FavoritesBar);