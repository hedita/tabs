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
        <p className="tab-heading">{title}</p>
      </div>
      {isSelected && (
        <div className="tab-content">
          <p>Heading</p>
          <p>{content}</p>
        </div>
      )}
    </>
  );
}

export default TabsItem;

