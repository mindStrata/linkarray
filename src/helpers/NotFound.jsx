import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-zinc-800 dark:text-white">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-zinc-400 mt-4">
          Oops! Page not found.
        </p>
        <p className="text-gray-500 mt-2">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          <span className="flex items-center justify-between">
            <ArrowLeft />
            Go Back Home
          </span>
        </a>
      </div>
    </div>
  );
}
