import React, {Component} from 'react';
import  {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import Nav from './nav';
import mapStyle from '../styles/map.less'
import Markers from './markers'

export class App extends Component {

  state = {
    showingInfoWindow: false, //Manage info window visibility
    activeMarker: {},         //Manage active marker
    selectedPlace: {},        //Show info window on marker
    pins: [{category: 'black history', title:'First Congressional Church of Detroit', coord:{lat: 42.355254, lng: -83.0648533}},
           {category: 'black history', title:'Charles H. Wright Museum of African American History', coord:{lat: 42.3592386, lng: -83.0630851}},
           {category: 'black history', title:'Second Baptist Church of Detroit', coord:{lat: 42.3348568, lng: -83.0451785}},
           {category: 'black history', title:'Tower of Freedom', coord:{lat: 42.3198315, lng: -83.0389487}},
           {category: 'black history', title:'First Congressional Church of Detroit', coord:{lat: 42.355254, lng: -83.0648533}},
           {category: 'automotive', title:'GM Headquarters', coord:{lat: 42.3293287, lng: -83.0443982}},
           {category: 'automotive', title:'Chrysler Headquarters', coord:{lat: 42.6545156, lng: -83.2361489}},
           {category: 'automotive', title:'Ford Headquarters', coord:{lat: 42.315278, lng: -83.212472}}]
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
      //List of locations for markers on map
        let locations = [
          {category: 'black history', title:'First Congressional Church of Detroit', coord:{lat: 42.355254,lng: -83.0648533}}
        ]
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
              >
                {this.state.pins.map((pin)=>
                  <Marker position={pin.coord} name={pin.title} onClick={this.onMarkerClick}/>
                )}

                <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}
                  onClose={this.onclose}
                  >
                  <div>
                    <h4>{this.state.selectedPlace.name}</h4>
                  </div>
                </InfoWindow>


            </Map>
            </div>
          </div>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAi7ZcWjqIbKWWF1PSCKESKsN4W81AzASM'
})(App)
