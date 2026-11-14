//React
import PropTypes from "prop-types";
//Scss styling file
import "./AboutSummary.scss";
//Components
import IDEContainer from "../../../../shared/components/IDEContainer/IDEContainer";

const AboutSummary = ({ className }) => {
  //classes variable to pass classes externally
  const classes = "summary " + (className ? className : "");
  return (
    <IDEContainer className={classes}>
      <div className="summary__container">
        <p className="summary__title">&lt;About Me /&gt;</p>
        {/* Welcome message */}
        <div className="summary__hello">
          <h1 className="summary__hello-large">Hello World ^_^</h1>
          <h1 className="summary__hello-small">
            <span>Hello </span>
            <span>World </span>
            <span>^_^</span>
          </h1>
        </div>
        {/* About me */}
        <p>
          I'm a Project Manager in EdTech. I lead an 18-member team that
          delivers 105 courses every academic term, from content to monthly
          reviews, exams and final revisions, using Agile/Scrum, Jira and risk
          management to keep delivery on time.
        </p>
        <p>
          I started my career in insurance, financial planning and sales, moved
          into tech in 2022 through front-end training at Route Academy and ITI,
          and then joined Elkheta, where I grew from Data Entry Team Leader to
          Project Manager, bringing the client focus and target-driven
          discipline of my early roles into managing delivery.
        </p>
        <p>
          My background in Front-End Development (ITI and Route Academy) lets
          me speak the same language as engineering teams and look for
          technical answers to operational problems: I built the Curriculum
          Builder app to streamline team handovers, and I'm developing
          automation tools for OCR data extraction, PowerPoint generation,
          image enhancement and charts.
        </p>
      </div>
    </IDEContainer>
  );
};

//Props type validation
AboutSummary.propTypes = {
  className: PropTypes.string,
};

export default AboutSummary;
