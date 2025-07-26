import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic"; // for dev: avoids caching

export default async function ContactsPage() {
  const contacts = await prisma.contact.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">📥 Contact Submissions</h1>

      {contacts.length === 0 ? (
        <p className="text-gray-600">No submissions yet.</p>
      ) : (
        <ul className="space-y-4">
          {contacts.map((c) => (
            <li key={c.id} className="p-4 border rounded shadow-sm">
              <p><strong>Name:</strong> {c.name}</p>
              <p><strong>Email:</strong> {c.email}</p>
              <p><strong>Message:</strong> {c.message}</p>
              <p className="text-sm text-gray-500">
                {new Date(c.createdAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
