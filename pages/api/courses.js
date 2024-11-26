import pool from "../../utils/db.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { name } = req.query;
      let query = `
        SELECT c.course_id, c.course_name, c.detail, c.total_time, c.summary, 
               c.price, c.video_file, c.image_file, c.document_file, c.created_at, c.updated_at, 
               COUNT(l.lesson_id) AS lesson_count 
        FROM courses AS c 
        LEFT JOIN lessons AS l ON c.course_id = l.course_id 
      `;
      const values = [];

      if (name) {
        query += ` WHERE c.course_name ILIKE $1 `;
        values.push(`%${name}%`);
      }

      query += `
        GROUP BY c.course_id, c.course_name, c.detail, c.total_time, c.summary, 
                 c.price, c.video_file, c.image_file, c.document_file 
        ORDER BY c.course_id;
      `;

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
