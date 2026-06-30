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
ALTER TABLE "DigitalIdentity" ADD CONSTRAINT "DigitalIdentity_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;
