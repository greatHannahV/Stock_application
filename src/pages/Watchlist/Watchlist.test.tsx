import { render, screen } from '@testing-library/react'
import Watchlist from './Watchlist'
import { vi } from 'vitest'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

vi.mock('../../components/Navigation/Navigation', () => ({
  __esModule: true,
  default: () => <div data-testid="mock-navigation">Navigation</div>,
}))

vi.mock('../../components/WatchlistContent/WatchlistContent', () => ({
  __esModule: true,
  default: () => (
    <div data-testid="mock-watchlist-content">WatchlistContent</div>
  ),
}))

describe('Watchlist Component', () => {
  it('should render Navigation and WatchlistContent components', () => {
    const queryClient = new QueryClient()

    render(
      <QueryClientProvider client={queryClient}>
        <Watchlist />
      </QueryClientProvider>,
    )
    expect(screen.getByTestId('mock-navigation')).toBeInTheDocument()

    expect(screen.getByTestId('mock-watchlist-content')).toBeInTheDocument()
  })
})
