import  { http, HttpResponse } from 'msw'
import { SignInBody } from '../sign-in'

export const signInMock = http.post<never, SignInBody>('/authenticate', async ({ request }) => {
    const { email } = await request.json()
    console.log(email)
    if(email === "johndoe@example.com") {
        return new HttpResponse(null, { status: 200,
            headers: {
                'Set-cookie': 'auth=sample-jwt'
            }
         })
    }
    return new HttpResponse(null, { status: 401 })
})
  