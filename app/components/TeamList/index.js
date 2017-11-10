/**
*
* TeamList
*
*/

import React from 'react';
import TeamMember from '../TeamMember';
import team from '../../data/team';
// import styled from 'styled-components';
import ListContainer from './ListContainer';


class TeamList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      team,
    };
  }

  render() {
    return (
      <ListContainer>
        <h3>The Team</h3>
        <ul>
          {
            Object
            .keys(this.state.team)
            .map((key) => <TeamMember key={key} details={this.state.team[key]} />)
          }
        </ul>
      </ListContainer>
    );
  }
}

TeamList.propTypes = {

};

export default TeamList;
