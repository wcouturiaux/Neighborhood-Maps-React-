import React, {Component} from 'react';
import Tip from './tip';
var dat = {};
const endpoint = 'https://api.foursquare.com/v2/venues/4b2928e1f964a520009a24e3/tips?&client_id=QDSZYZYBJZ3UFXXRFQUJF5VMW0T3VBI4VE5ERTKOKWXXPCAH&client_secret=MFI3RSYDFOBBEK43YWSOJFBNHKFPH3X1CITIDHAFTPSBELYD&v=20190221';
export default class FourSq extends Component {



  render () {

    var foursquare = require('react-foursquare')({
      clientID:'QDSZYZYBJZ3UFXXRFQUJF5VMW0T3VBI4VE5ERTKOKWXXPCAH',
      clientSecret:'MFI3RSYDFOBBEK43YWSOJFBNHKFPH3X1CITIDHAFTPSBELYD'
    });

    var params ={
      'VENUE_ID':`{this.props.id}`
    };

    return(
      <div>

        mounted
        {this.props.id}

      </div>
    )
  }
}
