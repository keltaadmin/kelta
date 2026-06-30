-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('DRAFT', 'SUBMITTED', 'DISTRICT_REVIEW', 'DISTRICT_APPROVED', 'STATE_REVIEW', 'APPROVED', 'RETURNED', 'REJECTED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "MembershipType" AS ENUM ('REGULAR', 'LIFE');

-- CreateEnum
CREATE TYPE "ApplicationSource" AS ENUM ('WEB', 'OFFICE', 'MOBILE');

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

-- AddForeignKey
ALTER TABLE "MembershipApplication" ADD CONSTRAINT "MembershipApplication_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MembershipApplication" ADD CONSTRAINT "MembershipApplication_approvedMemberId_fkey" FOREIGN KEY ("approvedMemberId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MembershipApplication" ADD CONSTRAINT "MembershipApplication_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MembershipApplication" ADD CONSTRAINT "MembershipApplication_approvedById_fkey" FOREIGN KEY ("approvedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
