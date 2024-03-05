/*
  Warnings:

  - Added the required column `updatedAt` to the `abastecimentos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_abastecimentos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cartuchoId" TEXT NOT NULL,
    "impressoraId" TEXT NOT NULL,
    "observacoes" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "abastecimentos_cartuchoId_fkey" FOREIGN KEY ("cartuchoId") REFERENCES "cartuchos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "abastecimentos_impressoraId_fkey" FOREIGN KEY ("impressoraId") REFERENCES "impressoras" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_abastecimentos" ("cartuchoId", "id", "impressoraId", "observacoes") SELECT "cartuchoId", "id", "impressoraId", "observacoes" FROM "abastecimentos";
DROP TABLE "abastecimentos";
ALTER TABLE "new_abastecimentos" RENAME TO "abastecimentos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
