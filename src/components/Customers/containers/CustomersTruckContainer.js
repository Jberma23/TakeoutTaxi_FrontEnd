import React, { Component } from 'react';
import Truck from "../components/CustTruck"

class CustomerTruckContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trucks: this.props.trucks,
            currentUser: this.props.currentUser
        }
    }



    renderAllTrucks = () => {

        return this.props.trucks.map(truck => <Truck selectedTruck={this.props.selectedTruck} handleCommentSubmit={this.props.handleCommentSubmit} handleFavorite={this.props.handleFavorite} currentUser={this.props.currentUser} handleRate={this.props.handleRate} favoriteTrucks={this.props.favoriteTrucks} handleFavoriteDelete={this.props.handleFavoriteDelete} key={truck.id} truck={truck} />)
    }






    render() {
        return (
            <div className="four wide column" style={{ overflow: "scroll", marginLeft: '0.5%' }} >


                {this.renderAllTrucks()}

            </div>

        );
    }
}

export default CustomerTruckContainer;