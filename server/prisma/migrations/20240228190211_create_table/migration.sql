-- CreateTable
CREATE TABLE "statusCartuchos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "cartuchos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "statusCartuchoId" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "referencia" TEXT NOT NULL,
    CONSTRAINT "cartuchos_statusCartuchoId_fkey" FOREIGN KEY ("statusCartuchoId") REFERENCES "statusCartuchos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "abastecimentos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cartuchoId" TEXT NOT NULL,
    "impressoraId" TEXT NOT NULL,
    "observacoes" TEXT NOT NULL,
    CONSTRAINT "abastecimentos_cartuchoId_fkey" FOREIGN KEY ("cartuchoId") REFERENCES "cartuchos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "abastecimentos_impressoraId_fkey" FOREIGN KEY ("impressoraId") REFERENCES "impressoras" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "impressoras" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "setorId" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    CONSTRAINT "impressoras_setorId_fkey" FOREIGN KEY ("setorId") REFERENCES "Setores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Setores" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "sigla" TEXT NOT NULL
);
