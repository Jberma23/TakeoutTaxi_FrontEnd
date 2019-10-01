import React, { Component } from 'react';
import OwnerTruck from "../../components/Owners/OwnerTruck"

class OwnerTruckContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: props.currentUser
        }
    }


    renderOwnerTrucks = () => {
        return this.props.trucks.filter(truck => truck.user_id == this.state.currentUser.id).map((truck) =>
            <OwnerTruck handleCheckIn={this.props.handleCheckIn} getLocation={this.props.getLocation} key={truck.id} truck={truck} handleCheckInForm={this.props.handleCheckInForm} />
        )
    }



    render() {
        return (
            <React.Fragment>
                <div className="ui one column grid " style={{ paddingTop: "0.0rem", height: "80vh", width: "30%", overflow: "scroll" }} >

                    {this.renderOwnerTrucks()}

                </div>

            </React.Fragment>

        );
    }
}

export default OwnerTruckContainer;