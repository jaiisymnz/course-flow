// /pages/api/courseById.js
import connectionPool from "@/utils/db.js";

export default async function handler(req, res) {
  const { slug } = req.query; // ดึง slug จาก URL
  console.log("Received slug:", slug);

  if (req.method === "GET") {
    const sqlStatement = `
      SELECT c.course_id, c.course_name, c.detail, c.total_time, c.summary, c.price, c.video_file, c.image_file, c.document_file, COUNT(l.lesson_id) AS lesson_count
      FROM courses AS c
      LEFT JOIN lessons AS l
      ON c.course_id = l.course_id
      WHERE c.course_id = $1
      GROUP BY c.course_id`;

    try {
      const result = await connectionPool.query(sqlStatement, [slug]);

      if (result.rows.length === 0) {
        return res.status(404).json({ message: "Course not found" });
      }

      res.status(200).json({ data: result.rows[0] });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({
        message: "Server could not process the request due to a database error",
      });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
