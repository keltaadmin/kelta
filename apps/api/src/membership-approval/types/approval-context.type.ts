import { MembershipApplication, Workflow, User } from '@prisma/client';

export type ApprovalContext = {
  application: MembershipApplication;

  workflow: Workflow;

  approvedBy: User;
};
