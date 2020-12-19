/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import TextLoop from "react-text-loop";

import Social from "../reusables/social-links-card/social";

const HomeStyles = () => {
  return (
    <style jsx={"true"}>{`
      .home-container {
        padding: 50px 15px;
        width: 100%;
      }
      .home-content {
      }
      .text-heading {
        font-weight: 600;
        font-size: 1.5rem;
      }
      .text-body {
        font-weight: 400;
        font-size: 1.25rem;
      }
      .designation {
        color: red;
      }
      .designation-web-developer {
      }
      .designation-cloud {
      }
      .designation-finance {
      }
      .home-content-footer {
        width: 100%;
      }
      .home-content-footer-btns {
        margin: 0 auto;
        width: 70%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
      }
      .primary-btn {
        padding: 8px 15px;
        background-color: var(--primary);
        border: 2px solid white;
        outline: none;
      }
    `}</style>
  );
};

const Home = (props) => {
  return (
    <div className={"home-container"} sx={{ color: "primary" }}>
      <div className="home-content">
        <p className="text-heading">Hey, Myself Prince Agrawal</p>
        <p className="text-body">
          Student of Computer Science Engineering at UIT RGPV University.
        </p>
        <p className="text-body">
          and a{" "}
          <TextLoop className={"designation"}>
            <span className={"designation-web-developer"}>
              Full Stack Web Developer
            </span>
            <span className={"designation-cloud"}>Cloud Enthusiast</span>
            <span className={"designation-finance"}>
              Finance Market Enthusiast
            </span>
          </TextLoop>
        </p>
        <div className="home-content-footer">
          <div className={"home-content-footer-btns"}>
            <a className="primary-btn" href="#contact">
              <span>Conact Me</span>
            </a>
            <a
              className="primary-btn"
              href="https://drive.google.com/file/d/1RdhxG7ntOR8UCA0s2071Cu7Bb-D1N6lr/view?usp=sharing"
            >
              <span>Get CV</span>
            </a>
          </div>
        </div>

        <hr />

        <Social />
      </div>
      <HomeStyles />
    </div>
  );
};

export default Home;
