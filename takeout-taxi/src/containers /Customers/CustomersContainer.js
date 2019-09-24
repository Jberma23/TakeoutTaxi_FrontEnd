import React, { Component } from 'react';
import CustomerTruckContainer from "./CustomersTruckContainer"
import CustomerHeader from "../../components/Customers/CustHeader"
import CustomerMapContainer from "./CustomerMapContainer"


class CustomerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <CustomerHeader onChange={this.props.handleSearch} currentUser={this.props.currentUser} searchTerm={this.props.searchTerm} handleUserLogOut={this.props.handleUserLogOut} />
                <div id="border" className="ui two column grid">
                    <CustomerTruckContainer currentUser={this.props.currentUser} trucks={this.props.filteredTrucks} />
                    <CustomerMapContainer currentUser={this.props.currentUser} latitude={this.props.latitude} longitude={this.props.longitude} handlePinClick={this.handlePinClick} trucks={this.props.filteredTrucks} />
                </div>
            </div>

        );
    }
}

export default CustomerContainer;