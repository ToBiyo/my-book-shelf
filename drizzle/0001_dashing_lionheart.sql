CREATE TABLE "my_books" (
	"books_wishlist_id" text PRIMARY KEY NOT NULL,
	"user_id" text,
	"book_id" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "my_books" ADD CONSTRAINT "my_books_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;