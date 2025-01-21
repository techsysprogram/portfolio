import Image from "next/image";

export default function Hero() {
  return (
    <header className="pt-28 pb-16 bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-800 dark:to-blue-600 text-white shadow-md">
      <div className="container mx-auto text-center">
        <Image
          src="https://res.cloudinary.com/dshznc4xx/image/upload/v1737478718/MiguelPC_d1f2ux.jpg"
          alt="Miguel Bellota"
          width={150}
          height={150}
          className="rounded-full mx-auto border-4 border-white mb-6"
        />
        <h1 className="text-3rem font-bold mb-2">Miguel Bellota</h1>
        <p className="text-1.5rem font-light mb-6">
          Développeur Logiciel & Full Stack | Fondateur de Techsysprogram
        </p>
      </div>
    </header>
  );
}
