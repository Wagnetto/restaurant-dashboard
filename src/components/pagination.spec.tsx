import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Pagination } from './pagination'

const spyOnPageChange = vi.fn()

describe('<Pagination />', () => {
  beforeEach(() => {
    spyOnPageChange.mockClear()
  })

  it('should display the component correctly', () => {
    render(
      <Pagination
        totalCount={200}
        pageIndex={0}
        perPage={10}
        onPageChange={spyOnPageChange}
      />,
    )
    expect(screen.getByText(/Página 1 de 20/i)).toBeInTheDocument()
    expect(screen.getByText(/Total de 200 item(s)/i)).toBeInTheDocument()
  })

  it('should navigate to the next page when button is clicked', async () => {
    render(
      <Pagination
        totalCount={200}
        pageIndex={0}
        perPage={10}
        onPageChange={spyOnPageChange}
      />,
    )

    const nextPageButton = screen.getByRole('button', {
      name: /Próxima página/i,
    })

    await userEvent.click(nextPageButton)

    expect(spyOnPageChange).toHaveBeenCalledWith(1)
  })

  it('should navigate to the previous page when button is clicked', async () => {
    render(
      <Pagination
        totalCount={200}
        pageIndex={5}
        perPage={10}
        onPageChange={spyOnPageChange}
      />,
    )

    const previousPageButton = screen.getByRole('button', {
      name: /Página anterior/i,
    })

    await userEvent.click(previousPageButton)

    expect(spyOnPageChange).toHaveBeenCalledWith(4)
  })

  it('should navigate to the first page when button is clicked', async () => {
    render(
      <Pagination
        totalCount={200}
        pageIndex={5}
        perPage={10}
        onPageChange={spyOnPageChange}
      />,
    )

    const firstPageButton = screen.getByRole('button', {
      name: /Primeira Página/i,
    })

    await userEvent.click(firstPageButton)

    expect(spyOnPageChange).toHaveBeenCalledWith(0)
  })

  it('should navigate to the last page when button is clicked', async () => {
    render(
      <Pagination
        totalCount={200}
        pageIndex={0}
        perPage={10}
        onPageChange={spyOnPageChange}
      />,
    )

    const lastPageButton = screen.getByRole('button', {
      name: /Última Página/i,
    })

    await userEvent.click(lastPageButton)

    expect(spyOnPageChange).toHaveBeenCalledWith(19)
  })
})
