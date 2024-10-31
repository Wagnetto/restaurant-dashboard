import  { http, HttpResponse } from 'msw'
import { RestaurantRegisterBody } from '../restaurant-register'

export const restaurantRegisterMock = http.post<never, RestaurantRegisterBody>('/restaurants', async ({ request }) => {
    const { restaurantName } = await request.json()
    
    if(restaurantName === "Burger House") {
        return new HttpResponse(null, { status: 201})
    }
    return new HttpResponse(null, { status: 401 })
})
  