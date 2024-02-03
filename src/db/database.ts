import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import schema from "../schema";

const pool = new Pool({connectionString:  `${process.env.POSTGRES_URL}?sslmode=require`});

const db = drizzle(pool, { schema: schema });

export default db;
