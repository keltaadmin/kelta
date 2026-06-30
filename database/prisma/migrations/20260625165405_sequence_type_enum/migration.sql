/*
  Warnings:

  - Changed the type of `type` on the `RunningSequence` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "RunningSequence" DROP COLUMN "type",
ADD COLUMN     "type" "SequenceType" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "RunningSequence_type_scope_key" ON "RunningSequence"("type", "scope");
