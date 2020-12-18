import ProjectCard from "../reusables/projectCard/card";

const ProjectsStyles = () => {
  return (
    <style jsx={"true"}>{`
      .container-projects {
        padding: 20px 15px;
      }
    `}</style>
  );
};

const project1 = {
  title: "Project 1",
  discription:
    "d1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit pariatur magnam quisquam voluptatibus maiores delectus error consequuntur eius suscipit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, eos veniam iure consectetur esse unde dolore amet! Ratione soluta harum saepe consectetur inventore accusamus, quaerat, deserunt nihil nisi enim praesentium?",
  imgsrc: "./images/desk.png",
  imgalt: "imgalt",
  codeLink: "http://github.com/prkagrawal",
};

const Projects = () => {
  return (
    <div className={"container-projects"}>
      <h3>Projects</h3>
      <ProjectCard props={project1} />
      <ProjectsStyles />
    </div>
  );
};

export default Projects;
