import { BLOBS } from '../data/blobs.js'

export default function Blob({ name }) {
  const blob = BLOBS[name]
  if (!blob) return null

  return (
    <div className={`blob ${name}`}>
      <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill={blob.fill} d={blob.d} />
      </svg>
    </div>
  )
}
