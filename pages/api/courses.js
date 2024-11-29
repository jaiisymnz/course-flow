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
  }}

export default async function handler(req, res) {
    console.log("1");
    if (req.method === "POST") {
    const {
      courseName,
      price,
      totalTime,
      summary,
      detail,
      imageUrl,
      videoUrl,
      fileUrl,
      created_by,
    } = req.body;

    // Validate required fields
    if (
      !courseName ||
      !price ||
      !totalTime ||
      !summary ||
      !detail ||
      !imageUrl ||
      !videoUrl
    ) {
      return res
        .status(400)
        .json({ error: "All fields except optional file are required." });
    }
    
    try {
      // Insert into the database
      const query = `
        INSERT INTO courses (course_name, detail, summary, price, created_by, total_time, video_file, image_file, document_file, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        RETURNING *;
      `;

      // Prepare values, replacing optional fields with NULL if they are not provided
      const values = [
        courseName,
        detail,
        summary,
        price,
        created_by,
        totalTime,
        videoUrl,
        imageUrl,
        fileUrl || null, // Use null if fileUrl is not provided
        new Date(),
        null,
      ];

      // Execute the query
      const { rows } = await pool.query(query, values);

      // Return the inserted course data
      return res
        .status(201)
        .json({ message: "Course created successfully!", data: rows[0] });
    } catch (error) {
      console.error("Error inserting course:", error);
      return res
        .status(500)
        .json({ error: "Something went wrong while creating the course.",
          error : error.message
         });
    }
  } else {
    // Method Not Allowed
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
