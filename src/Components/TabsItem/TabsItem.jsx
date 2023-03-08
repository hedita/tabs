import React, { useState } from "react";
import "./TabsItem.scss";
import Icons from "../Icons/Icons";

function TabsItem({ title, content, icon }) {
  const [clicked, setClicked] = useState(false);

  const handleContentVisibility = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div onClick={handleContentVisibility} className="tabs">
        <i className="tabs-icon">
          <Icons icon={icon} />
        </i>
        <title className="tabs-title">{title}</title>
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
