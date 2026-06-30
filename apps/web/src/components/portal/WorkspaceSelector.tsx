'use client';

import { WorkspaceType }
  from '@/types/workspace';

interface Props {
  value: WorkspaceType;

  onChange: (
    value: WorkspaceType
  ) => void;
}

export default function WorkspaceSelector({
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) =>
        onChange(
          e.target.value as WorkspaceType
        )
      }
      className="
        w-full
        rounded-lg
        border
        p-2
      "
    >
      <option value="member">
        Member Workspace
      </option>

      <option value="district">
        District Workspace
      </option>

      <option value="state">
        State Workspace
      </option>

      <option value="admin">
        Administration
      </option>
    </select>
  );
}