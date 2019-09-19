import React, { Component } from 'react';
import TruckContainer from "./TruckContainer"
import Header from "../components/Header"
import Navbar from "../components/NavBar"
import MapContainer from "./MapContainer"



class DashBoard extends Component {
    constructor() {
        super();
        this.state = {
            trucks: [],
            searchTerm: ""
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
    handleSearch = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    render() {
        return (
            <div>
                 <Header onChange={this.handleSearch} searchTerm={this.state.searchTerm} />
                <div id="border" className="ui two column grid">
                    <TruckContainer trucks={this.state.trucks.filter(truck => truck.name.includes(this.state.searchTerm))} />
                    <MapContainer handlePinClick={this.handlePinClick} trucks={this.state.trucks} />
                </div>
            </div>
        );
    }
}

export default DashBoard;