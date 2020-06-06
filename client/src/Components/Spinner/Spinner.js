import React, { Fragment } from "react";

const Spinner = ({ loading }) => {
  return (
    <Fragment>
      {loading ? <div className='loader'>Loading...</div> : null}
    </Fragment>
  );
};

export default Spinner;
