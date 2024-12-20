/* eslint-disable @typescript-eslint/no-empty-interface */
import { config as configBase } from '@tamagui/config'
import { createTamagui, createTokens } from 'tamagui'
import * as theme from '@shared-ui'

const tokens = createTokens({
  size: {
    sm: 38,
    md: 46,
    lg: 60
  },
  space: {
    sm: 15,
    md: 20,
    lg: 25
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 12
  },
  color: {
    white: '#fff',
    black: '#000'
  },
  zIndex: { 0: 0, 1: 100, 2: 200 }
})

export const config = createTamagui({
  ...configBase,
  tokens: {
    ...configBase.tokens,
    size: {
      ...configBase.tokens.size,
      ...tokens.size
    },
    space: {
      ...configBase.tokens.space,
      ...tokens.space
    },
    radius: {
      ...configBase.tokens.radius,
      ...tokens.radius
    },
    color: {
      ...configBase.tokens.color,
      ...tokens.color
    },
    zIndex: {
      ...configBase.tokens.zIndex,
      ...tokens.zIndex
    }
  },
  theme
})

export type Conf = typeof config

export default config
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
