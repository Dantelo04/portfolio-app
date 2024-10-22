import { Formdata } from "../contact/page"


export const sendContacForm = async (data:Formdata) => {
    const res = await fetch("/api/contact", {
        
        method:'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type':'application/json',
            Accept:'application/json',
        },
    })
    console.log(data)
    const response = await res.json()
    return response
}
