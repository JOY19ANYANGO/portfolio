// components/ProjectCard.jsx
export default function ProjectCard({ title, description, link }) {
  return (
    <div className="p-4 border rounded-lg shadow hover:shadow-md transition">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <a href={link} className="text-blue-500 mt-2 inline-block" target="_blank" rel="noopener noreferrer">
        View Project →
      </a>
    </div>
  );
}

