import React from 'react';
import PropTypes from 'prop-types';

const Erorr = ({ tryAgainClicked }) => {
  const loadAgainBtn = {
    'margin-top': '78px',
    padding: '10px 18px',
    'border-radius': '28px',
    border: 'navajowhite',
    'font-size': '16px',
    'background-color': 'orange',
    color: 'white',
    cursor: 'pointer'
  };
  return (
    <div
      style={{
        textAlign: 'center',
        marginBottom: '120px'
      }}
    >
      <h3>Somthing Went Wrong</h3>
      <button style={loadAgainBtn} onClick={tryAgainClicked}>
        Try again <i style={{ marginLeft: '5px' }} className='fa fa-sync'></i>
      </button>
    </div>
  );
};
export default Erorr;
Erorr.propTypes = {
  tryAgainClicked: PropTypes.func.isRequired
};
