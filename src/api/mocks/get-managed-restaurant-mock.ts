import { http, HttpResponse } from "msw"
import { GetManagedRestaurantResponse } from "../get-managed-restaurant"

export const getManagedRestaurantMock = http.get<never, never, GetManagedRestaurantResponse>('/managed-restaurant', () => {
    return HttpResponse.json({ 
        id: 'custom-restaurant-id',
        name: "Burger House",
        createdAt: new Date,
        updatedAt: null,
        description: "A nice restaurant",
        managerId: "custom-manager-id"
     })
})