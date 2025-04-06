import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! Yummy dog! The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="text-blue-600 hover:underline text-sm font-medium"
      >
        ← Go back home
      </Link>
    </div>
  );
}
