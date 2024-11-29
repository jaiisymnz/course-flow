import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false, // Required for Supabase's SSL connection
  },
});

export default pool;
