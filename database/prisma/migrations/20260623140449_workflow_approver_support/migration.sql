-- DropIndex
DROP INDEX "public"."Workflow_module_entityType_entityId_idx";

-- AlterTable
ALTER TABLE "Workflow" ADD COLUMN     "currentApproverRoleId" TEXT,
ADD COLUMN     "currentApproverUserId" TEXT,
ADD COLUMN     "dueDate" TIMESTAMP(3),
ADD COLUMN     "priority" INTEGER NOT NULL DEFAULT 1;

-- CreateIndex
CREATE INDEX "Workflow_module_idx" ON "Workflow"("module");

-- CreateIndex
CREATE INDEX "Workflow_entityType_entityId_idx" ON "Workflow"("entityType", "entityId");

-- CreateIndex
CREATE INDEX "Workflow_status_idx" ON "Workflow"("status");

-- AddForeignKey
ALTER TABLE "Workflow" ADD CONSTRAINT "Workflow_currentApproverRoleId_fkey" FOREIGN KEY ("currentApproverRoleId") REFERENCES "Role"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workflow" ADD CONSTRAINT "Workflow_currentApproverUserId_fkey" FOREIGN KEY ("currentApproverUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
