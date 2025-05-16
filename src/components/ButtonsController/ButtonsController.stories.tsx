// ButtonsController.stories.tsx
import { Meta, StoryObj } from '@storybook/react'
import ButtonsController from './ButtonsController'

const meta: Meta<typeof ButtonsController> = {
  component: ButtonsController,
  args: {
    chartTypes: [
      'candle',
      'bar',
      'line',
      'area',
      'scatterPlot',
      'hollow',
      'histogram',
      'baseline',
      'trend',
      'heikin-ashi',
    ],
    selected: 'candle',
  },
  argTypes: {
    selected: {
      options: [
        'candle',
        'bar',
        'line',
        'area',
        'scatterPlot',
        'hollow',
        'histogram',
        'baseline',
        'trend',
        'heikin-ashi',
      ],
      control: 'select',
    },
    onHandleChartTypeChange: { action: 'chartTypeChanged' },
  },
}

export default meta

type Story = StoryObj<typeof ButtonsController>

export const Default: Story = {
  args: {
    selected: 'candle',
  },
}
