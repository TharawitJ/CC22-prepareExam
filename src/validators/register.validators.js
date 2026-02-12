import {z} from "zod"
export const registerValidator = z.object({
    username:z.string().min(4,"Username must be at least 4 characters"),
    password:z.string().min(6,"Password must be at least 6 characters"),
    email:z.email("email is invalid"),
    phone:z.string().regex(/^[0-9]{10}$/,"Phone must be number and 10 characters"),
})