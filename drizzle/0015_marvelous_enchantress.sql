ALTER TABLE "my_books" DROP CONSTRAINT "my_books_myBooks_id_unique";--> statement-breakpoint
ALTER TABLE "my_books" ADD PRIMARY KEY ("myBooks_id");