import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from '../PojectItem/ProjectItem';
const PortProjects = ({ projects, active }) => {
  let renderdHTML = [];
  // eslint-disable-next-line
  if (active === 'ALL' && projects) {
    renderdHTML = projects.map(el => (
      <ProjectItem project={el} key={el.name} />
    ));
  } else if (active !== 'ALL' && projects) {
    const filterdprojects = projects.filter(el => el.type == active);
    renderdHTML = filterdprojects.map(e => (
      <ProjectItem project={e} key={e.name} />
    ));
  }

  return <div className='port-projects'>{renderdHTML}</div>;
};

PortProjects.propTypes = {
  projects: PropTypes.object.isRequired,
  active: PropTypes.string.isRequired
};
export default PortProjects;
