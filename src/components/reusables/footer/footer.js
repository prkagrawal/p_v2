import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={"footer-container"}>
        <p className={"footer-content"}>
          Made with <FontAwesomeIcon icon={faHeart} color="red" /> and
          JavaScript by
          <a className={"github-link"} href={"github.com/prkagrawal"}>
            {" "}
            Prince
          </a>
        </p>
      </div>
      <FooterStyles />
    </React.Fragment>
  );
};

const FooterStyles = () => {
  return (
    <style jsx={"true"}>{`
      .footer-container {
        padding: 10px 10px;
        clear: both;
        position: relative;
        height: 50px;
        margin-top: -50px;
        background-color: #444;
        align-items: center;
        justify-content: center;
      }
      .footer-content {
        width: 100%;
        margin: 0 auto;
        text-align: center;
        vertical-align: middle;
        line-height: 30px;
      }
      .footer-content a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
      }
    `}</style>
  );
};

export default Footer;
