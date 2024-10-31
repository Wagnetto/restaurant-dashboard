import { setupWorker } from 'msw/browser'
import { env } from '@/env'
import { signInMock } from './sign-in-mock'
import { restaurantRegisterMock } from './restaurant-register-mock'

export const setup = setupWorker(signInMock, restaurantRegisterMock)

export async function enableMSW() {
  if (env.MODE !== 'test') {
      return
}

await setup.start()
}