import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from '../PojectItem/ProjectItem';
const PortProjects = ({ projects, active }) => {
  let renderdHTML = [];
  // eslint-disable-next-line
  if (active === 'ALL' && projects) {
    renderdHTML = projects.map(el => <ProjectItem project={el} key={el._id} />);
  } else if (active !== 'ALL' && projects) {
    // eslint-disable-next-line
    const filterdprojects = projects.filter(el => el.type == active);
    renderdHTML = filterdprojects.map(e => (
      <ProjectItem project={e} key={e._id} />
    ));
  }

  return <div className='port-projects'>{renderdHTML}</div>;
};

export default PortProjects;

PortProjects.propTypes = {
  projects: PropTypes.array.isRequired,
  active: PropTypes.string.isRequired
};
