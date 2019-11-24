import React, { Component } from 'react';
import SimpleMap from "../../Map/components/Map"

class OwnerMapContainer extends Component {
    state = {}


    handleSelectedTruck() {

    }


    render() {
        return (
            //   <img src={Map} style={{ height: '80vh', width: '72%', paddingTop: "0.0rem", }}  alt="map"/>
            <SimpleMap handleSelectedTruck={this.handleSelectedTruck} trucks={this.props.trucks} handlePinClick={this.props.handlePinClick} currentUser={this.props.currentUser} apiKey={this.props.apiKey}
            />
        );
    }
}

export default OwnerMapContainer;










