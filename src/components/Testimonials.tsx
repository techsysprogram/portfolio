export default function Testimonials() {
  return (
    <section className="text-center">
      <h2 className="text-2.5rem font-bold mb-6">Témoignages</h2>
      <div className="space-y-6">
        <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <p className="italic text-1rem text-gray-700 dark:text-gray-300">
            "Miguel est un développeur extrêmement compétent et professionnel. Il a su nous accompagner dans la réalisation de nos projets en respectant les délais et les attentes."
          </p>
          <p className="mt-4 text-sm font-semibold text-blue-600 dark:text-blue-400">— Client A</p>
        </div>
        <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <p className="italic text-1rem text-gray-700 dark:text-gray-300">
            "Son expertise technique et son sens du détail ont été des atouts précieux pour notre projet."
          </p>
          <p className="mt-4 text-sm font-semibold text-blue-600 dark:text-blue-400">— Client B</p>
        </div>
      </div>
    </section>
  );
}
