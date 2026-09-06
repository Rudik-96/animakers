export default function asset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
