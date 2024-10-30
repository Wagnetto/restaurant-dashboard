import { api } from '@/lib/axios'

export interface ApproveOrderProps {
  orderId: string
}

export async function approveOrder({ orderId }: ApproveOrderProps) {
  await api.patch(`/orders/${orderId}/approve`)
}
