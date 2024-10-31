import { setupWorker } from 'msw/browser'
import { env } from '@/env'
import { signInMock } from './sign-in-mock'

export const setup = setupWorker(signInMock)

export async function enableMSW() {
  if (env.MODE !== 'test') {
      return
}

await setup.start()
}