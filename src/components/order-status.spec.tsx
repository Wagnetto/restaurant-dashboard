import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('OrderStatus', () => {
  it('should display correct text and badge color for "pending" status', () => {
    const wrapper = render(<OrderStatus status="pending" />)

    const statusText = wrapper.getByText(/Pendente/i)

    const statusBadge = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(statusBadge).toHaveClass('bg-slate-400')
  })
  it('should display correct text and badge color for "canceled" status', () => {
    const wrapper = render(<OrderStatus status="canceled" />)

    const statusText = wrapper.getByText(/Cancelado/i)

    const statusBadge = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(statusBadge).toHaveClass('bg-rose-500')
  })

  it('should display correct text and badge color for "delivered" status', () => {
    const wrapper = render(<OrderStatus status="delivered" />)

    const statusText = wrapper.getByText(/Entregue/i)

    const statusBadge = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(statusBadge).toHaveClass('bg-slate-400')
  })

  it('should display correct text and badge color for "delivering" status', () => {
    const wrapper = render(<OrderStatus status="delivering" />)

    const statusText = wrapper.getByText(/A caminho/i)

    const statusBadge = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(statusBadge).toHaveClass('bg-amber-500')
  })

  it('should display correct text and badge color for "processing" status', () => {
    const wrapper = render(<OrderStatus status="processing" />)

    const statusText = wrapper.getByText(/Em preparo/i)

    const statusBadge = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(statusBadge).toHaveClass('bg-amber-500')
  })

  it('should display correct text and badge color for "delivered" status', () => {
    const wrapper = render(<OrderStatus status="delivered" />)

    const statusText = wrapper.getByText(/Entregue/i)

    const statusBadge = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(statusBadge).toHaveClass('bg-slate-400')
  })
})
