import { districtMembers } from '@/lib/constants/district-dashboard';

export default function DistrictMembers() {
  return (
    <div className="rounded-lg border bg-white p-6">
      <h2 className="mb-4 font-semibold">
        District Members
      </h2>

      {districtMembers.map((member) => (
        <div
          key={member.id}
          className="border-b py-3"
        >
          <div>{member.name}</div>

          <div className="text-sm text-gray-500">
            {member.membershipNo}
          </div>
        </div>
      ))}
    </div>
  );
}