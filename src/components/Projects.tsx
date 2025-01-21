export default function Projects() {
  return (
    <section>
      <h2 className="text-2.5rem font-bold text-center mb-8">Projets récents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-1.25rem font-semibold text-blue-600 dark:text-blue-400 mb-2">LIB - Logiciel de lotos associatifs</h3>
          <p className="text-1rem text-gray-700 dark:text-gray-300">
            Une application dédiée à l'organisation de lotos associatifs, intégrée à Scanlib pour une gestion simplifiée.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-1.25rem font-semibold text-blue-600 dark:text-blue-400 mb-2">Portfolio</h3>
          <p className="text-1rem text-gray-700 dark:text-gray-300">
            Un portfolio interactif et moderne, présentant mes compétences et réalisations professionnelles.
          </p>
        </div>
      </div>
    </section>
  );
}
