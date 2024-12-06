import pool from "../../../utils/db.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { name = "", page = 1, limit = 10 } = req.query;

      const parsedPage = parseInt(page, 10);
      const parsedLimit = parseInt(limit, 10);
      if (parsedPage < 1 || parsedLimit < 1) {
        return res.status(400).json({ error: "Invalid page or limit value." });
      }

      const offset = (parsedPage - 1) * parsedLimit;

      const query = `
        SELECT 
          c.course_id, 
          c.course_name, 
          c.detail, 
          c.image_file,
          c.total_time, 
          c.summary, 
          c.price, 
          c.video_file, 
          c.image_file, 
          c.document_file, 
          c.created_at, 
          c.updated_at, 
          (
            SELECT COUNT(*) 
            FROM lessons AS l 
            WHERE l.course_id = c.course_id
          ) AS lesson_count,
          COUNT(*) OVER() AS total
        FROM courses AS c
        ${name ? `WHERE c.course_name ILIKE $1` : ""}
        ORDER BY c.course_id
        LIMIT $${name ? 2 : 1} OFFSET $${name ? 3 : 2};
      `;

      const values = name
        ? [`%${name}%`, parsedLimit, offset]
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
      console.error("Database query error:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
