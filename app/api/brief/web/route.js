import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      businessName,
      purpose,
      navigation,
      websiteFeeling,
      businessDescription,
      targetAudience,
      additionalComments,
    } = body;

    const transporter = nodemailer.createTransport({
      host: "mail.miloadydesigns.com",
      port: 587,
      secure: false,
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user: "info@miloadydesigns.com",
        pass: "miloadydesign789_",
      },
    });

    const mailOptions = {
      from: "info@miloadydesigns.com",
      to: "info@miloadydesigns.com",
      subject: "Brief of Website from Miloadydesigns",
      html: `
        <p>Full Name: ${fullName}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Business Name: ${businessName}</p>
        <p>Purpose: ${purpose}</p>
        <p>Navigation: ${navigation}</p>
        <p>Website Feeling: ${websiteFeeling}</p>
        <p>Business Description: ${businessDescription}</p>
        <p>Target Audience: ${targetAudience}</p>
        <p>Additional Comments: ${additionalComments}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Thanks for submitting the brief!" }), { status: 200 });
  } catch (error) {
    console.error("Error sending mail:", error);
    return new Response(JSON.stringify({ message: "Error sending message." }), { status: 500 });
  }
}
