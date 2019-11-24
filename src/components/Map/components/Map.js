import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';




export class GoogleMap extends React.PureComponent {
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
            favoritedTrucks: props.favoritedTrucks,
            currentUser: props.currentUser,
            userFav: []
        }

    }


    onMapClicked = (props) => {

        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }

    }


    onMarkerClick = (props, marker, e) => {
        this.props.handleSelectedTruck(props, e)
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    };


    favFunction = (arr, truck) => {
        let found = false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].favorited_id === truck.id) {
                found = true
                break
            }
        }
        return found

    }









    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '80vh', width: '72%', paddingTop: "0.3rem", }} className="10 wide column">
                <Map
                    style={{ height: '82vh', width: '72%', paddingTop: "0.0rem" }}
                    google={this.props.google}
                    zoom={11}
                    onClick={this.onMapClicked}
                    // style={mapStyles}
                    initialCenter={this.state.initialCenter}
                >


                    {this.props.currentUser.role === "customer" ?
                        this.props.trucks.map(truck => {
                            return < Marker className="marker" id={`${truck.id} marker`} key={truck.id} position={{ lat: parseFloat(truck.latitude), lng: parseFloat(truck.longitude) }

                            } Icon={this.favFunction(this.props.favoriteTrucks, truck) || this.props.favoriteTrucks.includes(truck.id) ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png" : "http://maps.google.com/mapfiles/ms/icons/red-dot.png"} onClick={this.onMarkerClick} name={truck.name} />
                        }
                        )
                        :
                        this.props.trucks.map(truck =>
                            <Marker className="marker" id={`${truck.id} marker`} key={truck.id} position={{ lat: parseFloat(truck.latitude), lng: parseFloat(truck.longitude) }

                            } Icon={"http://maps.google.com/mapfiles/ms/icons/red-dot.png"} onClick={this.onMarkerClick} name={truck.name} />
                        )
                    }





                    {this.props.currentUser ?
                        <Marker key={this.props.currentUser.id} position={{ lat: this.props.currentUser.latitude, lng: this.props.currentUser.longitude }} name="current Location" onMouseover={this.onMouseoverMarker} Icon="http://maps.google.com/mapfiles/ms/icons/blue.png" />
                        : null}
                    {this.state.activeMarker ?
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={true}>
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                        :
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={false}>
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                    }


                </Map>
            </div>
        );

    }
}

export default GoogleApiWrapper((props) => {
    return ({
        apiKey: props.apiKey,
    }
    )
})(GoogleMap);;


