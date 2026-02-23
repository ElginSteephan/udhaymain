import React, { useState } from 'react'

const ENDPOINT = import.meta.env.VITE_GOOGLE_SHEET_ENDPOINT || ''

export default function ContactForm() {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || (!email && !phone) || !message) {
      setStatus({ ok: false, msg: 'Please fill name, message and email or phone.' })
      return
    }
    setLoading(true)
    setStatus(null)
    try {
      const body = {
        action: 'enquiry',
        name,
        company,
        email,
        phone,
        message,
        pageUrl: window.location.href,
        utm: new URLSearchParams(window.location.search).toString()
      }
      const res = await fetch(`${ENDPOINT}?action=enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      const json = await res.json()
      if (json && json.success) {
        setStatus({ ok: true, msg: 'Thank you. Your enquiry has been received.' })
        setName('')
        setCompany('')
        setEmail('')
        setPhone('')
        setMessage('')
      } else {
        setStatus({ ok: false, msg: 'Submission failed. Please try again.' })
      }
    } catch (err) {
      console.error(err)
      setStatus({ ok: false, msg: 'Network error. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Name *</label>
        <input
          className="w-full p-3 rounded-lg border border-slate-200 text-sm"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Company</label>
        <input
          className="w-full p-3 rounded-lg border border-slate-200 text-sm"
          value={company}
          onChange={e => setCompany(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Email</label>
          <input
            className="w-full p-3 rounded-lg border border-slate-200 text-sm"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Phone</label>
          <input
            className="w-full p-3 rounded-lg border border-slate-200 text-sm"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Message *</label>
        <textarea
          className="w-full p-3 rounded-lg border border-slate-200 text-sm h-28 resize-none"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </div>
      <button
        type="submit"
        disabled={loading || !ENDPOINT}
        className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending…' : 'Send Enquiry'}
      </button>
      {!ENDPOINT && (
        <p className="text-[11px] text-red-600 mt-1">
          Note: VITE_GOOGLE_SHEET_ENDPOINT is not configured. Add it in your .env file.
        </p>
      )}
      {status && (
        <div
          className={`text-xs mt-2 p-3 rounded-lg ${
            status.ok ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}
        >
          {status.msg}
        </div>
      )}
    </form>
  )
}
