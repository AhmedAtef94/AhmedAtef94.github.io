//Scss styling file
import "./Footer.scss";
//Icons
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
//Components
import FooterElement from "../FooterElement/FooterElement";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Title */}
      <p>Find me in:</p>
      <div className=" footer__container">
         {/* Github */}
         <FooterElement
          title="GitHub"
          href="https://github.com/AhmedAtef94"
          icon={faGithub}
        />
        {/* Linkedin */}
        <FooterElement
          icon={faLinkedin}
          title="LinkedIn"
          href="https://www.linkedin.com/in/ahmed-atef-b722b5b2/"
        />
      </div>
    </footer>
  );
};

export default Footer;
