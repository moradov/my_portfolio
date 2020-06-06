import React, { useState, useRef } from 'react';

const ProjectItem = ({
  project: { img_url, name, project_url, date, used_tech }
}) => {
  const [showDiv, setShowDiv] = useState(false);
  const autoClickLink = useRef(null);

  return (
    <div
      className='project'
      style={{
        backgroundImage: `url(${img_url})`
      }}
      onMouseEnter={() => setShowDiv(true)}
      onMouseLeave={() => setShowDiv(false)}
      onClick={() => autoClickLink.current.click()}
    >
      {showDiv ? (
        <div className='hidden-div' onClick={() => (window.href = project_url)}>
          <div className='top'>
            <h3 className='work-name'> {name} </h3>
            <span className='creation-date'>
              <i className='fas fa-calendar-alt'></i>
              <span className='main-date'> {date} </span>
            </span>
            <a
              href={project_url}
              target='_blank'
              ref={autoClickLink}
              style={{ display: 'none' }}
            ></a>
          </div>
          <div className='bottom'>
            <div>
              <i className='fa fa-code'> : </i>
              {used_tech.length > 0
                ? used_tech.map(tech => (
                    <span className='used-tech' key={tech}>
                      {tech}
                    </span>
                  ))
                : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectItem;
