ALTER TABLE "entries" ALTER COLUMN "title" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "entries" ALTER COLUMN "content" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "entries" ALTER COLUMN "image" SET DATA TYPE varchar(512);--> statement-breakpoint
ALTER TABLE "entries" ALTER COLUMN "image" SET NOT NULL;