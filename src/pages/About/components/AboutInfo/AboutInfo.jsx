//React
import PropTypes from "prop-types";
//Scss styling file
import "./AboutInfo.scss";
//Icons
import {
  faUser,
  faEnvelope,
  faPhone,
  faCalendar,
  faLocationDot,
  faPersonMilitaryRifle,
} from "@fortawesome/free-solid-svg-icons";
//Components
import IDEContainer from "../../../../shared/components/IDEContainer/IDEContainer";
import InfoCard from "../InfoCard/InfoCard";

//Contact information component
const AboutInfo = ({ className }) => {
  //classes variable to pass classes externally
  const classes = "info " + (className ? className : "");
  return (
    <IDEContainer className={classes}>
      <p>&lt;Personal Information /&gt;</p>
      {/* Name */}
      <InfoCard icon={faUser} text="Ahmed Atef" head="Name: " />
      {/* Email */}
      <InfoCard
        icon={faEnvelope}
        anchor={true}
        href="mailto:ahmedatef31100@gmail.com"
        text="ahmedatef31100@gmail.com"
        head="E-mail: "
      />
      {/* Phone number */}
      <InfoCard
        icon={faPhone}
        anchor={true}
        href="tel:+201119418172"
        text="+20 111-941-8172"
        head="Phone: "
      />
      {/* Date of birth */}
      <InfoCard icon={faCalendar} text="16-02-1994" head="Date of Birth: " />
      {/* City */}
      <InfoCard icon={faLocationDot} text="Alexandria, Egypt" head="City: " />
      {/* Military status */}
      <InfoCard
        icon={faPersonMilitaryRifle}
        text="Exempted"
        head="Military Status: "
      />
    </IDEContainer>
  );
};

//Props type validation
AboutInfo.propTypes = {
  className: PropTypes.string,
};

export default AboutInfo;
