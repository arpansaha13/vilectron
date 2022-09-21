import { _electron as electron } from 'playwright'
import { afterAll, beforeAll, expect, test } from 'vitest'

import type { ElectronApplication } from 'playwright'

let electronApp: ElectronApplication

beforeAll(async () => {
  electronApp = await electron.launch({
    args: ['dist/main/index.cjs'],
    colorScheme: 'dark',
  })
})

test('App should run', async () => {
  await new Promise<void>((res) => {
    setTimeout(() => {
      res()
    }, 5000)
  })
})

afterAll(async () => {
  await electronApp.close()
})
