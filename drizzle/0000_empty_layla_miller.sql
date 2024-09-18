DO $$ BEGIN
 CREATE TYPE "public"."weather" AS ENUM('cloudy', 'rain', 'sunny');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "entries" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256),
	"content" varchar(2048),
	"weather" "weather",
	"image" varchar(128)
);
