import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="grid min-h-screen place-items-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>

        <p className="mt-4 text-slate-400">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-lg bg-blue-600 px-6 py-3"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;