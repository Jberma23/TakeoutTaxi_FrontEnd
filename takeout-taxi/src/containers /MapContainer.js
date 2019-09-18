import React, { Component } from 'react';
import SimpleMap from "../components/Map"

class MapContainer extends Component {
    state = {}





    render() {
        return (
            <SimpleMap trucks={this.props.trucks} handlePinClick={this.props.handlePinClick} />
        );
    }
}

export default MapContainer;










{/* <h3>My Google Maps Demo</h3>

    <div id="map"></div>
    <script>
        // Initialize and add the map
        function initMap() {
// The location of Uluru
var uluru = {lat: -25.344, lng: 131.036};
  
        var map = new google.maps.Map(
  document.getElementById('map'), {zoom: 4, center: uluru});
      // The marker, positioned at Uluru
var marker = new google.maps.Marker({position: uluru, map: map});
        }
</script> */}
{/* <iframe async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBmQMbPWPRdEoHq4jnXkrlCHBk8OhHqYYY
&callback=initMap">
</iframe> */}