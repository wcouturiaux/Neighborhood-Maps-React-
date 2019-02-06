import React, {Component} from 'react';
import  {Map, GoogleApiWrapper} from 'google-maps-react';

export class App extends Component {
    render () {
        return (
          <Map google={this.props.google}/>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAi7ZcWjqIbKWWF1PSCKESKsN4W81AzASM'
})(App)
