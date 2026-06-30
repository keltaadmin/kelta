-- Rename business identifier column
ALTER TABLE "Member"
RENAME COLUMN "memberId" TO "memberNumber";

-- Rename the unique index
ALTER INDEX "Member_memberId_key"
RENAME TO "Member_memberNumber_key";