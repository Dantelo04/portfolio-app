import nodemailer from "nodemailer";

interface formData {
    from:string,
    subject:string,
    text:string,
}

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
    },
});

// async..await is not allowed in global scope, must use a wrapper
export async function SendEmail(data:formData) {
    try {
        const info = await transporter.sendMail({
            from: '"Dante Rivarola" dante.rivadi@gmail.com', // sender address
            to: "danterivadi.work@gmail.com", // list of receivers
            subject: data.subject, // Subject line
            text: data.text, // plain text body
            html: `<h1>${data.subject}</h1>`, // html body
            });
        
            return ("Message sent: " + info.messageId);
    } catch(error) {
        return(error)
    }

}
