/**
 *
 * MapContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


import team from '../../data/team';

export class MapContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      team,
    };
  }
  
  render() {
    const style = {
      width: '400px',
      height: '400px',
    }
    return (
        <Map
          google={this.props.google}
          style={style}
          zoom={1}
          onClick={this.onMapClicked}
        >
          {
            Object
              .keys(this.state.team)
              .map((key) => <Marker key={key} position={this.state.team[key].coords} />)
          }
        </Map>
    );
  }
}

MapContainer.propTypes = {

};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBnN4riBjn_PjBOxf7lmnsLfzs-v-FJuy8'
}
)(MapContainer);
