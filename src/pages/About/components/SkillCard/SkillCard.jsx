//React
import PropTypes from "prop-types";
//Scss styling file
import "./SkillCard.scss";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Wraps the skill image, or an icon when there is no image (name shows on hover)
const SkillCard = ({ name, image, icon, color }) => {
  if (!image) {
    return (
      <div className="skill-card" title={name}>
        <FontAwesomeIcon
          className="skill-card__icon"
          icon={icon}
          style={color ? { color } : undefined}
        />
      </div>
    );
  }
  return (
    <div className="skill-card" title={name}>
      <img alt={name} src={image} />
    </div>
  );
};

//Props type validation
SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  icon: PropTypes.object,
  color: PropTypes.string,
};

export default SkillCard;
