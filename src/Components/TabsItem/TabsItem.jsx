import React, { useState } from "react";
import "./TabsItem.scss";
import Icon from "../Icons/Icons";

function TabsItem({ title, content, icon }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleContentVisibility = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div onClick={handleContentVisibility} className="tabs">
        <i className="tabs-icon">
          <Icon icon={icon} />
        </i>
        <p className="tabs-title">{title}</p>
      </div>
      {clicked && (
        <div className="tab-content">
          <title>Heading</title>
          <p>{content}</p>
        </div>
      )}
    </>
  );
}

export default TabsItem;

