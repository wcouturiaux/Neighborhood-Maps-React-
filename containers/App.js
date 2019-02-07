import React, {Component} from 'react';
import  {Map, GoogleApiWrapper} from 'google-maps-react';
import Nav from './nav';
import mapStyle from '../styles/map.less'

export class App extends Component {
    render () {
        return (
          <div className={mapStyle.container}>
            <Nav />
            <div className={mapStyle.map}>
              <Map google={this.props.google}/>
            </div>
          </div>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAi7ZcWjqIbKWWF1PSCKESKsN4W81AzASM'
})(App)
