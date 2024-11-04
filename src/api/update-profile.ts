import { api } from '@/lib/axios'

export interface UpdateProfileBody {
  name: string
  description: string | null
}
export async function updateProfile({ name, description }: UpdateProfileBody) {
  await api.put<UpdateProfileBody>('/profile', { name, description })
}
