//Images
import html5 from "../../assets/images/skills/html5.png";
import css3 from "../../assets/images/skills/css3.png";
import angular from "../../assets/images/skills/angular.png";
import reactnative from "../../assets/images/skills/reactnative.png";
import ts from "../../assets/images/skills/typescript.png";
import nextjs from "../../assets/images/skills/nextjs.png";
import ecmascript from "../../assets/images/skills/ecmascript.png";
import js from "../../assets/images/skills/javascript.png";
import bs from "../../assets/images/skills/bootstrap.png";
import tw from "../../assets/images/skills/tailwind.png";
import reactjs from "../../assets/images/skills/reactjs.png";
import sass from "../../assets/images/skills/sass.png";
import cSharp from "../../assets/images/skills/csharp.png";
import git from "../../assets/images/skills/git.png";
//Icons
import {
  faArrowsRotate,
  faPeopleGroup,
  faCalendarCheck,
  faListCheck,
  faShieldHalved,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { faJira } from "@fortawesome/free-brands-svg-icons";

let idCounter = 0;
//Factory function for skill object
const skillGenerator = (name, image, icon, color) => ({
  id: idCounter++,
  name,
  image,
  icon,
  color,
});
//Array of skills
export const skills = {
  //Shown as colored icons (no logo image), name shows on hover
  projectManagement: [
    skillGenerator("Agile Methodology", null, faArrowsRotate, "#22c55e"),
    skillGenerator("Scrum Framework", null, faPeopleGroup, "#f59e0b"),
    skillGenerator("Sprint Planning", null, faCalendarCheck, "#ef4444"),
    skillGenerator("Backlog Management", null, faListCheck, "#a855f7"),
    skillGenerator("Jira", null, faJira, "#2684ff"),
    skillGenerator("Risk Management", null, faShieldHalved, "#14b8a6"),
    skillGenerator("Stakeholder Communication", null, faComments, "#ec4899"),
  ],
  frameworks: [
    // skillGenerator("Angular", angular),
    skillGenerator("React JS", reactjs),
    skillGenerator("React Native", reactnative),
  ],
  languages: [
    skillGenerator("JavaScript", js),
    // skillGenerator("TypeScript", ts),
    skillGenerator("EcmaScript6", ecmascript),
    skillGenerator("NextJs", nextjs),
    // skillGenerator("C#", cSharp),
    skillGenerator("HTML 5", html5),
    skillGenerator("CSS 3", css3),
    skillGenerator("SASS", sass),
  ],
  tools: [
    skillGenerator("BootStrap", bs),
    // skillGenerator("Tailwind CSS", tw),
    skillGenerator("Git", git),
  ],
};
