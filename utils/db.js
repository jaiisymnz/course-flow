import * as pg from "pg";
import dotenv from "dotenv";

const { Pool } = pg.default;
dotenv.config();

dotenv.config();
const connectionPool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
});

export default connectionPool;
console.log(process.env.CONNECTION_STRING);
