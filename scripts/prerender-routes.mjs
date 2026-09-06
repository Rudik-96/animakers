import { copyFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const ROUTES = ['about', 'projects', 'services', 'contact']
const dist = 'dist'
const index = join(dist, 'index.html')

copyFileSync(index, join(dist, '404.html'))

for (const route of ROUTES) {
  const dir = join(dist, route)
  mkdirSync(dir, { recursive: true })
  copyFileSync(index, join(dir, 'index.html'))
}

console.log(`routes written: ${ROUTES.join(', ')} (+ 404.html)`)
