require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
    methods: ["POST"],
  }),
);

app.use(express.json({ limit: "10kb" }));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

transporter.verify((error) => {
  if (error) {
    console.error("Gmail configuration error:", error.message);
  } else {
    console.log("Gmail transporter is ready.");
  }
});

app.post("/api/blog-comments", async (req, res) => {
  try {
    const { name, email, comment, blogTitle } = req.body;

    /* Basic validation */

    if (!name || !email || !comment) {
      return res.status(400).json({
        message: "Name, email and comment are required.",
      });
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof comment !== "string"
    ) {
      return res.status(400).json({
        message: "Invalid form data.",
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanComment = comment.trim();
    const cleanBlogTitle =
      typeof blogTitle === "string" && blogTitle.trim()
        ? blogTitle.trim()
        : "SocialMeUp Blog";

    /* Length validation */

    if (cleanName.length < 2 || cleanName.length > 100) {
      return res.status(400).json({
        message: "Please enter a valid name.",
      });
    }

    if (cleanEmail.length > 150) {
      return res.status(400).json({
        message: "Please enter a valid email address.",
      });
    }

    if (cleanComment.length < 2 || cleanComment.length > 5000) {
      return res.status(400).json({
        message: "Comment must be between 2 and 5000 characters.",
      });
    }

    /* Email validation */

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        message: "Please enter a valid email address.",
      });
    }

    await transporter.sendMail({
      from: `"SocialMeUp Blog" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_RECEIVER,
      replyTo: cleanEmail,

      subject: `New Blog Comment - ${cleanBlogTitle}`,

      text: `
New Blog Comment

Blog:
${cleanBlogTitle}

Name:
${cleanName}

Email:
${cleanEmail}

Comment:
${cleanComment}

--------------------------------
This comment was submitted from the SocialMeUp website.
      `,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px; color: #202020;">

          <h2 style="margin-bottom: 20px; color: #4762fd;">
            New Blog Comment
          </h2>

          <div style="background: #f7f8fc; border-radius: 10px; padding: 18px;">

            <p style="margin: 0 0 12px;">
              <strong>Blog:</strong><br />
              ${escapeHtml(cleanBlogTitle)}
            </p>

            <p style="margin: 0 0 12px;">
              <strong>Name:</strong><br />
              ${escapeHtml(cleanName)}
            </p>

            <p style="margin: 0 0 12px;">
              <strong>Email:</strong><br />
              ${escapeHtml(cleanEmail)}
            </p>

            <p style="margin: 0 0 8px;">
              <strong>Comment:</strong>
            </p>

            <div style="background: #ffffff; border: 1px solid #e1e5ef; border-radius: 8px; padding: 15px; line-height: 1.6;">
              ${escapeHtml(cleanComment).replace(/\n/g, "<br />")}
            </div>

          </div>

          <p style="margin-top: 20px; color: #707687; font-size: 13px;">
            This comment was submitted from the SocialMeUp website.
          </p>

        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Your comment has been submitted successfully.",
    });
  } catch (error) {
    console.error("Error sending blog comment:", error);

    return res.status(500).json({
      message: "Unable to send your comment right now. Please try again later.",
    });
  }
});

/* HTML escaping */

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* Health check */

app.get("/", (req, res) => {
  res.json({
    message: "SocialMeUp Blog Comment API is running.",
  });
});

/* Start server */

app.listen(PORT, () => {
  console.log(`Blog comment server running on port ${PORT}`);
});
