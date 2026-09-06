const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function FilmIcon() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.8" {...stroke}>
      <rect x="2.8" y="4.6" width="18.4" height="14.8" rx="2.4" />
      <path d="M2.8 9.2h18.4M7.4 4.6v4.6M12 4.6v4.6M16.6 4.6v4.6" />
      <path d="m10.5 12.3 4.7 2.7-4.7 2.7Z" />
    </svg>
  )
}

export function PaletteIcon() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.8" {...stroke}>
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.7-.9 1.4-1.8-.4-1.1.4-2.2 1.6-2.2H17a4 4 0 0 0 4-4c0-5.5-4-10-9-10Z" />
      <circle cx="7.5" cy="12" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="9.8" cy="8" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="14.3" cy="7.6" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="17" cy="11" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function CubeIcon() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.8" {...stroke}>
      <path d="m12 2.6 8 4.6v9.6l-8 4.6-8-4.6V7.2l8-4.6Z" />
      <path d="m4 7.2 8 4.6 8-4.6M12 11.8V21" />
    </svg>
  )
}

export function BulbIcon() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.8" {...stroke}>
      <path d="M9 18h6M10 21.2h4" />
      <path d="M12 2.8a6.2 6.2 0 0 0-3.6 11.2c.7.5 1.1 1.3 1.1 2.1h5c0-.8.4-1.6 1.1-2.1A6.2 6.2 0 0 0 12 2.8Z" />
    </svg>
  )
}

export function BoardIcon() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.8" {...stroke}>
      <rect x="2.8" y="4.4" width="18.4" height="15.2" rx="2.2" />
      <path d="M2.8 9.4h18.4M9 9.4v10.2M15 4.4v5" />
    </svg>
  )
}

export function RocketIcon() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.8" {...stroke}>
      <path d="M12 2.4c3.3 2.4 5.1 6 5.1 9.8l-2.4 3.4H9.3L6.9 12.2c0-3.8 1.8-7.4 5.1-9.8Z" />
      <circle cx="12" cy="9.8" r="2" />
      <path d="M9.6 15.6 7.5 19.8l2.9-1.3M14.4 15.6l2.1 4.2-2.9-1.3" />
    </svg>
  )
}

export function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.9" {...stroke}>
      <rect x="2.8" y="4.8" width="18.4" height="14.4" rx="2.4" />
      <path d="m3.4 7 8.6 6 8.6-6" />
    </svg>
  )
}

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.9" {...stroke}>
      <path d="M6.4 3.2h3l1.6 4-2 1.4a12.5 12.5 0 0 0 6.4 6.4l1.4-2 4 1.6v3a2 2 0 0 1-2.2 2A17.6 17.6 0 0 1 4.4 5.4a2 2 0 0 1 2-2.2Z" />
    </svg>
  )
}

export function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.9" {...stroke}>
      <path d="M12 21.4s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10.2" r="2.6" />
    </svg>
  )
}
