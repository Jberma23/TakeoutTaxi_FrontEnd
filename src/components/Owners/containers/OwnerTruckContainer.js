import React, { Component } from 'react';
import OwnerTruck from "../components/OwnerTruck"

class OwnerTruckContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: props.currentUser
        }
    }


    renderOwnerTrucks = () => {
        return this.props.trucks.map((truck) => {
            if (truck.owner_id === this.props.currentUser.id) {
                return <OwnerTruck handleCheckIn={this.props.handleCheckIn} getLocation={this.props.getLocation} key={truck.id} truck={truck} handleCheckInForm={this.props.handleCheckInForm} />
            } else {
                return null
            }
        }
        )
    }



    render() {
        return (

            <div id="child" >

                {this.renderOwnerTrucks()}

            </div>



        );
    }
}

export default OwnerTruckContainer;