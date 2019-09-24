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

    return this.props.trucks.map(truck => <Truck key={truck.id} truck={truck} />)
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