/*
  Warnings:

  - Added the required column `role` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('SUPER_ADMIN', 'ORG_ADMIN', 'ORG_MEMBER', 'ORG_TEACHER', 'ORG_PARENT', 'ORG_STUDENT');

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_organizationid_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "UserRole" NOT NULL,
ALTER COLUMN "organizationid" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_organizationid_fkey" FOREIGN KEY ("organizationid") REFERENCES "organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;
