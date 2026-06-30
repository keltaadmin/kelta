/*
  Warnings:

  - Added the required column `stepOrder` to the `WorkflowAction` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `action` on the `WorkflowAction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "WorkflowActionType" AS ENUM ('SUBMIT', 'APPROVE', 'REJECT', 'RETURN', 'CANCEL', 'COMPLETE', 'AUTO_APPROVE', 'REASSIGN', 'ESCALATE');

-- AlterTable
ALTER TABLE "WorkflowAction" ADD COLUMN     "actedCommitteeMemberId" TEXT,
ADD COLUMN     "stepOrder" INTEGER NOT NULL,
DROP COLUMN "action",
ADD COLUMN     "action" "WorkflowActionType" NOT NULL;

-- CreateIndex
CREATE INDEX "Workflow_currentApproverUserId_idx" ON "Workflow"("currentApproverUserId");

-- CreateIndex
CREATE INDEX "Workflow_currentApproverRoleId_idx" ON "Workflow"("currentApproverRoleId");

-- CreateIndex
CREATE INDEX "Workflow_currentStep_idx" ON "Workflow"("currentStep");

-- CreateIndex
CREATE INDEX "WorkflowAction_actedCommitteeMemberId_idx" ON "WorkflowAction"("actedCommitteeMemberId");

-- CreateIndex
CREATE INDEX "WorkflowAction_action_idx" ON "WorkflowAction"("action");

-- CreateIndex
CREATE INDEX "WorkflowTemplateStep_roleId_idx" ON "WorkflowTemplateStep"("roleId");

-- AddForeignKey
ALTER TABLE "WorkflowAction" ADD CONSTRAINT "WorkflowAction_actedCommitteeMemberId_fkey" FOREIGN KEY ("actedCommitteeMemberId") REFERENCES "CommitteeMember"("id") ON DELETE SET NULL ON UPDATE CASCADE;
