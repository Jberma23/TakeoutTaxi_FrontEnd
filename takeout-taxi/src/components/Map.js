import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { Icon } from "semantic-ui-react"




export class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            initialCenter: {
                lat: 38.90,
                lng: -76.98
            },
            showingMyLocationWindow: true,
            myLocationMarker: {},
            myPlace: {},
        }
    }
    componentDidMount() {

        this.setState({ initialCenter: { lat: this.props.latitude, lng: this.props.latitude } })
        // :
        // this.setState({ initialCenter: { lat: 38.90, lng: -76.98 } })
    }

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }
    centerMoved(mapProps, map) {
        // ...
    }
    centerMoved(mapProps, map) {
        // ...
    }
    onMouseoverMarker(props, marker, e) {
        // ..
    }
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMyMarkerClick = (props, marker, e) =>
        this.setState({
            showingMyLocationWindow: true,
            myLocationMarker: { marker },
            myPlace: { props }
        });
    randomLat = () => {
        var min = 38.771353;
        var max = 39.00;
        var rand = min + (Math.random() * (max - min))
        return rand
    }
    randomLong = () => {
        var min = 76.815637;
        var max = 77.216386;
        var rand = min + (Math.random() * (max - min))
        return rand
    }


    renderMarkers = () => {

        return this.props.trucks.map(truck =>

            <Marker key={truck.id} position={{ lat: this.randomLat(), lng: -this.randomLong() }} onClick={this.onMarkerClick} name={truck.name} onMouseover={this.onMouseoverMarker} />

        )



    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '80vh', width: '72%', paddingTop: "0.3rem", }} className="10 wide column">
                <Map
                    style={{ height: '80vh', width: '72%', paddingTop: "0.0rem" }}
                    google={this.props.google}
                    zoom={11}
                    onClick={this.onMapClicked}
                    // style={mapStyles}
                    onDragend={this.centerMoved}
                    initialCenter={this.state.initialCenter}
                    currentUser={this.props.currentUser}
                >
                    {this.renderMarkers()}

                    {this.props.currentUser.location ?
                        <Marker key={this.props.currentUser.id} position={{ lat: this.props.currentUser.location.latitude, lng: this.props.currentUser.location.longitude }} onReady={(event) => { this.setState({ myLocationMarker: event.target }) }} onClick={this.onMyMarkerClick} name="current Location" onMouseover={this.onMouseoverMarker} Icon="http://maps.google.com/mapfiles/ms/icons/blue.png" />
                        : null}

                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                    <InfoWindow
                        marker={this.state.myLocationMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>


                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD-FWab7jGNA4Tu3oQ86S7WLWP8sB5Tb8c'
})(GoogleMap);; 