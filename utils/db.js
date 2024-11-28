<<<<<<< HEAD
import { Pool } from 'pg';

const connectionPool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    },
});

export default connectionPool;
=======
import * as pg from "pg";
import dotenv from "dotenv";

const { Pool } = pg.default;
dotenv.config();

const connectionPool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
});

export default connectionPool;
console.log(process.env.CONNECTION_STRING);
>>>>>>> c7fb902 (feat: create course page which shows all courses and search bar where can search keyword related course name)
