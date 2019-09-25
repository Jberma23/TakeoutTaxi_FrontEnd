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
                    <CustomerTruckContainer handleFavorite={this.props.handleFavorite} handleCommentSubmit
                        ={this.props.handleCommentSubmit} handleCommentChange={this.props.handleCommentChange} currentUser={this.props.currentUser} trucks={this.props.filteredTrucks} handleRate={this.props.handleRate} />
                    <CustomerMapContainer currentUser={this.props.currentUser} handlePinClick={this.handlePinClick} trucks={this.props.filteredTrucks} />
                </div>
            </div>

        );
    }
}

export default CustomerContainer;