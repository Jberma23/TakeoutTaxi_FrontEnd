import React, { Component } from 'react';
import GoogleMap from "../../components/Map"
import mapPic from "../../Map.png"
import { thisTypeAnnotation } from '@babel/types';
class CustomerMapContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trucks: props.trucks
        }
    }


    render() {
        return (
            // <img src={mapPic} style={{ height: '80vh', width: '72%', paddingTop: "0.0rem", }} alt="map" />

            <GoogleMap handleSelectedTruck={this.props.handleSelectedTruck} trucks={this.props.trucks} handlePinClick={this.props.handlePinClick} currentUser={this.props.currentUser} apiKey={this.props.apiKey} favoriteTrucks={this.props.favoriteTrucks} favorites={this.props.favorites.filter(e => e.length >= 1)} userFav={this.props.currentUser.favorites} />
        );
    }

}

export default CustomerMapContainer;









