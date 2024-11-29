import { Pool } from 'pg';
import dotenv from "dotenv";

dotenv.config();
const connectionPool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    },
});

export default connectionPool;