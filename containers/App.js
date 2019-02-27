import React, {Component} from 'react';
import  {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import Nav from './nav';
import mapStyle from '../styles/map.less'
import FourSq from './markers'

const endpoint = 'https://api.foursquare.com/v2/venues/4b2928e1f964a520009a24e3/tips?&client_id=QDSZYZYBJZ3UFXXRFQUJF5VMW0T3VBI4VE5ERTKOKWXXPCAH&client_secret=MFI3RSYDFOBBEK43YWSOJFBNHKFPH3X1CITIDHAFTPSBELYD&v=20190221';
export class App extends Component {

  state = {
    showingInfoWindow: false, //Manage info window visibility
    activeMarker: {},         //Manage active marker
    selectedPlace: {},        //Show info window on marker
    pins: [{category: 'black history', title:'First Congregational Church of Detroit', coord:{lat: 42.355254, lng: -83.0648533}, vid:'4a905eaef964a5208d1720e3'},
           {category: 'black history', title:'Charles H. Wright Museum of African American History', coord:{lat: 42.3592386, lng: -83.0630851}, vid:'4a903bcff964a520b71620e3'},
           {category: 'black history', title:'Second Baptist Church of Detroit', coord:{lat: 42.3348568, lng: -83.0451785}, vid:'4d8f5001d265236aff631d17'},
           {category: 'automotive', title:'GM Headquarters', coord:{lat: 42.3293287, lng: -83.0443982}, vid:'4bebeb9761aca593a6888500'},
           {category: 'automotive', title:'Chrysler Headquarters', coord:{lat: 42.6545156, lng: -83.2361489}, vid:'4d25d64bb9796dcba54cac39'},
           {category: 'automotive', title:'Ford Headquarters', coord:{lat: 42.315278, lng: -83.212472}, vid: '4b2928e1f964a520009a24e3'}],
    tipper: []
  }



  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    }), this.fetchTips()};



  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  fetchTips(){
    fetch(endpoint)
    .then(response=> response.json()).then(json=> this.setState({tipper:json}))
  }
    render () {

        return (
          <div className={mapStyle.container}>
            <Nav />
            <div className={mapStyle.map}>
              <Map
                google={this.props.google}
                ref={this.props.google.zoomToMarkers}
                zoom={10}
                initialCenter={{
                  lat: 42.3314,
                  lng: -83.0458
                }}
              >
                {this.state.pins.map((pin)=>
                  <Marker position={pin.coord} name={pin.title} onClick={this.onMarkerClick} vid={pin.vid}/>
                )}

                <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}
                  onClose={this.onclose}
                  >
                  <div>
                    <h4>{this.state.selectedPlace.name}</h4>
                    <FourSq id={this.state.selectedPlace.vid} tipsA={this.state.tipper.response.tips} />
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
