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
        <p className="tabs-title">{title}</p>
      </div>
      {clicked ? (
        <div className="tab-content">
          <h3>Heading</h3>
          <p>{content}</p>
        </div>
      ) : null}
    </>
  );
}

export default TabsItem;
