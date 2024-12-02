import pool from "../../../utils/db.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { description } = req.query;

      let query = `
        SELECT 
        a.assignment_id, 
        a.sub_lesson_id, 
        a.description,
        a.created_at, 
        a.updated_at, 
        sl.sub_lesson_name,
        l.lesson_name,
        c.course_name
        FROM assignments AS a
        LEFT JOIN sub_lessons AS sl ON a.sub_lesson_id = sl.sub_lesson_id
        LEFT JOIN lessons AS l ON sl.lesson_id = l.lesson_id
        LEFT JOIN courses AS c ON l.course_id = c.course_id
      `;
      const values = [];

      if (description) {
        query += ` WHERE a.description ILIKE $1 `;
        values.push(`%${description}%`);
      }

      query += `ORDER BY a.assignment_id;`;

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
