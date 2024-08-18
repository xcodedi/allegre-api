-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "organizationid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "logo_url" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_organizationid_fkey" FOREIGN KEY ("organizationid") REFERENCES "organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
