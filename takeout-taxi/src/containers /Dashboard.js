import React, { Component } from 'react';

import CustomerContainer from "./Customers/CustomersContainer"
import OwnersContainer from "./Owners/OwnersContainer"


class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: props.user,
            trucks: [],
            searchTerm: ""
        }
    }
    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.")
        }
    }
    showPosition = (position) => {
        this.setState({
            currentUser: {
                ...this.state.currentUser,
                location: ({ longitude: position.coords.longitude, latitude: position.coords.latitude })
            }
        })
    }


    componentDidMount() {
        fetch("http://localhost:3000/trucks")
            .then(res => res.json())
            .then(data => { this.setState({ trucks: data }) })
            .catch(e => console.error(e))
    }

    handlePinClick = (event, truck) => {
        console.log(truck)
        debugger
    }
    handleSearch = (event) => {
        this.setState({ searchTerm: event.target.value })
    }

    render() {
        return (
            this.state.currentUser.role === "customer" ?
                <div>
                    {this.getLocation()}
                    <CustomerContainer onChange={this.handleSearch} currentUser={this.state.currentUser} searchTerm={this.state.searchTerm}
                        handleUserLogOut={this.props.handleUserLogOut}
                        filteredTrucks={this.state.trucks.filter((truck) => truck.name.includes(this.state.searchTerm))} handlePinClick={this.handlePinClick} trucks={this.state.trucks} />
                </div>
                :
                <div>
                    <OwnersContainer getLocation={this.getLocation} state={this.state} onChange={this.handleSearch} handleUserLogOut={this.props.handleUserLogOut} currentUser={this.state.currentUser} searchTerm={this.state.searchTerm}
                        filteredTrucks={this.state.trucks.filter((truck) => truck.name.includes(this.state.searchTerm))} handlePinClick={this.handlePinClick} trucks={this.state.trucks} />

                </div>

        );
    }
}

export default DashBoard;