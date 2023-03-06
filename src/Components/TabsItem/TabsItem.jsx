import React, { useState } from "react";
import "./TabsItem.scss";
import Icons from "../Icons/Icons";

function TabsItem({ title, content, icon }) {
  const [clicked, setClicked] = useState(false);

  const handleContentVisibility = () => {
    setClicked(!clicked);
  };

  return (
    <div className="tabs-item-container">
      <li onClick={handleContentVisibility} className="tabs-item">
        <div className="title-icon-container">
          <i className="tabs-icon">
            <Icons icon={icon} />
          </i>
          <p className="tabs-title">{title}</p>
        </div>
        {clicked ? <p className="tabs-content">{content}</p> : null}
      </li>
    </div>
  );
}

export default TabsItem;
