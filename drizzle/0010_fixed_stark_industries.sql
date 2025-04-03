CREATE TABLE "reviews" (
	"review_id" text PRIMARY KEY NOT NULL,
	"body" varchar(500) NOT NULL,
	"rating" integer,
	"my_books_id" text
);
--> statement-breakpoint
ALTER TABLE "my_books" ALTER COLUMN "book_id" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "reading_books" ALTER COLUMN "book_id" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "wish_read" ALTER COLUMN "book_id" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "my_books" ADD COLUMN "book_title" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "my_books" ADD COLUMN "cover_id" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "my_books" ADD COLUMN "authors" varchar(125)[] NOT NULL;--> statement-breakpoint
ALTER TABLE "my_books" ADD COLUMN "rating" real DEFAULT 0;--> statement-breakpoint
ALTER TABLE "reading_books" ADD COLUMN "book_title" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "reading_books" ADD COLUMN "cover_id" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "reading_books" ADD COLUMN "authors" varchar(125)[] NOT NULL;--> statement-breakpoint
ALTER TABLE "wish_read" ADD COLUMN "book_title" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "wish_read" ADD COLUMN "cover_id" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "wish_read" ADD COLUMN "authors" varchar(125)[] NOT NULL;--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_my_books_id_my_books_myBooks_id_fk" FOREIGN KEY ("my_books_id") REFERENCES "public"."my_books"("myBooks_id") ON DELETE no action ON UPDATE no action;