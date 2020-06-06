import React from "react";
import FeaturItem from "./FeaturItem";
const FeaturesList = () => {
  const features = [
    {
      name: "Speed",
      icon: "fa fa-tachometer",
      desc: "Fast load times and lag free interaction, my highest priotity",
    },
    {
      name: "Responsive",
      icon: "fa fa-tv",
      desc: "my loyouts work on any device , big or small",
    },
    {
      name: "Intuitive",
      icon: "fa fa-leaf",
      desc: "Strong preference for easy to use, intuitive UX/UL",
    },
    {
      name: "Dynamic",
      icon: "fa fa-rocket",
      desc:
        "Websites don't have to be static , I love making pages come to life",
    },
  ];
  return (
    <div className='features-list'>
      {features.map((feat) => (
        <FeaturItem key={feat.name} featureData={feat} />
      ))}
    </div>
  );
};

export default FeaturesList;
