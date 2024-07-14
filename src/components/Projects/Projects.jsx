import styles from "./style.module.scss";
import { useState, useEffect, useRef } from "react";
import Project from "./components/projects/Project";
import { motion } from "framer-motion";
import gsap from "gsap";
import RoundedBtn from "./components/AnimationCombo/RoundedButton/RoundedBtn";
import DCE from "../../images/DCE.jpeg";
import CAR from "../../images/CAR.jpeg";
import CDT from "../../images/CDT.jpeg";

const projects = [
  {
    title: "Digital Campaign Education",
    src: DCE,
    duration: "Ongoing - 2024",
    color: "purple",
    permalink: "https://web.facebook.com/profile.php?id=61559787045473",
  },
  {
    title: "Canvassers Digital Training",
    src: CDT,
    duration: "Passed -  2024",
    color: "orange",
    permalink: "https://web.facebook.com/profile.php?id=61559787045473",
  },
  {
    title: "Customer Acquisition & Retention",
    src: CAR,
    duration: "Passed -  2023",
    color: "green",
    permalink: "https://web.facebook.com/profile.php?id=61559787045473",
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className={styles.projects}
      id="courses"
    >
      <div className={styles.container}>
        <div>
          <h4>Project</h4>
          <h2>Most Recent Projects</h2>
        </div>

        <div className={styles.courseLists}></div>
      </div>
      <div className={styles.body}>
        {projects.map((project, index) => {
            console.log('project: ', project);
          return (
            <Project
              index={index}
              title={project.title}
              manageModal={manageModal}
              key={index}
              duration={project.duration}
              permalink={project.permalink}
            />
          );
        })}
      </div>
      {/* <RoundedBtn>
        <p>More work</p>
      </RoundedBtn> */}
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={styles.modalContainer}
        >
          <div
            style={{ top: index * -100 + "%" }}
            className={styles.modalSlider}
          >
            {projects.map((project, index) => {
              const { src, color } = project;
              return (
                <div
                  className={styles.modal}
                  style={{ backgroundColor: color }}
                  key={`modal_${index}`}
                >
                  <img
                    src={src}
                    width={300}
                    height={0}
                    alt="image"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className={styles.cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          View
        </motion.div>
      </>
    </main>
  );
};

export default Projects;
