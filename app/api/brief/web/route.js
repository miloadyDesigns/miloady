import nodemailer from 'nodemailer'

export async function POST(req) {
    const { name, email, phone, businessName, websitePurpose, webpageTitles, websiteFeeling, businessDescription, targetAudience, designPreferences, additionalComments, domain, hosting } = await req.json();
    const transnporter = nodemailer.createTransport({
        host: "mail.miloadydesigns.com",
        port: 587,
        secure: false,
        tls: {
            rejectUnauthorized: false
        },
        auth: {
            user: "info@miloadydesigns.com",
            pass: "miloadydesign789_"
        }
    })

    const mailOptions = {
        from: "info@miloadydesigns.com",
        to: "info@miloadydesigns.com",
        subject: "Brief of Website from Miloadydesigns",
        html: `Full Name: ${name} <br/> Email:${email} <br/> Phone No:${phone}
        <br/>
        Exact name of your business/organization: ${businessName}
        <br/>
        Kindly state the purpose of your website: (Is it a selling/informative website or a personal blog? etc.): ${websitePurpose}
        <br/>
        As per the navigation of your website, kindly state the title of your WebPages:(E.g.: Company Profile, Contact us etc.) : ${webpageTitles}
        <br/>
        What type of overall feeling would you like to project with your new Website Domain?(Corporate, fun, high-tech, etc...) : ${websiteFeeling}
        <br/>
        Please give a brief description of your business:(What type of products or services does your company supply? etc...) : ${businessDescription}
        <br/>
        State the target audience of your website : ${targetAudience}
        <br/>
        Do you have any specific design preferences? (If you have any particular likes or dislikes regarding any competitors website etc.): ${designPreferences}
        <br/>
        Do you have any additional comments? : ${additionalComments}
        <br/>
        Do you have a Domain Name?: ${domain}
        <br/>
        Do you want us to provide hosting for your website?: ${hosting}
        `,
        replyTo: email,
    }
    try {
        await transnporter.sendMail(mailOptions)
        return new Response(JSON.stringify({ message: 'Thanks for Submitting a brief' }))
    } catch (error) {
        console.log('Error sending mail: ', error);
        return new Response(JSON.stringify({ message: 'Error sending message.' }))
    }
}