import React, { useState } from "react";
import "./TabsItem.scss";
import Icon from "../Icons/Icons";

function TabsItem({ title, content, icon }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleContentVisibility = () => {
    setIsSelected(!isSelected);
  };

  return (
    <>
      <div onClick={handleContentVisibility} className="tab-title">
        <i className="tabs-icon">
          <Icon icon={icon} />
        </i>
        <h1 className="tab-heading">{title}</h1>
      </div>
      {isSelected && (
        <div className="tab-content">
          <h2>Heading</h2>
          <p>{content}</p>
        </div>
      )}
    </>
  );
}

export default TabsItem;

