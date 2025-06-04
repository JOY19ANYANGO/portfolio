// pages/Projects.jsx
import ProjectCard from "../components/ProjectCard";

const dummyProjects = [
  {
    title: "Portfolio Website",
    description: "Built with React and Tailwind CSS.",
    link: "#",
  },
  {
    title: "Weather App",
    description: "A simple weather app using OpenWeather API.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {dummyProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
