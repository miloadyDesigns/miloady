import nodemailer from "nodemailer"
export async function POST(req) {
    const { name, email, service, phoneNumber, message } = await req.json();

    const transporter = nodemailer.createTransport({
        host: 'mail.miloadydesigns.com',
        port: 587,
        secure: false,
        tls: {
            rejectUnauthorized: false // Disable TLS verification
        },
        auth: {
            user: "info@miloadydesigns.com",
            pass: "miloadydesign789_"
        }
    });

    const mailOptions = {
        from: "info@miloadydesigns.com",
        to: "info@miloadydesigns.com",
        subject: "Inquire from contact form MiloadyDesigns",
        html: `Full Name: ${name} <br/> Phone No: ${phoneNumber} <br/> Selected Service: ${service} <br/> Email:${email} <br/> Message: ${message}`,
        replyTo: email,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ message: 'Error sending message.' }), { status: 500 });
    }
}
