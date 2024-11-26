import pool from "../../utils/db.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { code } = req.query;

      let query = `
        SELECT  
        pmc.promo_code_id,
        pmc.course_id,
        pmc.code,
        pmc.discount,
        pmc.created_at,
        pmc.updated_at,
        pmc.min_price,
        pmc.discount_type,
        c.course_name
        FROM promo_codes AS pmc
        LEFT JOIN courses AS c ON pmc.course_id = c.course_id
      `;
      const values = [];

      if (code) {
        query += ` WHERE pmc.code ILIKE $1 `;
        values.push(`%${code}%`);
      }

      query += `ORDER BY pmc.promo_code_id;`;

      const { rows } = await pool.query(query, values);
      res.status(200).json(rows);
    } catch (error) {
      console.error("Database query error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
