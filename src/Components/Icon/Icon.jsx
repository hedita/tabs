import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode,faFolderOpen,faEnvelope, faPencilSquare, faBarChart } from "@fortawesome/free-solid-svg-icons";
import "./Icons.scss";

function Icon({ icon }) {
  if (icon === "code") {
    return <FontAwesomeIcon icon={faCode} />;
  }
  if (icon === "pen-to-square") {
    return <FontAwesomeIcon icon={faPencilSquare} />;
  }
  if (icon === "chart-column") {
    return <FontAwesomeIcon icon={faBarChart} />;
  }
  if (icon === "folder-open") {
    return <FontAwesomeIcon icon={faFolderOpen} />;
  }
  if (icon === "envelope") {
    return <FontAwesomeIcon icon={faEnvelope} />;
  }
}

export default Icon;
