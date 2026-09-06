import asset from './asset.js'

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Services' },
]

export const LOGO = asset('/assets/logos/animakers-logo.png')

export const CONTACT = {
  email: 'info@animakers.studio',
  phone: '+374 44 282060',
  phoneHref: 'tel:+37444282060',
  address: 'Abovyan St. 23/20, Yerevan, Armenia',
}

export const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/animakers-studio/', icon: asset('/assets/icons/linkedin.svg') },
  { label: 'Facebook', href: '#', icon: asset('/assets/icons/fb.svg') },
  { label: 'Instagram', href: '#', icon: asset('/assets/icons/instagram.svg') },
]

export const STATS = [
  { value: '10+', label: 'Years of experience' },
  { value: '2023', label: 'Studio founded' },
  { value: '20+', label: 'Projects shipped' },
]

export const ABOUT_PHOTOS = [
  { src: asset('/assets/images/about-02.jpg'), alt: 'The Animakers team' },
]
