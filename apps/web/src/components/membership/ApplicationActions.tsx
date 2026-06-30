'use client';

export default function ApplicationActions() {
  return (
    <div className="flex gap-3">
      <button
        className="rounded bg-green-600 px-4 py-2 text-white"
      >
        Approve
      </button>

      <button
        className="rounded bg-red-600 px-4 py-2 text-white"
      >
        Reject
      </button>
    </div>
  );
}