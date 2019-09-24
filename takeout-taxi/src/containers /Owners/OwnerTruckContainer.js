import React, { Component } from 'react';
import OwnerTruck from "../../components/Owners/OwnerTruck"
import OwnerTruckForm from "../../components/Owners/OwnerTruckForm"
class OwnerTruckContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: props.currentUser
        }
    }


    renderOwnerTrucks = () => {
        return this.props.trucks.filter(truck => truck.user_id == this.props.currentUser.id).map(truck => { return <OwnerTruck getLocation={this.props.getLocation} key={truck.id} truck={truck} /> })
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