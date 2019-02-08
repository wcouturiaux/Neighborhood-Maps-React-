import React, {Component} from 'react';
import  {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import Nav from './nav';
import mapStyle from '../styles/map.less'

export class App extends Component {

  state = {
    showingInfoWindow: false, //Manage info window visibility
    activeMarker: {},         //Manage active marker
    selectedPlace: {}        //Show info window on marker
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
    render () {
        return (
          <div className={mapStyle.container}>
            <Nav />
            <div className={mapStyle.map}>
              <Map
                google={this.props.google}
                zoom={12}
                initialCenter={{
                  lat: 42.3314,
                  lng: -83.0458
                }}
              />
            </div>
          </div>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAi7ZcWjqIbKWWF1PSCKESKsN4W81AzASM'
})(App)
