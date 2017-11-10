/**
*
* UpdateCoreForm
*
*/

import React from 'react';
// import styled from 'styled-components';
import Form from './Form';

class UpdateCoreForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Form>
        <h3>Convert local time to core time</h3>
        <input type="text" placeholder="Enter Time"/>
        <input type="text" placeholder="SOC +" />
        <textarea></textarea>
      </Form>
    );
  }
}

UpdateCoreForm.propTypes = {

};

export default UpdateCoreForm;
