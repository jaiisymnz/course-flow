import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    },
});

export default pool;
