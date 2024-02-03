import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email"),
  fullname: text("full_name"),
  password: text("password"),
  otp: integer("otp"),
});
