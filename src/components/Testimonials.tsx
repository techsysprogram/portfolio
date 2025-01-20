export default function TestimonialCard({ name, text }: { name: string; text: string }) {
    return (
      <div className="border p-4 rounded-md shadow-md bg-white dark:bg-gray-800">
        <p className="italic">"{text}"</p>
        <h3 className="font-bold mt-2">- {name}</h3>
      </div>
    );
  }
  