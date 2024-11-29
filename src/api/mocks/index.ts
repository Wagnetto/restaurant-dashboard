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
import { getProfileMock } from './get-profile-mock'
import { getManagedRestaurantMock } from './get-managed-restaurant-mock'
import { updateProfileMock } from './update-profile-mock'
import { getOrdersMock } from './get-orders-mock'
import { getOrderDetailsMock } from './get-order-details-mock'
import { approveOrderMock } from './approve-order-mock'
import { dispatchOrderMock } from './dispatch-order-mock'
import { cancelOrderMock } from './cancel-order-mock'
import { deliverOrderMock } from './deliver-order-mock'

export const setup = setupWorker(
  signInMock,
  restaurantRegisterMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
  approveOrderMock,
  dispatchOrderMock,
  cancelOrderMock,
  deliverOrderMock,
)

export async function enableMSW() {
  // redirecting production environment to the mocked data
  if (env.MODE !== 'test' && process.env.NODE_ENV !== 'production') {
    return
  }

  await setup.start()
}
