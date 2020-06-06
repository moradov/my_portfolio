import React from "react";
import PropTypes from "prop-types";
const ProgressBareItem = ({ progressData: { name, percentage } }) => {
  return (
    <div className='progress-bar'>
      <div className='name'>{name} </div>
      <span style={{ width: `${88 - percentage}%` }} className='persont'>
        {percentage + "%"}
      </span>
    </div>
  );
};
ProgressBareItem.propTypes = {
  progressData: PropTypes.object.isRequired,
};

export default ProgressBareItem;
