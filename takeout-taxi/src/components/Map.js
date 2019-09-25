import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

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
            }
        }
    }
    componentDidMount() {
        // (this.props.currentUser.location) ?
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


    renderMarkers = () => {
        return this.props.trucks.map(truck => {
            return <Marker key={truck.id} position={{ lat: truck.latitude, lng: truck.longitude }} onClick={this.onMarkerClick} name={truck.name} onMouseover={this.onMouseoverMarker} />
        })
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
                >
                    {this.renderMarkers()}
                    <InfoWindow
                        marker={this.state.activeMarker}
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
    apiKey: 'AIzaSyDq4WZaU1aV8uf4y2Orru4jOl1d3iKaoPY'
})(GoogleMap);; 