import { Navigation } from "@/components/navigation";

export default function TestPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

  return (
    <>
      <Navigation />
      <main className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-heading mb-6">Environment Test</h1>

        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <div>
            <strong>Sanity Project ID:</strong>
            <code className="ml-2 bg-gray-200 px-2 py-1 rounded">
              {projectId || "❌ Not set"}
            </code>
          </div>

          <div>
            <strong>Sanity Dataset:</strong>
            <code className="ml-2 bg-gray-200 px-2 py-1 rounded">
              {dataset || "❌ Not set"}
            </code>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
            <p className="text-sm">
              If these values show "❌ Not set", the .env.local file is not
              being read. Try restarting the dev server.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
