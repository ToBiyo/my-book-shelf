CREATE TABLE "wish_read" (
	"wishread_book_id" text PRIMARY KEY NOT NULL,
	"user_id" text,
	"book_id" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "wish_read" ADD CONSTRAINT "wish_read_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;