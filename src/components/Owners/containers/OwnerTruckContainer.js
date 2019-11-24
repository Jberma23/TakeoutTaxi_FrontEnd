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
            <React.Fragment>
                <div className="ui one column grid " style={{ paddingTop: "0.0rem", height: "82vh", width: "30%", overflow: "scroll" }} >

                    {this.renderOwnerTrucks()}

                </div>

            </React.Fragment>

        );
    }
}

export default OwnerTruckContainer;