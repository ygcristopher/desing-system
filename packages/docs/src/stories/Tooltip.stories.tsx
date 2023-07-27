import { Tooltip, TooltipProps } from '@radix-ui/react-tooltip'
import type { Meta, StoryObj } from '@storybook/react'
import { Box, Button } from '@ygc-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Hover me</Button>,
    content: 'This is a tooltip',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return <Box
        css={(
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '$20',
          background: '$gray500'
        )}
        >
        
      </Box>
    },
  ],
} as Meta

export const Primary: StoryObj<TooltipProps> = {}
