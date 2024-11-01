import { http, HttpResponse } from "msw"
import { GetPopularProductsResponse } from "../get-popular-products"

export const getPopularProductsMock = http.get<never, never, GetPopularProductsResponse>(
    '/metrics/popular-products', () => {
    return HttpResponse.json([
        {product: "margherita", amount: 2},
        {product: "calabresa", amount: 10},
        {product: "peperoni", amount: 2},
        {product: "gorgonzola", amount: 6},
        {product: "brócolis", amount: 8},
    ])
})