const SkillsStyles = () => {
  return (
    <style jsx={"true"}>{`
      .container-skills {
        background-color: var(--bg);
      }
    `}</style>
  );
};

const Skills = () => {
  return (
    <div className={"container-skills"}>
      <h3>Skills</h3>
      <SkillsStyles />
    </div>
  );
};

export default Skills;
