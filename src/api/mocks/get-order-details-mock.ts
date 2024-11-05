import { http, HttpResponse } from 'msw'
import {
  GetOrderDetailsResponse,
  GetOrderDetailsParams,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'Jim Doe',
      email: 'jimdoe@example.com',
      phone: '5199999999',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'item-1',
        priceInCents: 1200,
        quantity: 1,
        product: {
          name: 'Product 1',
        },
      },
      {
        id: 'item-2',
        priceInCents: 1300,
        quantity: 1,
        product: {
          name: 'Product 2',
        },
      },
    ],
    totalInCents: 2500,
  })
})
