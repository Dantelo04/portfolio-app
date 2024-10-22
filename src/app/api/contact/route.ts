// import { transporter } from "./action"
import { transporter } from '@/app/lib/action';


export async function POST(request:Request) {
    
    const data = await request.json()
    if(!data){
        return Response.json({ message: "Bad request" })
    }

    try {
        const info = await transporter.sendMail({
                from: data.from, // sender address
                to: "'Hola, Dante Rivarola' danterivadi.work@gmail.com", // list of receivers
                subject: data.subject, // Subject line
                text: data.text, // plain text body
                html: `<p style="white-space: pre-wrap;">${data.text}</p>`, // html body
            });
            console.log(info)
            return Response.json({message: 'Email sent to: danterivadi.work@gmail.com'});
    } catch(error) {
        console.log(error)
        return Response.json({ message: "Bad request" })
    }
}