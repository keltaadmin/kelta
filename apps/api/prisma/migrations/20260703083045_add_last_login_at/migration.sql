-- CreateEnum
CREATE TYPE "MemberStatus" AS ENUM ('PENDING', 'ACTIVE', 'INACTIVE', 'SUSPENDED', 'RETIRED');

-- CreateEnum
CREATE TYPE "CommitteeLevel" AS ENUM ('STATE', 'DISTRICT');

-- CreateEnum
CREATE TYPE "WorkflowStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'RETURNED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'DISABLED', 'LOCKED');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('DRAFT', 'SUBMITTED', 'DISTRICT_REVIEW', 'DISTRICT_APPROVED', 'STATE_REVIEW', 'APPROVED', 'RETURNED', 'REJECTED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "MembershipType" AS ENUM ('REGULAR', 'LIFE');

-- CreateEnum
CREATE TYPE "ApplicationSource" AS ENUM ('WEB', 'OFFICE', 'MOBILE');

-- CreateEnum
CREATE TYPE "WorkflowActionType" AS ENUM ('SUBMIT', 'APPROVE', 'REJECT', 'RETURN', 'CANCEL', 'COMPLETE', 'AUTO_APPROVE', 'REASSIGN', 'ESCALATE');

-- CreateEnum
CREATE TYPE "SequenceType" AS ENUM ('MEMBERSHIP_APPLICATION', 'MEMBER', 'RECEIPT', 'MEETING', 'CIRCULAR', 'CERTIFICATE', 'PAYMENT');

-- CreateTable
CREATE TABLE "District" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "District_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workflow" (
    "id" TEXT NOT NULL,
    "module" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "status" "WorkflowStatus" NOT NULL DEFAULT 'PENDING',
    "lastLoginAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "currentApproverRoleId" TEXT,
    "currentApproverUserId" TEXT,
    "dueDate" TIMESTAMP(3),
    "priority" INTEGER NOT NULL DEFAULT 1,
    "completedAt" TIMESTAMP(3),
    "currentStep" INTEGER NOT NULL DEFAULT 1,
    "templateId" TEXT,

    CONSTRAINT "Workflow_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "WorkflowAction" (
    "id" TEXT NOT NULL,
    "workflowId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "remarks" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "actedCommitteeMemberId" TEXT,
    "stepOrder" INTEGER NOT NULL,
    "action" "WorkflowActionType" NOT NULL,

    CONSTRAINT "WorkflowAction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Member" (
    "id" TEXT NOT NULL,
    "memberNumber" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "email" TEXT,
    "mobile" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "gender" "Gender",
    "addressLine1" TEXT,
    "addressLine2" TEXT,
    "city" TEXT,
    "state" TEXT,
    "postalCode" TEXT,
    "designation" TEXT,
    "joiningDate" TIMESTAMP(3),
    "photoUrl" TEXT,
    "whatsappNumber" TEXT,
    "isLifeMember" BOOLEAN NOT NULL DEFAULT false,
    "remarks" TEXT,
    "districtId" TEXT NOT NULL,
    "status" "MemberStatus" NOT NULL DEFAULT 'PENDING',
    "membershipApprovedAt" TIMESTAMP(3),
    "membershipExpiryDate" TIMESTAMP(3),
    "digitalIdIssuedAt" TIMESTAMP(3),
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "supabaseAuthId" TEXT,
    "email" TEXT,
    "memberId" TEXT,
    "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE',
    "lastLoginAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permission" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RolePermission" (
    "roleId" TEXT NOT NULL,
    "permissionId" TEXT NOT NULL,

    CONSTRAINT "RolePermission_pkey" PRIMARY KEY ("roleId","permissionId")
);

-- CreateTable
CREATE TABLE "UserRole" (
    "userId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("userId","roleId")
);

-- CreateTable
CREATE TABLE "Committee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "level" "CommitteeLevel" NOT NULL,
    "districtId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Committee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommitteePosition" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CommitteePosition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommitteeMember" (
    "id" TEXT NOT NULL,
    "committeeId" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "positionId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CommitteeMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "action" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "userId" TEXT,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "readAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FileAttachment" (
    "id" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "entityType" TEXT,
    "entityId" TEXT,
    "mimeType" TEXT,
    "uploadedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FileAttachment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SystemSetting" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" JSONB NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SystemSetting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MembershipApplication" (
    "id" TEXT NOT NULL,
    "applicationNo" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "email" TEXT,
    "mobile" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "gender" "Gender",
    "designation" TEXT,
    "addressLine1" TEXT,
    "addressLine2" TEXT,
    "city" TEXT,
    "state" TEXT,
    "postalCode" TEXT,
    "districtId" TEXT NOT NULL,
    "membershipType" "MembershipType" NOT NULL DEFAULT 'REGULAR',
    "source" "ApplicationSource" NOT NULL DEFAULT 'WEB',
    "status" "ApplicationStatus" NOT NULL DEFAULT 'DRAFT',
    "remarks" TEXT,
    "approvedMemberId" TEXT,
    "createdById" TEXT,
    "approvedById" TEXT,
    "submittedAt" TIMESTAMP(3),
    "approvedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MembershipApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RunningSequence" (
    "id" TEXT NOT NULL,
    "scope" TEXT,
    "currentNo" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" "SequenceType" NOT NULL,

    CONSTRAINT "RunningSequence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DigitalIdentity" (
    "id" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "memberNumber" TEXT NOT NULL,
    "publicToken" TEXT NOT NULL,
    "qrToken" TEXT NOT NULL,
    "cardVersion" INTEGER NOT NULL DEFAULT 1,
    "regeneratedCount" INTEGER NOT NULL DEFAULT 0,
    "issuedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3),
    "revokedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DigitalIdentity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "District_code_key" ON "District"("code");

-- CreateIndex
CREATE UNIQUE INDEX "District_name_key" ON "District"("name");

-- CreateIndex
CREATE INDEX "Workflow_module_idx" ON "Workflow"("module");

-- CreateIndex
CREATE INDEX "Workflow_entityType_entityId_idx" ON "Workflow"("entityType", "entityId");

-- CreateIndex
CREATE INDEX "Workflow_status_idx" ON "Workflow"("status");

-- CreateIndex
CREATE INDEX "Workflow_currentApproverUserId_idx" ON "Workflow"("currentApproverUserId");

-- CreateIndex
CREATE INDEX "Workflow_currentApproverRoleId_idx" ON "Workflow"("currentApproverRoleId");

-- CreateIndex
CREATE INDEX "Workflow_currentStep_idx" ON "Workflow"("currentStep");

-- CreateIndex
CREATE UNIQUE INDEX "WorkflowTemplate_code_key" ON "WorkflowTemplate"("code");

-- CreateIndex
CREATE INDEX "WorkflowTemplateStep_roleId_idx" ON "WorkflowTemplateStep"("roleId");

-- CreateIndex
CREATE UNIQUE INDEX "WorkflowTemplateStep_templateId_stepOrder_key" ON "WorkflowTemplateStep"("templateId", "stepOrder");

-- CreateIndex
CREATE INDEX "WorkflowAction_workflowId_idx" ON "WorkflowAction"("workflowId");

-- CreateIndex
CREATE INDEX "WorkflowAction_userId_idx" ON "WorkflowAction"("userId");

-- CreateIndex
CREATE INDEX "WorkflowAction_actedCommitteeMemberId_idx" ON "WorkflowAction"("actedCommitteeMemberId");

-- CreateIndex
CREATE INDEX "WorkflowAction_action_idx" ON "WorkflowAction"("action");

-- CreateIndex
CREATE UNIQUE INDEX "Member_memberNumber_key" ON "Member"("memberNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Member_email_key" ON "Member"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Member_mobile_key" ON "Member"("mobile");

-- CreateIndex
CREATE INDEX "Member_districtId_idx" ON "Member"("districtId");

-- CreateIndex
CREATE INDEX "Member_status_idx" ON "Member"("status");

-- CreateIndex
CREATE UNIQUE INDEX "User_supabaseAuthId_key" ON "User"("supabaseAuthId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_memberId_key" ON "User"("memberId");

-- CreateIndex
CREATE INDEX "User_status_idx" ON "User"("status");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Permission_code_key" ON "Permission"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Committee_code_key" ON "Committee"("code");

-- CreateIndex
CREATE UNIQUE INDEX "CommitteePosition_code_key" ON "CommitteePosition"("code");

-- CreateIndex
CREATE INDEX "CommitteeMember_memberId_idx" ON "CommitteeMember"("memberId");

-- CreateIndex
CREATE INDEX "CommitteeMember_committeeId_idx" ON "CommitteeMember"("committeeId");

-- CreateIndex
CREATE INDEX "CommitteeMember_positionId_idx" ON "CommitteeMember"("positionId");

-- CreateIndex
CREATE UNIQUE INDEX "CommitteeMember_committeeId_memberId_key" ON "CommitteeMember"("committeeId", "memberId");

-- CreateIndex
CREATE INDEX "AuditLog_entityType_entityId_idx" ON "AuditLog"("entityType", "entityId");

-- CreateIndex
CREATE INDEX "Notification_userId_idx" ON "Notification"("userId");

-- CreateIndex
CREATE INDEX "Notification_isRead_idx" ON "Notification"("isRead");

-- CreateIndex
CREATE INDEX "FileAttachment_entityType_entityId_idx" ON "FileAttachment"("entityType", "entityId");

-- CreateIndex
CREATE UNIQUE INDEX "SystemSetting_key_key" ON "SystemSetting"("key");

-- CreateIndex
CREATE UNIQUE INDEX "MembershipApplication_applicationNo_key" ON "MembershipApplication"("applicationNo");

-- CreateIndex
CREATE UNIQUE INDEX "MembershipApplication_approvedMemberId_key" ON "MembershipApplication"("approvedMemberId");

-- CreateIndex
CREATE INDEX "MembershipApplication_districtId_idx" ON "MembershipApplication"("districtId");

-- CreateIndex
CREATE INDEX "MembershipApplication_status_idx" ON "MembershipApplication"("status");

-- CreateIndex
CREATE INDEX "MembershipApplication_createdAt_idx" ON "MembershipApplication"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "RunningSequence_type_scope_key" ON "RunningSequence"("type", "scope");

-- CreateIndex
CREATE UNIQUE INDEX "DigitalIdentity_memberId_key" ON "DigitalIdentity"("memberId");

-- CreateIndex
CREATE UNIQUE INDEX "DigitalIdentity_memberNumber_key" ON "DigitalIdentity"("memberNumber");

-- CreateIndex
CREATE UNIQUE INDEX "DigitalIdentity_publicToken_key" ON "DigitalIdentity"("publicToken");

-- CreateIndex
CREATE UNIQUE INDEX "DigitalIdentity_qrToken_key" ON "DigitalIdentity"("qrToken");

-- CreateIndex
CREATE INDEX "DigitalIdentity_memberNumber_idx" ON "DigitalIdentity"("memberNumber");

-- CreateIndex
CREATE INDEX "DigitalIdentity_publicToken_idx" ON "DigitalIdentity"("publicToken");

-- AddForeignKey
ALTER TABLE "Workflow" ADD CONSTRAINT "Workflow_currentApproverRoleId_fkey" FOREIGN KEY ("currentApproverRoleId") REFERENCES "Role"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workflow" ADD CONSTRAINT "Workflow_currentApproverUserId_fkey" FOREIGN KEY ("currentApproverUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workflow" ADD CONSTRAINT "Workflow_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "WorkflowTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkflowTemplateStep" ADD CONSTRAINT "WorkflowTemplateStep_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkflowTemplateStep" ADD CONSTRAINT "WorkflowTemplateStep_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "WorkflowTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkflowAction" ADD CONSTRAINT "WorkflowAction_actedCommitteeMemberId_fkey" FOREIGN KEY ("actedCommitteeMemberId") REFERENCES "CommitteeMember"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkflowAction" ADD CONSTRAINT "WorkflowAction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkflowAction" ADD CONSTRAINT "WorkflowAction_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "Workflow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolePermission" ADD CONSTRAINT "RolePermission_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "Permission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolePermission" ADD CONSTRAINT "RolePermission_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Committee" ADD CONSTRAINT "Committee_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommitteeMember" ADD CONSTRAINT "CommitteeMember_committeeId_fkey" FOREIGN KEY ("committeeId") REFERENCES "Committee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommitteeMember" ADD CONSTRAINT "CommitteeMember_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommitteeMember" ADD CONSTRAINT "CommitteeMember_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "CommitteePosition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FileAttachment" ADD CONSTRAINT "FileAttachment_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MembershipApplication" ADD CONSTRAINT "MembershipApplication_approvedById_fkey" FOREIGN KEY ("approvedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MembershipApplication" ADD CONSTRAINT "MembershipApplication_approvedMemberId_fkey" FOREIGN KEY ("approvedMemberId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MembershipApplication" ADD CONSTRAINT "MembershipApplication_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MembershipApplication" ADD CONSTRAINT "MembershipApplication_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DigitalIdentity" ADD CONSTRAINT "DigitalIdentity_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;
