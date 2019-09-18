import React, { Component } from 'react';
import TruckContainer from "./TruckContainer"
import Header from "../components/Header"
import Navbar from "../components/NavBar"
import MapContainer from "./MapContainer"



class DashBoard extends Component {
    constructor() {
        super();
        this.state = {
            trucks: []
        }
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

    render() {
        return (
            <div>
                <div className="ui two column grid">
                    <TruckContainer trucks={this.state.trucks} />
                    <MapContainer handlePinClick={this.handlePinClick} trucks={this.state.trucks} />
                </div>
            </div>
        );
    }
}

export default DashBoard;