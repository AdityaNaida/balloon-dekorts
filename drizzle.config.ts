"use strict";
import * as dotenv from "dotenv";
dotenv.config();
 
const config ={
  schema: "./src/schema/*",
  out: "./drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL||'',
  }
};

export default config;