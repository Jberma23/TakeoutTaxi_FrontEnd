import React, { Component } from 'react';
import OwnerTruckContainer from "./OwnerTruckContainer"
import OwnerHeader from "../components/OwnerHeader"
import OwnerMapContainer from "./OwnerMapContainer"
import OwnerTruckForm from "../components/OwnerTruckForm"
import Geocode from "react-geocode";


class OwnersContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trucks: [],
            newTruck: {
                name: "",
                owner_id: props.currentUser.id,
                image_url: [

                ],
                image_data: [],
                review_count: 0,
                rating: 0,
                latitude: "",
                longitude: "",
                price: "",
                address: "",
            }
        }
    }



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
    handleCreateTruckFeaturedImageChange = (event) => {
        this.setState({
            newTruck: {
                ...this.state.newTruck,
                image_url: [...this.state.newTruck.image_url, event.data.service_url],
                image_data: [...this.state.newTruck.image_data, event.data]

            }
        })

    }
    handleCreateTruckMenuChange = (event) => {
        this.setState({
            newTruck: {
                ...this.state.newTruck,
                image_url: [...this.state.newTruck.image_url, event.target.value]


            }
        })
    }


    handleCheckIn = (props) => {
        let t = this
        let data = {
            latitude: `${t.props.currentUser.latitude}`,
            longitude: `${t.props.currentUser.longitude}`
        }
        fetch(`"http://localhost:3000"trucks/${props.truck.id}`, {

            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: 'application/json'
            },
            body: JSON.stringify({
                truck: data

            })
        })
            .then(response => response.json())
            .then(resp => console.log(resp))




        fetch(`"http://localhost:3000"updates`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: 'application/json'
            },
            body: JSON.stringify({
                content: `${props.truck.name} just updated it's location`
            })
        })

    }
    handleCheckInForm = (event, truck) => {
        let address = event.target.firstChild.lastChild.firstChild.value
        Geocode.setApiKey(this.props.apiKey)
        Geocode.fromAddress(event.target.firstChild.lastChild.firstChild.value).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                fetch(`"http://localhost:3000"trucks/${truck.id}`, {

                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: 'application/json'
                    },
                    body: JSON.stringify({
                        latitude: `${lat}`,
                        longitude: `${lng}`,
                        address: address


                    })
                })

            }
        )
        fetch(`"http://localhost:3000"updates`, {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: 'application/json'
            },
            body: JSON.stringify({
                content: `${truck.name} just updated it's location`

            })
        })
    }



    handleCreateTruckSubmit = (event) => {
        event.preventDefault()
        Geocode.setApiKey(this.props.apiKey)
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
            },
            error => {
                console.error(error);
            }
        );
        fetch(`"http://localhost:3000"updates`, {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: 'application/json'
            },
            body: JSON.stringify({
                content: `${this.props.currentUser.username} just added a new truck`

            })
        })
        fetch("https://www.takeouttruckstop.com/trucks", {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: 'application/json'
            },
            body: JSON.stringify({ truck: this.state.newTruck })
        })
            .then(res => res.json())
            .then(res => {
                this.setState({ trucks: [...this.state.trucks, res] })
            })
            .catch(e => console.error(e))
    }
    render() {
        return (
            <div>
                <OwnerHeader onChange={this.props.handleSearch} currentUser={this.props.currentUser} searchTerm={this.props.searchTerm} handleUserLogOut={this.props.handleUserLogOut} />
                <div id="border" className="ui two column grid">
                    <OwnerTruckContainer currentUser={this.props.currentUser} trucks={this.props.trucks} getLocation={this.props.getLocation} handleCheckIn={this.handleCheckIn} handleCheckInForm={this.handleCheckInForm} />
                    <OwnerMapContainer
                        apiKey={this.props.apiKey}
                        currentUser={this.props.currentUser} handlePinClick={this.handlePinClick} trucks={this.props.trucks} />
                </div>
                <OwnerTruckForm handleCreateTruckPriceChange={this.handleCreateTruckPriceChange} handleCreateTruckChange={this.handleCreateTruckChange} handleCreateTruckSubmit={this.handleCreateTruckSubmit} handleCreateTruckFeaturedImageChange={this.handleCreateTruckFeaturedImageChange} handleCreateTruckMenuChange={this.handleCreateTruckMenuChange} currentUser={this.props.currentUser} />
            </div >
        );
    }
}

export default OwnersContainer;