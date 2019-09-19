import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import { Marker } from '@react-google-maps/api';

export const AnyReactComponent = ({ text }) => <div><i id="marker" className="map marker alternate icon"></i></div>

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 38.90,
            lng: -76.98
        },
        zoom: 11
    };


    renderMarkers = () => {
        return this.props.trucks.map(truck => {
            return <AnyReactComponent
                onClick={(event) => { this.props.onClick(event) }}
                key={truck.id}
                lat={truck.latitude}
                lng={truck.longitude}
                text="My Marker"
            />
        })
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '80vh', width: '72%', paddingTop: "0.3rem", }} className="10 wide column">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    onReady={this.props.onReady}

                >
                    {/* <Marker position={38.9052763, -76.9815877} /> */}
                    {this.renderMarkers()}
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap; 