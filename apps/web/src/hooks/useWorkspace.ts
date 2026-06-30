'use client';

import {
  getWorkspace,
  setWorkspace,
} from '@/store/workspace.store';

export function useWorkspace() {
  return {
    workspace: getWorkspace(),
    setWorkspace,
  };
}