import React from "react";
import PropTypes from "prop-types";
const FeaturItem = ({ featureData: { icon, name, desc } }) => {
  return (
    <div className='featur-item'>
      <div className='icon'>
        <i className={icon} style={{ marginBottom: "5px" }}></i>
      </div>
      <h3 style={{ marginBottom: "5px" }}>{name} </h3>
      <p style={{ marginBottom: "5px" }}>{desc}</p>
    </div>
  );
};

FeaturItem.propTypes = {
  featureData: PropTypes.object.isRequired,
};

export default FeaturItem;
