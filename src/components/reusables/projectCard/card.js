import React from "react";
// import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Card = ({ props }) => {
  return (
    <React.Fragment>
      <div className={"card-container"}>
        <div className={"card-image-container"}>
          <img
            src={props.imgsrc ? props.imgsrc : ""}
            alt={props.imgalt ? props.imgalt : "Picture of the project"}
            className={"card-image"}
          />
        </div>
        <div className={"card-text-container"}>
          <p className={"card-text-title"}>
            {props.title ? props.title : "Project title"}
          </p>
          <p className={"card-text-body"}>
            {props.discription
              ? props.discription
              : "This is the project discription"}
          </p>
        </div>
        <div className={"card-footer"}>
          <a href={props.codeLink ? props.codeLink : ""}>
            <FontAwesomeIcon icon={faCode} /> &nbsp; View Code
          </a>
        </div>
      </div>
      <CardStyles />
    </React.Fragment>
  );
};

const CardStyles = () => {
  return (
    <style jsx={"true"}>{`
      .card-container {
        margin: 0 auto;
        padding: 10px 10px;
        width: 100%;
        max-width: 400px;
        height: 600px;
        border: 2px solid white;
        background-color: #303030;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      }
      .card-image-container {
        width: 100%;
        height: 275px;
      }
      .card-image {
        width: 100%;
        height: 100%;
      }
      .card-text-container {
        padding: 10px 0;
        width: 100%;
        height: 250px;
      }
      .card-text-title {
        font-weight: 600;
      }
      .card-text-body {
      }
      .card-footer {
      }
      .card-footer a {
        color: inherit;
        text-decoration: none;
      }
    `}</style>
  );
};

export default Card;
