import React, {Component} from 'react';
import  {Map, GoogleApiWrapper} from 'google-maps-react';

export default class App extends Component {
    render () {
        return <Map google={this.props.google}/>
    }
}
