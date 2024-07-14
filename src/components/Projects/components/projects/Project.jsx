import React from "react";
import styles from "./style.module.scss";

const Project = ({
  index,
  title,
  manageModal,
  duration,
  permalink,
}) => {

  console.log('title: ', title);

  return (
    <a
      target={"_blank"}
      href={`${permalink}`}
      rel="noreferrer"
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>{duration}</p>
    </a>
  );
}

export default Project;