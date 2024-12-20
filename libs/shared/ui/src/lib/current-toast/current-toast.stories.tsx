import type { Meta, StoryObj } from '@storybook/react'
import { CurrentToast } from './current-toast'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<typeof CurrentToast> = {
  component: CurrentToast,
  title: 'CurrentToast'
}
export default meta
type Story = StoryObj<typeof CurrentToast>

export const Primary = {
  args: {}
}

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/Welcome to CurrentToast!/gi)).toBeTruthy()
  }
}
