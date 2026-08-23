// // ── Contact section ───────────────────────────────────────────
// Positioned as a FRESHER JOB SEEKER reaching out to recruiters
// Uses EmailJS to actually send messages to your inbox — no backend needed!
//
// ════════════════════════════════════════════════════════
//  🔑 SETUP — paste your 3 EmailJS values below:
//  1. Go to https://emailjs.com → sign up free
//  2. Email Services → Add Service → Gmail → get SERVICE_ID
//  3. Email Templates → Create Template → get TEMPLATE_ID
//     Template variables to use: {{from_name}} {{from_email}} {{role}} {{message}}
//  4. Account → Public Key → get PUBLIC_KEY
// ════════════════════════════════════════════════════════
const SERVICE_ID  = "service_xxxxxx";   // ← paste your Service ID
const TEMPLATE_ID = "template_xxxxxx";  // ← paste your Template ID
const PUBLIC_KEY  = "xxxxxxxxxxxxxxx";  // ← paste your Public Key

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { PERSONAL } from "../data";
import SectionHeader from "./SectionHeader";
import useInView from "./useInView";

const CONTACT_LINKS = [
  {
    icon:  "ri-mail-fill",
    label: "Email",
    color: "#EA4335",
    value: () => PERSONAL.email,
    href:  () => `https://mail.google.com/mail/?view=cm&to=${PERSONAL.email}`,
  },
  {
    icon:  "ri-phone-fill",
    label: "Phone",
    color: "#06d6a0",
    value: () => PERSONAL.phone,
    href:  () => `tel:${PERSONAL.phone.replace(/\s/g, "")}`,
  },
];

// Status of the send request
const STATUS = { IDLE: "idle", SENDING: "sending", SENT: "sent", ERROR: "error" };

export default function Contact() {
  const [ref, inView] = useInView();
  const [status, setStatus] = useState(STATUS.IDLE);
  const [form, setForm] = useState({ name: "", email: "", role: "", message: "" });
  const formRef = useRef(null);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async e => {
    e.preventDefault();
    setStatus(STATUS.SENDING);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          role:       form.role,
          message:    form.message,
        },
        PUBLIC_KEY
      );
      setStatus(STATUS.SENT);
      setForm({ name: "", email: "", role: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus(STATUS.ERROR);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-28 px-6">
      <div className="max-w-2xl mx-auto">
        <SectionHeader label="08. contact" title="Hire Me" accentColor="#7c3aed" />

        {/* Fresher job-seeker banner */}
        <div className="mb-10 p-5 rounded-xl border border-accent2/30 bg-accent2/6">
          <p className="text-accent2 text-sm leading-relaxed">
            <i className="ri-hand-heart-line mr-2 text-base" />
            I'm a <strong className="text-white">B.Tech CSE(AI&ML) fresher (2026 passout)</strong> actively
            looking for full-time roles in <strong className="text-white"> AI/ML | Full Stack </strong>,
            or related fields. I bring solid project work, internship experience, and published research.
          </p>
        </div>

        {/* Contact cards — email & phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {CONTACT_LINKS.map((c, i) => (
            <a key={c.label} href={c.href()} target="_blank" rel="noopener noreferrer"
              className={`flex items-center gap-4 p-4 rounded-xl border border-border bg-bg2
                hover:border-white/20 transition-all card-hover no-underline
                ${inView ? "fade-up in-view" : "fade-up"}`}
              style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: c.color + "18", border: `1px solid ${c.color}30` }}>
                <i className={`${c.icon} text-lg`} style={{ color: c.color }} />
              </div>
              <div>
                <p className="text-muted text-xs uppercase tracking-wider font-mono mb-0.5">{c.label}</p>
                <p className="text-accent2 text-sm font-mono break-all">{c.value()}</p>
              </div>
            </a>
          ))}
        </div>

        {/* ── Contact form ── */}
        {status === STATUS.SENT ? (
          /* Success state */
          <div className="p-10 bg-bg2 border border-accent2/40 rounded-2xl text-center">
            <i className="ri-checkbox-circle-line text-5xl text-accent2 mb-4 block" />
            <p className="font-head font-bold text-xl text-accent2 mb-2">Message Sent!</p>
            <p className="text-muted text-sm mb-6">
              Thanks for reaching out! I'll reply within 24 hours.
            </p>
            <button onClick={() => setStatus(STATUS.IDLE)}
              className="px-6 py-2 border border-border rounded-lg text-sm font-mono
                text-muted hover:text-white transition-colors cursor-pointer">
              Send another message
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={submit} className="flex flex-col gap-4">
            <h3 className="font-head font-bold text-xl text-white mb-1">Send a Message</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name" value={form.name} onChange={handle}
                placeholder="Your Name" required disabled={status === STATUS.SENDING}
                className="px-4 py-3 bg-bg2 border border-border rounded-lg text-white
                  text-sm font-mono outline-none focus:border-accent/50 transition-colors
                  disabled:opacity-50" />
              <input
                name="email" value={form.email} onChange={handle} type="email"
                placeholder="your@company.com" required disabled={status === STATUS.SENDING}
                className="px-4 py-3 bg-bg2 border border-border rounded-lg text-white
                  text-sm font-mono outline-none focus:border-accent/50 transition-colors
                  disabled:opacity-50" />
            </div>

            {/* Role — helps recruiter give context */}
            <input
              name="role" value={form.role} onChange={handle}
              placeholder="Role / Position (e.g. SDE, ML Engineer, Intern)" required
              disabled={status === STATUS.SENDING}
              className="px-4 py-3 bg-bg2 border border-border rounded-lg text-white
                text-sm font-mono outline-none focus:border-accent/50 transition-colors
                disabled:opacity-50" />

            <textarea
              name="message" value={form.message} onChange={handle} rows={5} required
              disabled={status === STATUS.SENDING}
              placeholder="Tell me about the opportunity or what you'd like to discuss..."
              className="px-4 py-3 bg-bg2 border border-border rounded-lg text-white
                text-sm font-mono outline-none focus:border-accent/50 transition-colors
                resize-y disabled:opacity-50" />

            {/* Error banner */}
            {status === STATUS.ERROR && (
              <div className="p-4 rounded-lg border border-accent3/40 bg-accent3/8
                text-accent3 text-sm font-mono flex items-center gap-2">
                <i className="ri-error-warning-line text-base" />
                Failed to send. Please email me directly at{" "}
                <a href={`mailto:${PERSONAL.email}`} className="underline">{PERSONAL.email}</a>
              </div>
            )}

            <button type="submit" disabled={status === STATUS.SENDING}
              className="py-3.5 bg-accent text-white rounded-lg font-mono font-bold
                text-sm tracking-wider hover:bg-accent/80 transition-colors cursor-pointer
                disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              {status === STATUS.SENDING ? (
                <>
                  <i className="ri-loader-4-line animate-spin" /> Sending...
                </>
              ) : (
                <>Send Message →</>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
