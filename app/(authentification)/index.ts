import { z } from "zod";

export const RegisterSchema = z.object({
    fullname:z.string().min(4,'fullname at leates have 4 characters !'),
    email:z.string().email('email is not valid'),
    password:z.string().min(6,'password at leates have 6 characters !'),
})
export const LoginSchema = z.object({
    email:z.string().email('email is not valid'),
    password:z.string().min(6,'password at leates have 6 characters !'),
})