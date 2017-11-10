/**
*
* TeamMember
*
*/

import React from 'react';
import Li from './Li';
import Icon from './Icon';
import Item from './Item';
// import styled from 'styled-components';


class TeamMember extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const date = Date.now();
    return (
      <Li>
        <Icon src={this.props.details.icon} alt="" />
        <Item>{this.props.details.name}</Item>
        <Item>{this.props.details.location}</Item>
        <Item>{date} {this.props.details.tz}</Item>
      </Li>
    );
  }
}

TeamMember.propTypes = {

};

export default TeamMember;
