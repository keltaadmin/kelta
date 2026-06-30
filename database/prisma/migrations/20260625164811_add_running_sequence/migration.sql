-- CreateTable
CREATE TABLE "RunningSequence" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "scope" TEXT,
    "currentNo" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RunningSequence_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RunningSequence_type_scope_key" ON "RunningSequence"("type", "scope");
