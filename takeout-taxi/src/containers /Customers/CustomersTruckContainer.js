import React, { Component } from 'react';
import Truck from "../../components/Customers/CustTruck"

class CustomerTruckContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trucks: this.props.trucks,
            currentUser: this.props.currentUser
        }
    }



    renderAllTrucks = () => {

        return this.props.trucks.map(truck => <Truck handleCommentSubmit={this.props.handleCommentSubmit} handleFavorite={this.props.handleFavorite} currentUser={this.props.currentUser} handleRate={this.props.handleRate} handleFavoriteDelete={this.props.handleFavoriteDelete} key={truck.id} truck={truck} />)
    }




    render() {
        return (
            <div className="ui one column grid " style={{ paddingTop: "0.0rem", height: "80vh", width: "30%", overflow: "scroll" }} >


                {this.renderAllTrucks()}

            </div>

        );
    }
}

export default CustomerTruckContainer;