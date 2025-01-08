-- CreateTable
CREATE TABLE "regitrations" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "college" TEXT NOT NULL,
    "branch" TEXT NOT NULL,
    "semester" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "regitrations_pkey" PRIMARY KEY ("id")
);
