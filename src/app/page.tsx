import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { ModeToggle } from "../components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <ModeToggle />
        </div>
        <header className="text-center mb-12">
          <Image
            src="https://media.licdn.com/dms/image/v2/D4E03AQEP5S4OuDp_Mw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729255545923?e=1743033600&v=beta&t=IhoG3vZPulJn6n4mSKXzBGDOyMS3lqv85T31JKSbsrA"
            alt="Miguel Bellota"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">Miguel Bellota</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            Développeur Full Stack | Étudiant en Informatique.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/techsysprogram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/miguel-bellota-157144194/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:votre@email.com"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">À propos</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Étudiant passionné en informatique avec une expérience en développement full stack. Je suis actuellement à
            la recherche de nouvelles opportunités pour mettre en pratique mes compétences et continuer à apprendre dans
            le domaine du développement web.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Expérience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium">Développeur Full Stack</h3>
              <p className="text-gray-600 dark:text-gray-400">Freelance · Temps partiel</p>
              <p className="text-gray-600 dark:text-gray-400">sept. 2022 - Aujourd'hui · 1 an 8 mois</p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Développement de sites web et d'applications pour divers clients, utilisant des technologies modernes
                comme React, Node.js, et MongoDB.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Formation</h2>
          <div>
            <h3 className="text-xl font-medium">Université de Technologie de Troyes</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Diplôme d'ingénieur, Informatique et sciences de l'information
            </p>
            <p className="text-gray-600 dark:text-gray-400">2021 - 2024</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Compétences</h2>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "React.js", "Node.js", "MongoDB", "HTML", "CSS", "Git", "Agile"].map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

