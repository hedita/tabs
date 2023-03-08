import React, { useState } from "react";
import "./TabsItem.scss";
import Icon from "../Icons/Icons";

function TabsItem({ title, content, icon }) {
<<<<<<< HEAD
  const [isSelected, setIsSelected] = useState(false);
=======
  const [isClicked, setIsClicked] = useState(false);
>>>>>>> dbfbae5 (reanaming)

  const handleContentVisibility = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div onClick={handleContentVisibility} className="tab-title">
        <i className="tabs-icon">
          <Icon icon={icon} />
        </i>
        <p className="tabs-title">{title}</p>
      </div>
      {isClicked && (
        <div className="tab-content">
          <title>Heading</title>
          <p>{content}</p>
        </div>
      )}
    </>
  );
}

export default TabsItem;

