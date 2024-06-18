import { api } from '@/lib/axios'

export interface RestaurantRegisterBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}
export async function restaurantRegister({
  restaurantName,
  managerName,
  email,
  phone,
}: RestaurantRegisterBody) {
  await api.post('/restaurants', { restaurantName, managerName, email, phone })
}
