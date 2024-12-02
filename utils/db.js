import { Pool } from 'pg';

const connectionPool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    },
});

export default connectionPool;
