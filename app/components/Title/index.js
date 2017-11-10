/**
*
* Title
*
*/

import React from 'react';
import H1 from './H1';
import H2 from './H2';
// import styled from 'styled-components';


class Title extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <H1> its afterhours  </H1>

        <H2>Teusday core hours start in 2 hours</H2>
      </div>
    );
  }
}

Title.propTypes = {

};

export default Title;
