import React, { Component } from 'react';
import Truck from "../components/Truck"

class TruckContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trucks: this.props.trucks
        }
    }



    renderTrucks = () => {
        return this.props.trucks.map(truck => <Truck key={truck.id} truck={truck} />)
    }


    render() {
        return (
            <div className="ui one column grid " style={{ paddingTop: "0.3rem", height: "100vh", width: "30%", overflow: "scroll" }} >

                {this.renderTrucks()}
            </div>

        );
    }
}

export default TruckContainer;