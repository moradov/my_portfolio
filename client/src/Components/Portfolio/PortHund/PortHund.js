/// portfolio controler allows us switch between projects types(deisgn bloogs..)
import React from "react";
const PortHund = ({ active, activeStateHund }) => {
  // portfolio sections types
  const portfolioSections = ["ALL", "PROJECT", "DESIGN", "BLOGS"];
  return (
    <div className='portfolio-hund '>
      <div className='left'>
        <h3>Portfolio</h3>
      </div>
      <div className='right'>
        <ul className='browse-sec'>
          {/* map through sections and render them   */}
          {portfolioSections.map((element) => (
            <li
              className={active === element ? "active" : null}
              onClick={() => activeStateHund(element)}
              key={element}
            >
              {element}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PortHund;
