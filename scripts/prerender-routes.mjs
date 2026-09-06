import { copyFileSync, mkdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const dist = 'dist'
const index = join(dist, 'index.html')

const slugs = [...readFileSync('src/data/projects.js', 'utf8').matchAll(/slug: '([^']+)'/g)]
  .map(match => `projects/${match[1]}`)

const routes = ['about', 'projects', 'services', 'contact', ...slugs]

copyFileSync(index, join(dist, '404.html'))

for (const route of routes) {
  const dir = join(dist, route)
  mkdirSync(dir, { recursive: true })
  copyFileSync(index, join(dir, 'index.html'))
}

console.log(`${routes.length} routes written (+ 404.html)`)
