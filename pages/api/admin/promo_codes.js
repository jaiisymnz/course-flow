import pool from "../../../utils/db.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { code = "", page = 1, limit = 10 } = req.query;

      const parsedPage = parseInt(page, 10);
      const parsedLimit = parseInt(limit, 10);
      if (parsedPage < 1 || parsedLimit < 1) {
        return res.status(400).json({ error: "Invalid page or limit value." });
      }

      const offset = (parsedPage - 1) * parsedLimit;

      const query = `
        SELECT  
        pmc.promo_code_id,
        pmc.course_id,
        pmc.code,
        pmc.discount,
        pmc.created_at,
        pmc.updated_at,
        pmc.min_price,
        pmc.discount_type,
        c.course_name,
        COUNT(*) OVER() AS total
        FROM promo_codes AS pmc
        LEFT JOIN courses AS c ON pmc.course_id = c.course_id
        ${code ? "WHERE pmc.code ILIKE $1" : ""}
        ORDER BY pmc.promo_code_id
        LIMIT $${code ? 2 : 1} OFFSET $${code ? 3 : 2};
      `;
      const values = code
        ? [`%${code}%`, parsedLimit, offset]
        : [parsedLimit, offset];

      const { rows } = await pool.query(query, values);

      const total = rows.length > 0 ? parseInt(rows[0].total, 10) : 0;

      res.status(200).json({
        data: rows,
        total,
        currentPage: parsedPage,
        totalPages: Math.ceil(total / parsedLimit),
      });
    } catch (error) {
      console.error("Database query error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
