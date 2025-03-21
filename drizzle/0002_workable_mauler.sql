CREATE TABLE "reading_books" (
	"reading_books_id" text PRIMARY KEY NOT NULL,
	"user_id" text,
	"book_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "wishlist" (
	"books_wishlist_id" text PRIMARY KEY NOT NULL,
	"user_id" text,
	"book_id" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "my_books" ADD COLUMN "myBooks_id" text PRIMARY KEY NOT NULL;--> statement-breakpoint
ALTER TABLE "reading_books" ADD CONSTRAINT "reading_books_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "wishlist" ADD CONSTRAINT "wishlist_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "my_books" DROP COLUMN "books_wishlist_id";