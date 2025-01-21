export default function Contact() {
    return (
      <section className="text-center">
        <h2 className="text-2.5rem font-bold mb-6">Contact</h2>
        <p className="text-1rem text-gray-700 dark:text-gray-300 mb-6">
          Intéressé par une collaboration ou des informations supplémentaires ? Contactez-moi !
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:votre@email.com"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500"
          >
            Me Contacter
          </a>
          <a
            href="/cv/miguel-bellota-cv.pdf"
            className="inline-block px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700"
            download
          >
            Télécharger Mon CV
          </a>
        </div>
      </section>
    );
  }
  