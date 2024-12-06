// /pages/api/courseById.js
import connectionPool from "@/utils/db.js";

export default async function handler(req, res) {
  const { slug } = req.query; // ดึง slug จาก URL

  if (req.method === "GET") {
    const sqlStatement = `
      SELECT
       c.course_id, c.course_name, c.detail, c.price, c.summary,
        l.lesson_id, l.lesson_name, 
        sl.sub_lesson_id, sl.sub_lesson_name
      FROM courses AS c
      LEFT JOIN lessons AS l ON c.course_id = l.course_id
      LEFT JOIN sub_lessons AS sl ON l.lesson_id = sl.lesson_id
      WHERE c.course_id = $1
      `;

    try {
      const result = await connectionPool.query(sqlStatement, [slug]);

      if (result.rows.length === 0) {
        return res.status(404).json({ message: "Course not found" });
      }

      const course = {
        course_id: result.rows[0].course_id,
        course_name: result.rows[0].course_name,
        detail: result.rows[0].detail,
        price : result.rows[0].price,
        summary : result.rows[0].summary,
        lessons: [],
      };

      result.rows.forEach((row) => {
        let lesson = course.lessons.find((l) => l.lesson_id === row.lesson_id);
        if (!lesson) {
          lesson = {
            lesson_id: row.lesson_id,
            lesson_name: row.lesson_name,
            sub_lessons: [],
          };
          course.lessons.push(lesson);
        }
        if (row.sub_lesson_id) {
          lesson.sub_lessons.push({
            sub_lesson_id: row.sub_lesson_id,
            sub_lesson_name: row.sub_lesson_name,
          });
        }
      });

      res.status(200).json({ data: course });
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
