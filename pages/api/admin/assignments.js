import pool from "../../../utils/db.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { description = "", page = 1, limit = 10 } = req.query;

      const parsedPage = parseInt(page, 10);
      const parsedLimit = parseInt(limit, 10);
      if (parsedPage < 1 || parsedLimit < 1) {
        return res.status(400).json({ error: "Invalid page or limit value." });
      }

      const offset = (parsedPage - 1) * parsedLimit;

      const query = `
        SELECT 
          a.assignment_id, 
          a.sub_lesson_id, 
          a.description,
          a.created_at, 
          a.updated_at, 
          sl.sub_lesson_name,
          l.lesson_name,
          c.course_name,
          COUNT(*) OVER() AS total
          FROM assignments AS a
          LEFT JOIN sub_lessons AS sl ON a.sub_lesson_id = sl.sub_lesson_id
          LEFT JOIN lessons AS l ON sl.lesson_id = l.lesson_id
          LEFT JOIN courses AS c ON l.course_id = c.course_id
          ${description ? "WHERE a.description ILIKE $1" : ""}
          ORDER BY a.assignment_id
          LIMIT $${description ? 2 : 1} OFFSET $${description ? 3 : 2};
        `;

      const values = description
        ? [`%${description}%`, parsedLimit, offset]
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
