import ApplicationStatusBadge from './ApplicationStatusBadge';

import { applications } from '@/lib/constants/application-status';

export default function ApplicationTable() {
  return (
    <div className="rounded-lg border bg-white">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-left">
              Application No
            </th>

            <th className="p-3 text-left">
              Applicant
            </th>

            <th className="p-3 text-left">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {applications.map((application) => (
            <tr
              key={application.id}
              className="border-b"
            >
              <td className="p-3">
                {application.applicationNumber}
              </td>

              <td className="p-3">
                {application.applicantName}
              </td>

              <td className="p-3">
                <ApplicationStatusBadge
                  status={application.status}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}