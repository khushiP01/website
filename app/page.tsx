import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome</h1>
        <Link
          href="/design-system"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Go to Design System Landing Page
        </Link>
      </div>
    </main>
  );
}

