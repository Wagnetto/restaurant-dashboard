import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NavLink } from './nav-link'

describe('NavLink', () => {
  it('should highlight the nav link when match the current page link', () => {
    render(
      <>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/home">Home</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>
          )
        },
      },
    )

    expect(screen.getByText(/About/i).dataset.current).toEqual('true')
    expect(screen.getByText(/Home/i).dataset.current).toEqual('false')
  })
})
