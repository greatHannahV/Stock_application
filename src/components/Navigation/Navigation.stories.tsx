import { StoryFn, Meta } from '@storybook/react'
import Navigation, { NavigationProps } from './Navigation'
import { withProviders } from '#src/stories/decorators/withProviders.tsx'

export default {
  title: 'Components/Navigation',
  component: Navigation,
  decorators: [withProviders],
  argTypes: {
    refetch: { action: 'refetch' },
    isFetching: { control: 'boolean' },
  },
} as Meta<NavigationProps>

const Template: StoryFn<NavigationProps> = (args: NavigationProps) => (
  <Navigation {...args} />
)

export const Default = Template.bind({})
Default.args = {
  refetch: () => {
    console.log('Refetch called')
  },
  isFetching: false,
}
