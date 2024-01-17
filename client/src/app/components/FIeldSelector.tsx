"use client";
import React from "react";
import About from "./Form/About";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Education from "./Form/Education";
import Experience from "./Form/Experience";
import Projects from "./Form/Projects";
import Skills from "./Form/Skills";
import Achievements from "./Form/Acheivements";
import Awards from "./Form/Awards";
import Trainings from "./Form/Trainings";
import Template from "./Template";

const FIeldSelector = () => {
  const fieldName = useSelector(
    (state: RootState) => state.field.selectedField
  );

  let selectedComponent;

  switch (fieldName) {
    case "About":
      selectedComponent = <About />;
      break;
    case "Education":
      selectedComponent = <Education />;
      break;
    case "Experience":
      selectedComponent = <Experience />;
      break;
    case "Projects":
      selectedComponent = <Projects />;
      break;
    case "Skills":
      selectedComponent = <Skills />;
      break;
    case "Achievements":
      selectedComponent = <Achievements />;
      break;
    case "Awards":
      selectedComponent = <Awards />;
      break;
    case "Trainings":
      selectedComponent = <Trainings />;

      break;
    default:
      selectedComponent = <About />;
  }
  return <div>{selectedComponent}</div>;
};

export default FIeldSelector;
