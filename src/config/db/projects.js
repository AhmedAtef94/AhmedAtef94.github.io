//Skills images
import html5 from "../../assets/images/skills/html5.png";
import css3 from "../../assets/images/skills/css3.png";
import js from "../../assets/images/skills/javascript.png";
import bs from "../../assets/images/skills/bootstrap.png";
import reactjs from "../../assets/images/skills/reactjs.png";
import vite from "../../assets/images/skills/vite.svg";
import supabase from "../../assets/images/skills/supabase.svg";
import postgresql from "../../assets/images/skills/postgresql.svg";
//Project images
import weather from "../../assets/images/projects/Weather.png";
import Examination from "../../assets/images/projects/ExaminationSystem.png";
import Curd from "../../assets/images/projects/CRUD-Operation-App.png";
import CurriculumBuilder from "../../assets/images/projects/Curriculum-Builder.png";

let idCounter = 0;
//Factory function for project object (id assigned automatically so it is always unique)
const projectGenerator = (
  name,
  description,
  image,
  link,
  repo,
  technologies,
) => ({
  id: idCounter++,
  name,
  description,
  image,
  link,
  repo,
  technologies,
});
//Factory function for technology object
const techGenerator = (image, name, link) => ({
  image,
  name,
  link,
});
//Shared technologies (one official link per technology)
const tech = {
  react: techGenerator(reactjs, "React", "https://react.dev/"),
  vite: techGenerator(vite, "Vite", "https://vitejs.dev/"),
  supabase: techGenerator(supabase, "Supabase", "https://supabase.com/"),
  postgresql: techGenerator(postgresql, "PostgreSQL", "https://www.postgresql.org/"),
  bootstrap: techGenerator(bs, "Bootstrap", "https://getbootstrap.com/"),
  javascript: techGenerator(js, "JavaScript", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"),
  html5: techGenerator(html5, "HTML5", "https://developer.mozilla.org/en-US/docs/Web/HTML"),
  css3: techGenerator(css3, "CSS3", "https://developer.mozilla.org/en-US/docs/Web/CSS"),
};
//Array of projects
export const projects = [
  //Curriculum Builder
  projectGenerator(
    "Curriculum Builder",
    "Built to streamline the handover between the teams involved in course production: one place for all transferred data, with clear tracking of requests and deliveries, role-based permissions and a full audit trail.",
    CurriculumBuilder,
    "https://ahmedatef94.github.io/CURRICULUM-BUILDER/",
    "https://github.com/AhmedAtef94/CURRICULUM-BUILDER",
    [tech.react, tech.vite, tech.supabase, tech.postgresql, tech.bootstrap, tech.javascript],
  ),
  //Weather Forecast App
  projectGenerator(
    "Weather Forecast App",
    "Search for any city and see the weather update as you type: today's temperature and conditions plus a 3-day forecast, fetched live from the WeatherAPI.com API.",
    weather,
    "https://ahmedatef94.github.io/Weather-App-JavaScript-/",
    "https://github.com/AhmedAtef94/Weather-App-JavaScript-",
    [tech.html5, tech.css3, tech.javascript],
  ),
  //Product Management App (CRUD)
  projectGenerator(
    "Product Management App (CRUD)",
    "Add, view, update, delete and search products (name, price, category and description) in a responsive table, built with vanilla JavaScript and Bootstrap.",
    Curd,
    "https://ahmedatef94.github.io/CRUD-Operation-App/",
    "https://github.com/AhmedAtef94/CRUD-Operation-App",
    [tech.html5, tech.bootstrap, tech.javascript],
  ),
  //Examination System
  projectGenerator(
    "Examination System",
    "An online multiple-choice exam app with sign-up and login (accounts stored in the browser), next/previous navigation, a Mark button to flag questions for review, and a results page showing the final score.",
    Examination,
    "https://ahmedatef94.github.io/Examination-System-Project/",
    "https://github.com/AhmedAtef94/Examination-System-Project",
    [tech.html5, tech.css3, tech.bootstrap, tech.javascript],
  ),
];
