import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPencilSquare } from "@fortawesome/free-solid-svg-icons";
import { faBarChart } from "@fortawesome/free-solid-svg-icons";
import "./Icons.scss";

function Icons({ icon }) {
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

export default Icons;
