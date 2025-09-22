// src/components/ContactForm.tsx
'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState<string>('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setMessage('')

    const form = e.currentTarget
    const fd = new FormData(form)

    try {
      const res = await fetch('/mail/send.php', {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      })

      const data = await res.json().catch(() => ({} as any))
      if (res.ok && (data?.ok || data?.status === 'ok')) {
        setStatus('success')
        setMessage('Thanks — your message has been sent. We’ll get back to you shortly.')
        form.reset()
      } else {
        setStatus('error')
        setMessage(
          data?.error ||
            'Sorry, something went wrong sending your message. Please try again or use the contact details.'
        )
      }
    } catch (err) {
      setStatus('error')
      setMessage(
        'Could not reach the mail server. If you are testing locally, deploy to a PHP-enabled host to send mail.'
      )
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      action="/mail/send.php" // graceful fallback if JS is disabled
      method="POST"
      className="grid grid-cols-1 gap-4"
    >
      {/* Honeypot anti-spam (should stay empty) */}
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[color:#031F3E]"
            placeholder="Full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[color:#031F3E]"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[color:#031F3E]"
            placeholder="+27 ..."
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-700">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[color:#031F3E]"
            placeholder="Enquiry / Specification"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[color:#031F3E]"
          placeholder="Please include grade, size, tonnage, and timing if possible."
        />
      </div>

      {/* Submit */}
      <div className="mt-2 flex items-center justify-between gap-4">
        <p className="text-xs text-slate-500">
          By submitting, you agree we may contact you regarding your enquiry.
        </p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center rounded-md bg-[color:#031F3E] px-5 py-3 font-semibold text-white hover:opacity-95 disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
      </div>

      {/* Status message */}
      {status !== 'idle' && (
        <div
          className={`mt-3 rounded-md border px-3 py-2 text-sm ${
            status === 'success'
              ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
              : status === 'error'
              ? 'border-rose-200 bg-rose-50 text-rose-700'
              : 'border-slate-200 bg-slate-50 text-slate-700'
          }`}
        >
          {message}
        </div>
      )}
    </form>
  )
}
