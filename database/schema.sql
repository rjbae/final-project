set client_min_messages to warning;
-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;
create schema "public";
 CREATE TABLE "public"."users" (
    "userId" serial NOT NULL,
    "username" TEXT NOT NULL UNIQUE,
    "hashedPassword" TEXT NOT NULL,
    CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "public"."posts" (
    "postId" serial NOT NULL,
    "userId" integer NOT NULL,
    "cameraUsed" TEXT NOT NULL,
    "locationName" TEXT NOT NULL,
    "feedback" TEXT NOT NULL,
    "photoUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL default now(),
    CONSTRAINT "posts_pk" PRIMARY KEY ("postId")
) WITH (
  OIDS=FALSE
);
ALTER TABLE "posts" ADD CONSTRAINT "posts_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
