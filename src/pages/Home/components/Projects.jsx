import projects from "../../../../data.json";
import Card from "../components/common/Card";
const Projects = () => {
  return (
    <section className="flex flex-col h-full justify-center items-center w-full space-y-5 mb-5">
      <h1 className="font-bold font-lobsterTwo text-4xl text-mainColor">
        Projects
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 w-full px-[80px] gap-8">
        {projects.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
