import { z } from 'zod'

const envSchema = z.object({
  MODE: z.enum(['production', 'test', 'development']),
  VITE_API_URL: z.string(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
})

const parsedEnv = envSchema.parse(import.meta.env)

export const env = {
  ...parsedEnv,
  VITE_API_URL: parsedEnv.VITE_API_URL,
  VITE_ENABLE_API_DELAY: parsedEnv.VITE_ENABLE_API_DELAY,
}
