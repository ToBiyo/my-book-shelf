ALTER TABLE "reviews" RENAME TO "personal_notes";--> statement-breakpoint
ALTER TABLE "personal_notes" RENAME COLUMN "review_id" TO "notes_id";--> statement-breakpoint
ALTER TABLE "personal_notes" DROP CONSTRAINT "reviews_my_books_id_my_books_myBooks_id_fk";
--> statement-breakpoint
ALTER TABLE "personal_notes" ADD CONSTRAINT "personal_notes_my_books_id_my_books_myBooks_id_fk" FOREIGN KEY ("my_books_id") REFERENCES "public"."my_books"("myBooks_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "my_books" ADD CONSTRAINT "my_books_myBooks_id_unique" UNIQUE("myBooks_id");