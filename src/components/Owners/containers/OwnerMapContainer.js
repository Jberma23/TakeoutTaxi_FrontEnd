import React, { Component } from 'react';
import SimpleMap from "../../Map/components/Map"

class OwnerMapContainer extends Component {
    state = {}


    handleSelectedTruck() {

    }


    render() {
        return (
            <div>
                <SimpleMap handleSelectedTruck={this.handleSelectedTruck} trucks={this.props.trucks} handlePinClick={this.props.handlePinClick} currentUser={this.props.currentUser} apiKey={this.props.apiKey}
                />
            </div>
        );
    }
}

export default OwnerMapContainer;










