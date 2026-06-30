-- CreateTable
CREATE TABLE "WorkflowTemplate" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkflowTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkflowTemplateStep" (
    "id" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "stepOrder" INTEGER NOT NULL,
    "roleId" TEXT NOT NULL,
    "actionName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkflowTemplateStep_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WorkflowTemplate_code_key" ON "WorkflowTemplate"("code");

-- CreateIndex
CREATE UNIQUE INDEX "WorkflowTemplateStep_templateId_stepOrder_key" ON "WorkflowTemplateStep"("templateId", "stepOrder");

-- CreateIndex
CREATE INDEX "WorkflowAction_workflowId_idx" ON "WorkflowAction"("workflowId");

-- CreateIndex
CREATE INDEX "WorkflowAction_userId_idx" ON "WorkflowAction"("userId");

-- AddForeignKey
ALTER TABLE "WorkflowTemplateStep" ADD CONSTRAINT "WorkflowTemplateStep_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "WorkflowTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkflowTemplateStep" ADD CONSTRAINT "WorkflowTemplateStep_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
