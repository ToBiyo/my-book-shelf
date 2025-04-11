CREATE TABLE "reviews" (
	"review_id" text PRIMARY KEY NOT NULL,
	"body" varchar(500) NOT NULL,
	"my_books_id" text
);
--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_my_books_id_my_books_myBooks_id_fk" FOREIGN KEY ("my_books_id") REFERENCES "public"."my_books"("myBooks_id") ON DELETE no action ON UPDATE no action;