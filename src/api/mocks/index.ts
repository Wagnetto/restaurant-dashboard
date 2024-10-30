import { setupWorker } from 'msw/browser'
import { env } from '@/env'

export const setup = setupWorker()

export async function enableMSW() {
  if (env.MODE === 'test' || env.MODE === 'sandbox') {
      await setup.start()
    }
    
    return
}