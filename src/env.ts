import { z } from 'zod'
//@ts-ignore
const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
})

export const env = import.meta.env
