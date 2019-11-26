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
            <div className="ui grid" style={{ maxWidth: "100%", margin: "0.1%" }}>
                <div className="row">
                    <div className="sixteen wide column" style={{ height: "10vh", marginBottom: "2%", padding: "0" }}>
                        <CustomerHeader onChange={this.props.handleSearch} currentUser={this.props.currentUser} searchTerm={this.props.searchTerm} handleUserLogOut={this.props.handleUserLogOut} />
                    </div>
                </div>
                <div className="row" >
                    <div className="five wide column" id="parent" style={{ height: "81.5vh", margin: "0;", padding: "0" }}>
                        <CustomerTruckContainer selectedTruck={this.state.selectedTruck} handleFavorite={this.props.handleFavorite} handleCommentSubmit
                            ={this.props.handleCommentSubmit} handleFavoriteDelete={this.props.handleFavoriteDelete} favoriteTrucks={this.props.favoriteTrucks} handleCommentChange={this.props.handleCommentChange} currentUser={this.props.currentUser} trucks={this.props.filteredTrucks} handleRate={this.props.handleRate} />
                    </div>
                    <div className="eleven wide column" style={{ height: "81.5vh", margin: "0;", padding: "0" }}>
                        <CustomerMapContainer handleSelectedTruck={this.handleSelectedTruck} currentUser={this.props.currentUser} trucks={this.props.filteredTrucks} apiKey={this.props.apiKey} favoriteTrucks={this.props.favoriteTrucks} favorites={this.props.trucks.map(t => t.favorites)} userFav={this.props.currentUser.favorites} />
                    </div>
                </div>
            </div >

        );
    }
}

export default CustomerContainer;