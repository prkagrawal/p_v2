import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faGoogle,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const SocialStyles = () => {
  return (
    <style jsx={"true"}>{`
      .social-container {
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        // min-width: 500px;
        background-color: var(--bg); /*valuse from theme*/
      }
    `}</style>
  );
};

const Social = () => {
  return (
    <div className={"social-container"}>
      <a href={"http://github.com/prkagrawal"}>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href={"http://linkedin.com/in/prkagrawal"}>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href={"agrawalprk@gmail.com"}>
        <FontAwesomeIcon icon={faGoogle} />
      </a>
      <a href={"http://github.com/prkagrawal"}>
        <FontAwesomeIcon icon={faStackOverflow} />
      </a>
      <a href={"http://github.com/prkagrawal"}>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <SocialStyles />
    </div>
  );
};

export default Social;
