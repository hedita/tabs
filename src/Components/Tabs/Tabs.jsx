import React from "react";
import TabsItem from "../TabsItem/TabsItem";
import "./Tabs.scss";
import data from "../../data";

function Tabs() {
  return (
    <ul className="tabs">
      {data.map(({ id, title, content, icon }) => {
        return (
          <TabsItem key={id} title={title} content={content} icon={icon} />
        );
      })}
    </ul>
  );
}

export default Tabs;
