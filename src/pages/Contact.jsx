import { useState } from 'react';
import { useContent } from '../utils/useContent.js';
import { useSeo } from '../utils/useSeo.js';
import SectionHeader from '../components/SectionHeader.jsx';
import PageWrapper from '../components/PageWrapper.jsx';
import Button from '../components/Button.jsx';
import { useToast } from '../components/ToastProvider.jsx';

const Contact = () => {
  const content = useContent();
  const { notify } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useSeo({
    title: `Contact | ${content.personal.name}`,
    description: content.contact.headline
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    notify('Message queued. Thanks for reaching out!');
    setForm({ name: '', email: '', message: '' });
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content.personal.email);
    notify('Email copied to clipboard.');
  };

  return (
    <PageWrapper>
      <section className="section">
        <SectionHeader title="Contact" subtitle="Connect" />
        <div className="contact-grid">
          <div className="contact-card">
            <h3>{content.contact.headline}</h3>
            <p>{content.contact.cta}</p>
            <div className="contact-links">
              <Button as="button" variant="outline" onClick={handleCopy}>
                Copy email
              </Button>
              <Button as="a" href={`mailto:${content.personal.email}`}>
                Send Email
              </Button>
            </div>
            <p className="contact-meta">{content.personal.email}</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </label>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
