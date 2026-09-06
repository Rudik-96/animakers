import { useState } from 'react'
import { CONTACT } from '../data/site.js'

const EMPTY = { name: '', company: '', email: '', message: '' }

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY)

  const update = field => event =>
    setValues(prev => ({ ...prev, [field]: event.target.value }))

  const handleSubmit = event => {
    event.preventDefault()
    const subject = `New project enquiry — ${values.name}`
    const body = [
      `Name: ${values.name}`,
      values.company && `Company: ${values.company}`,
      `Email: ${values.email}`,
      '',
      values.message,
    ]
      .filter(Boolean)
      .join('\n')

    window.location.href =
      `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="field">
          <label htmlFor="name">Full name *</label>
          <input id="name" required placeholder="Your name" value={values.name} onChange={update('name')} />
        </div>
        <div className="field">
          <label htmlFor="company">Company</label>
          <input id="company" placeholder="Studio / brand" value={values.company} onChange={update('company')} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="email">Email *</label>
        <input id="email" type="email" required placeholder="you@company.com" value={values.email} onChange={update('email')} />
      </div>

      <div className="field">
        <label htmlFor="message">Message *</label>
        <textarea id="message" required placeholder="Tell us what you have in mind…" value={values.message} onChange={update('message')} />
      </div>

      <button type="submit" className="btn btn--primary" style={{ justifySelf: 'start' }}>
        Send message
      </button>
    </form>
  )
}
