import React, { Component } from 'react';
import CustomerTruckContainer from "./CustomersTruckContainer"
import CustomerHeader from "../components/CustHeader"
import CustomerMapContainer from "./CustomerMapContainer"


class CustomerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTruck: null
        }
    }


    handleSelectedTruck = async (event) => {
        await this.setState({ selectedTruck: event.id })
        let num = event.id.split(" ")[0]
        let id = `truck-${num}`
        let element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' })
    }
    sortFavorites = () => {
        let userFavorites = this.props.filteredTrucks.map(t => t.favorites).filter(f => f.favorited_id === this.props.currentUser.id)
        debugger
        this.setState({ favorites: userFavorites })
    }


    render() {
        return (
            <div>
                <CustomerHeader onChange={this.props.handleSearch} currentUser={this.props.currentUser} searchTerm={this.props.searchTerm} handleUserLogOut={this.props.handleUserLogOut} />
                <div id="border" className="ui two column grid">
                    <CustomerTruckContainer selectedTruck={this.state.selectedTruck} handleFavorite={this.props.handleFavorite} handleCommentSubmit
                        ={this.props.handleCommentSubmit} handleFavoriteDelete={this.props.handleFavoriteDelete} favoriteTrucks={this.props.favoriteTrucks} handleCommentChange={this.props.handleCommentChange} currentUser={this.props.currentUser} trucks={this.props.filteredTrucks} handleRate={this.props.handleRate} />
                    <CustomerMapContainer handleSelectedTruck={this.handleSelectedTruck} currentUser={this.props.currentUser} trucks={this.props.filteredTrucks} apiKey={this.props.apiKey} favoriteTrucks={this.props.favoriteTrucks} favorites={this.props.trucks.map(t => t.favorites)} userFav={this.props.currentUser.favorites} />
                </div>
            </div>

        );
    }
}

export default CustomerContainer;