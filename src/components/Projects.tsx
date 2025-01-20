export default function ProjectCard({ title, description, link }: { title: string; description: string; link: string }) {
    return (
      <div className="border p-4 rounded-md shadow-md bg-white dark:bg-gray-800">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
        <a href={link} className="text-blue-500 hover:underline">Voir le projet</a>
      </div>
    );
  }
  