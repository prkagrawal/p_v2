const AboutStyles = () => {
  return (
    <style jsx={"true"}>{`
      .container-about {
        background-color: var(--bg);
      }
    `}</style>
  );
};

const About = () => {
  return (
    <div className={"container-about"}>
      <h3>About</h3>
      <AboutStyles />
    </div>
  );
};

export default About;
