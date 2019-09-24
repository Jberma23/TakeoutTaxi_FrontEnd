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
        this.setState({newTruck: {...this.state.newTruck, 
            price: event.target.innerText}})
    }

    handleCreateTruckChange = (event) => {
        this.setState({newTruck: {...this.state.newTruck, 
            [event.target.id]: event.target.value}})
    }
   
    handleCreateTruckSubmit = (event) => {
        event.preventDefault()
        Geocode.fromAddress(this.state.newTruck.address).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              this.setState({newTruck: {...this.state.newTruck, 
                latitude: lat,
                longitude: lng
            }})
              debugger
            },
            error => {
              console.error(error);
            }
          );
        
      
        fetch("http://localhost:3000/trucks",{
            method: "POST",
            headers: {"Content-Type": "application/json", 
            Accept: 'application/json'},
            body: JSON.stringify({truck: this.state.newTruck})})
            .then(res => res.json())
            .then(res => this.setState({trucks: [...this.state.trucks, res]}))
            .catch(e => console.error(e))
    }
    render() { 
        return (
        <div>
            <OwnerHeader onChange={this.props.handleSearch} currentUser={this.props.currentUser} searchTerm={this.props.searchTerm} handleUserLogOut={this.props.handleUserLogOut} />
            <div id="border" className="ui two column grid">
            <OwnerTruckContainer  currentUser={this.props.currentUser} trucks={this.props.trucks} />
            <OwnerMapContainer currentUser={this.props.currentUser} handlePinClick={this.handlePinClick} trucks={this.props.trucks} /> 
        </div> 
            <OwnerTruckForm  handleCreateTruckPriceChange={this.handleCreateTruckPriceChange} handleCreateTruckChange={this.handleCreateTruckChange}  handleCreateTruckSubmit={this.handleCreateTruckSubmit} currentUser={this.props.currentUser}/>
        </div>  
    );
    }
}
 
export default OwnersContainer;