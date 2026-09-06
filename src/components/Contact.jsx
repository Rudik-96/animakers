import Blob from './Blob.jsx'
import ContactForm from './ContactForm.jsx'
import Eyebrow from './Eyebrow.jsx'
import Reveal from './Reveal.jsx'
import { MailIcon, PhoneIcon, PinIcon } from './icons.jsx'
import { CONTACT, SOCIALS } from '../data/site.js'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <Blob name="contact__blob-1" />
      <Blob name="contact__blob-2" />
      <Blob name="contact__blob-3" />

      <div className="wrap">
        <div className="sec-head center">
          <Eyebrow>Get in touch</Eyebrow>
          <Reveal as="h2">
            Let's make something<br />worth watching
          </Reveal>
        </div>

        <Reveal className="contact__box">
          <aside className="contact__aside">
            <h3>Tell us about your project</h3>
            <p>Drop us a line and we'll get back to you within a couple of days.</p>

            <div className="cinfo">
              <div className="cinfo__ico"><MailIcon /></div>
              <div>
                <b>Email</b>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
            </div>

            <div className="cinfo">
              <div className="cinfo__ico"><PhoneIcon /></div>
              <div>
                <b>Phone</b>
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </div>
            </div>

            <div className="cinfo">
              <div className="cinfo__ico"><PinIcon /></div>
              <div>
                <b>Address</b>
                <span>{CONTACT.address}</span>
              </div>
            </div>

            <div className="socials">
              {SOCIALS.map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <img src={icon} alt="" />
                </a>
              ))}
            </div>
          </aside>

          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
