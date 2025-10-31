/*
  Warnings:

  - You are about to drop the column `line` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Member` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Member` DROP COLUMN `line`,
    DROP COLUMN `name`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
