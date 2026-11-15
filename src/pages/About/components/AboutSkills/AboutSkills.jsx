//React
import PropTypes from "prop-types";
//Scss styling file
import "./AboutSkills.scss";
//Components
import IDEContainer from "../../../../shared/components/IDEContainer/IDEContainer";
import SkillCard from "../SkillCard/SkillCard";
//Skills data
import { skills } from "../../../../config/db/skills";

const AboutSkills = ({ className }) => {
  //classes variable to pass classes externally
  const classes = "skills " + (className ? className : "");
  return (
    <IDEContainer className={classes}>
      {/* Title */}
      <p className="skills__header">&lt;Skills /&gt;</p>
      <div className="skills__content">
        {/* Project management section */}
        <div className="skills__container">
          <p className="skills__title">&lt;Project Management /&gt;</p>
          <div className="skills__set">
            {skills.projectManagement.map((skill) => (
              <SkillCard
                key={skill.id}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </div>
        </div>
        {/* FrameWorks section */}
        <div className="skills__container">
          <p className="skills__title">&lt;Libraries /&gt;</p>
          <div className="skills__set">
            {skills.frameworks.map((skill) => (
              <SkillCard image={skill.image} key={skill.id} name={skill.name} />
            ))}
          </div>
        </div>
        {/* Languages section */}
        <div className="skills__container">
          <p className="skills__title">&lt;Languages /&gt;</p>
          <div className="skills__set">
            {skills.languages.map((skill) => (
              <SkillCard image={skill.image} key={skill.id} name={skill.name} />
            ))}
          </div>
        </div>
        {/* Tools section */}
        <div className="skills__container">
          <p className="skills__title">&lt;Tools /&gt;</p>
          <div className="skills__set">
            {skills.tools.map((skill) => (
              <SkillCard image={skill.image} key={skill.id} name={skill.name} />
            ))}
          </div>
        </div>
      </div>
    </IDEContainer>
  );
};

//Props type validation
AboutSkills.propTypes = {
  className: PropTypes.string,
};

export default AboutSkills;
