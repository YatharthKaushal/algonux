/*
  Warnings:

  - You are about to drop the `regitrations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "regitrations";

-- CreateTable
CREATE TABLE "Registrations" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "college" TEXT NOT NULL,
    "branch" TEXT NOT NULL,
    "semester" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Registrations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Registrations_email_key" ON "Registrations"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Registrations_phone_key" ON "Registrations"("phone");
