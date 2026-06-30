export default function MemberSummary() {
  return (
    <div className="rounded-lg border bg-white p-4">
      <h3 className="font-semibold mb-4">
        Member Summary
      </h3>

      <div className="space-y-2 text-sm">
        <p>
          <strong>Name:</strong> Demo Member
        </p>

        <p>
          <strong>Membership No:</strong>
          {' '}
          KELTA-2026-0001
        </p>

        <p>
          <strong>District:</strong>
          Thiruvananthapuram
        </p>

        <p>
          <strong>Status:</strong>
          Active
        </p>
      </div>
    </div>
  );
}