// Import Supabase client
import connectionPool from "@/utils/db.js";

export default async function handler(req, res) {
    if (req.method === "GET"){
  let sqlStatement = `
    SELECT c.course_id, c.course_name, c.detail, c.total_time, c.summary, c.price, c.video_file, c.image_file, c.document_file, COUNT(l.lesson_id) AS lesson_count
    FROM courses AS c
    LEFT JOIN lessons AS l
    ON c.course_id = l.course_id
    GROUP BY c.course_id
    ORDER BY c.course_id`;

  let keywords = req.query.keywords;

  // ถ้ามี keywords ให้เพิ่ม WHERE ลงใน SQL query
  if (keywords) {
    sqlStatement = `
      SELECT c.course_id, c.course_name, c.detail, c.total_time, c.summary, c.price, c.video_file, c.image_file, c.document_file, COUNT(l.lesson_id) AS lesson_count
      FROM courses AS c
      LEFT JOIN lessons AS l
      ON c.course_id = l.course_id
      WHERE c.course_name ILIKE $1
      GROUP BY c.course_id
      ORDER BY c.course_id`;
  }

  try {
    // ใช้ parameterized query เพื่อป้องกัน SQL Injection
    const result = keywords
      ? await connectionPool.query(sqlStatement, [`%${keywords}%`])
      : await connectionPool.query(sqlStatement);

    res.status(200).json({ data: result.rows });
  } catch (error) {
    console.error(error); // Log ข้อผิดพลาดเพื่อช่วยในการดีบัก
    res.status(500).json({
      message: `Server could not view post because database connection failed`,
    });
  }}
  else {return res.status(404).json({message: `Not Found`})}
}
