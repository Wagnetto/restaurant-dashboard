import { http, HttpResponse } from "msw"
import { GetDailyRevenueInPeriodResponse } from "../get-daily-revenue-in-period"

export const getDailyRevenueInPeriodMock = http.get<never, never, GetDailyRevenueInPeriodResponse>('/metrics/daily-receipt-in-period', () => {
    return HttpResponse.json([
        { date: "20/10/2024", receipt: 300 },
        { date: "21/10/2024", receipt: 200 },
        { date: "22/10/2024", receipt: 100 },
        { date: "23/10/2024", receipt: 450 },
        { date: "24/10/2024", receipt: 500 },
     ])
})