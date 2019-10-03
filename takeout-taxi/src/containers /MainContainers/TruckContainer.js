import React, { Component } from 'react';
import Truck from "../../components/Truck"

class TruckContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trucks: this.props.trucks,
            currentUser: this.props.currentUser
        }
    }



    renderAllTrucks = () => {
        debugger
        return this.props.trucks.map(truck => <Truck key={truck.id} truck={truck} />)
    }
    renderOwnerTrucks = () => {
        return this.props.trucks.map(truck => truck.user_id === this.state.currentUser ? <Truck key={truck.id} truck={truck} /> : null)
    }



    render() {
        return (
            <div className="ui one column grid " style={{ paddingTop: "0.0rem", height: "90vh", width: "30%", overflow: "scroll" }} >
                {this.state.currentUser ?
                    this.renderOwnerTrucks()
                    :
                    this.renderAllTrucks()
                }
            </div>

        );
    }
}

export default TruckContainer;