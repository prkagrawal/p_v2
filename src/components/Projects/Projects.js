const ProjectsStyles = () => {
  return (
    <style jsx={"true"}>{`
      .container-projects {
        background-color: var(--bg);
      }
    `}</style>
  );
};

const Projects = () => {
  return (
    <div className={"container-projects"}>
      <h3>Projects</h3>
      <ProjectsStyles />
    </div>
  );
};

export default Projects;
