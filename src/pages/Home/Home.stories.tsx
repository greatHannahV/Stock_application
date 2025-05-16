import { Meta, StoryObj } from '@storybook/react'
import Home from './Home'
import * as StockService from '../../services/StockServices'
import { withProviders } from '#src/stories/decorators/withProviders.tsx'
import { mockStocks } from '#src/services/__mock__/stocks.ts'
import { vi } from 'vitest'

export default {
  title: 'Pages/Home',
  component: Home,
  decorators: [withProviders],
} as Meta

type Story = StoryObj<typeof Home>

export const Success: Story = {
  async beforeEach() {
    vi.spyOn(StockService, 'getStocksData').mockResolvedValue(mockStocks)
  },
}

export const ErrorScenario: Story = {
  async beforeEach() {
    vi.spyOn(StockService, 'getStocksData').mockRejectedValue(
      new Error('Failed to fetch data'),
    )
  },
}
