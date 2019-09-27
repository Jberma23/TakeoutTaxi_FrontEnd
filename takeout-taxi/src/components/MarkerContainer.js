// import React, { Component } from 'react';
// import { Marker, InfoWindow } from 'google-maps-react';

// class MarkerContainer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             showingInfoWindow: false,
//             activeMarker: {},
//             selectedPlace: {},
//             initialCenter: {
//                 lat: 38.90,
//                 lng: -76.98
//             },
//             showingMyLocationWindow: true,
//             myLocationMarker: {},
//             myPlace: {},
//         }
//     }
//     onMouseoverMarker(props, marker, e) {
//         // ..
//     }


//     onMarkerClick = (props, marker, e) =>
//         this.setState({
//             selectedPlace: this.props.props,
//             activeMarker: marker,
//             showingInfoWindow: true
//         });

//     renderMarkers = () => {

//         return this.props.trucks.map(truck =>
//             <>
//                 <Marker key={truck.id} position={{ lat: this.randomLat(), lng: -this.randomLong() }} onClick={this.onMarkerClick} name={truck.name} onMouseover={this.onMouseoverMarker} visible={true} />
//                 <InfoWindow
//                     marker={this.state.activeMarker}
//                     visible={this.state.showingInfoWindow}>
//                     <div>
//                         <h1>{this.state.selectedPlace.name}</h1>
//                     </div>
//                 </InfoWindow>
//             </>

//         )
//     }

//     randomLat = () => {
//         var min = 38.771353;
//         var max = 39.00;
//         var rand = min + (Math.random() * (max - min))
//         return rand
//     }
//     randomLong = () => {
//         var min = 76.815637;
//         var max = 77.216386;
//         var rand = min + (Math.random() * (max - min))
//         return rand
//     }
//     render() {
//         debugger
//         return (
//             <>
//                 {this.renderMarkers()}

//             </>
//         )
//     }
// }

// export default MarkerContainer;