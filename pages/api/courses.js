import pool from "@/utils/db";

export default async function createCourseData(req, res) {
  console.log("1");
  if (req.method === "POST") {
    const {
      courseName,
      price,
      totalTime,
      summary,
      detail,
      image,
      videoTrailer,
      file,
      created_by,
    } = req.body;
    console.log({
      courseName,
      price,
      totalTime,
      summary,
      detail,
      image,
      videoTrailer,
      file,
      created_by,
    });
    // Validate required fields
    if (
      !courseName ||
      !price ||
      !totalTime ||
      !summary ||
      !detail ||
      !image ||
      !videoTrailer
    ) {
      console.log("3");
      return res
        .status(400)
        .json({ error: "All fields except optional file are required." });
    }
console.log("4")
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
        videoTrailer,
        image,
        file || null, 
        new Date(),
        null,
      ];

      const { rows } = await pool.query(query, values);

      // Return the inserted course data
      return res.status(201).json({ message: "Course created successfully!" });
    } catch (error) {
      console.error("Error inserting course:", error);
      return res
        .status(500)
        .json({
          error: "Something went wrong while creating the course.",
          error: error.message,
        });
    }
  } else {
    // Method Not Allowed
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
