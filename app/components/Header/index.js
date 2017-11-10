/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';
import BannerContainer from './BannerContainer';
import Title from './Title';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <BannerContainer>
        <Title>Ink & Switch Core Dashboard</Title>
      </BannerContainer>
    );
  }
}

Header.propTypes = {

};

export default Header;
