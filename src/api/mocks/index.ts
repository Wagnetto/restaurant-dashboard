import { setupWorker } from 'msw/browser'
import { env } from '@/env'
import { signInMock } from './sign-in-mock'
import { restaurantRegisterMock } from './restaurant-register-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock'
import { getMonthOrdersAmountMock } from './get-month-orders-amount-mock'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount-mock'
import { getMonthRevenueMock } from './get-month-revenue-mock'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getPopularProductsMock } from './get-popular-products-mock'


export const setup = setupWorker(
  signInMock, 
  restaurantRegisterMock, 
  getDayOrdersAmountMock, 
  getMonthOrdersAmountMock, 
  getMonthCanceledOrdersAmountMock, 
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
      return
}

await setup.start()
}