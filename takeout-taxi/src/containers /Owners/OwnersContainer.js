import React, { Component } from 'react';
import OwnerTruckContainer from "./OwnerTruckContainer"
import OwnerHeader from "../../components/Owners/OwnerHeader"
import OwnerMapContainer from "./OwnerMapContainer"
import OwnerTruckForm from "../../components/Owners/OwnerTruckForm"
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyDq4WZaU1aV8uf4y2Orru4jOl1d3iKaoPY")

class OwnersContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trucks: [],
            newTruck: {
                name: "",
                user_id: props.currentUser.id,
                image_url: "",
                url: "",
                review_count: 0,
                rating: 0,
                latitude: "",
                longitude: "",
                price: "",
                address: "",
            }
        }
    }
    // componentDidMount(){
    //     this.setState({trucks: this.props.filteredTrucks})
    // }

    handleCreateTruckPriceChange = (event) => {
        this.setState({
            newTruck: {
                ...this.state.newTruck,
                price: event.target.innerText
            }
        })
    }

    handleCreateTruckChange = (event) => {
        this.setState({
            newTruck: {
                ...this.state.newTruck,
                [event.target.id]: event.target.value
            }
        })
    }
    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.")
        }
    }
    showPosition = (position) => {
        let location = {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude

        }
        return location
    }
    handleCheckIn = (event, truck) => {
        let data = this.getLocation()
        debugger
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition)
            fetch(`http://localhost:3000/trucks/${truck.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    data
                })
            })
                .then(response => console.log(response))
        } else {
            console.log("Geolocation is not supported by this browser.")
        }
    }

    handleCreateTruckSubmit = (event) => {
        event.preventDefault()
        Geocode.fromAddress(this.state.newTruck.address).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                this.setState({
                    newTruck: {
                        ...this.state.newTruck,
                        latitude: lat,
                        longitude: lng
                    }
                })
                debugger
            },
            error => {
                console.error(error);
            }
        );


        fetch("http://localhost:3000/trucks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: 'application/json'
            },
            body: JSON.stringify({ truck: this.state.newTruck })
        })
            .then(res => res.json())
            .then(res => this.setState({ trucks: [...this.state.trucks, res] }))
            .catch(e => console.error(e))
    }
    render() {
        return (
            <div>
                <OwnerHeader onChange={this.props.handleSearch} currentUser={this.props.currentUser} searchTerm={this.props.searchTerm} handleUserLogOut={this.props.handleUserLogOut} />
                <div id="border" className="ui two column grid">
                    <OwnerTruckContainer currentUser={this.props.currentUser} trucks={this.props.trucks} getLocation={this.props.getLocation} handleCheckIn={this.handleCheckIn} />
                    <OwnerMapContainer currentUser={this.props.currentUser} handlePinClick={this.handlePinClick} trucks={this.props.trucks} />
                </div>
                <OwnerTruckForm handleCreateTruckPriceChange={this.handleCreateTruckPriceChange} handleCreateTruckChange={this.handleCreateTruckChange} handleCreateTruckSubmit={this.handleCreateTruckSubmit} currentUser={this.props.currentUser} />
            </div>
        );
    }
}

export default OwnersContainer;