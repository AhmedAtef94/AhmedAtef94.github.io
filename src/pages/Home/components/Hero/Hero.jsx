//React
import PropTypes from "prop-types";
//Scss styling file
import "./Hero.scss";
//Images
import reactnative from "../../../../assets/images/skills/reactnative.png";
import react from "../../../../assets/images/skills/reactjs.png";
import js from "../../../../assets/images/skills/javascript.png";
import profileLight from "../../../../assets/images/profile_light.png";
import profileDark from "../../../../assets/images/profile_dark.png";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Data
import { skills } from "../../../../config/db/skills";

//Skills shown orbiting around the profile image: project management first, then tech
const orbitSkills = [
  ...skills.projectManagement,
  { id: "react", name: "React JS", image: react },
  { id: "react-native", name: "React Native", image: reactnative },
  { id: "js", name: "JavaScript", image: js },
];

const Hero = ({ isDark }) => {
  return (
    <header className="hero">
      {/* Welcome text */}
      <div className="hero__text">
        <code className="hero__html">&lt;html&gt;</code>
        <code className="hero__body">&lt;body&gt;</code>
        <code className="hero__h1">&lt;h1&gt;</code>
        <h1 className="hero__title">
          Hello 👋, I'm <span className="hero__name">Ahmed Atef</span>
        </h1>
        <code className="hero__h1">&lt;/h1&gt;</code>
        <div>
          <code className="hero__p">&lt;p&gt;</code>
          <span className="hero__subtitle">Project Manager</span>
          <code className="hero__p">&lt;/p&gt;</code>
        </div>
        <code className="hero__body">&lt;/body&gt;</code>
        <code className="hero__html">&lt;/html&gt;</code>
      </div>
      {/* Rotating circle section */}
      <div className="hero__shape">
        {/* Personal image */}
        <figure className="hero__profile">
          <img
            alt="profile"
            src={isDark ? profileDark : profileLight}
            id="portfolio"
          />
        </figure>
        <div className="hero__circle">
          {/* Skills spaced evenly around the circle */}
          {orbitSkills.map((skill, index) => (
            <div
              className="hero__orbit-slot"
              key={skill.id}
              style={{ "--angle": `${(360 / orbitSkills.length) * index}deg` }}
            >
              <figure className="hero__skill" title={skill.name}>
                {skill.image ? (
                  <img alt={skill.name} src={skill.image} />
                ) : (
                  <FontAwesomeIcon
                    icon={skill.icon}
                    style={{ color: skill.color }}
                  />
                )}
              </figure>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

//Props type validation
Hero.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

export default Hero;
