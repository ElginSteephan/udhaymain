import React from 'react'
import atlLogo from '../assets/partner-atl.png'

export default function PartnerStrip() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="container py-8 flex flex-col md:flex-row items-center gap-6 justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-1">
            Logistics Partner
          </p>
          <p className="text-sm text-slate-600 max-w-md">
            For container and road transportation, Udhay Shipping Services collaborates with{' '}
            <strong>ATL</strong> as a logistics partner, providing reliable trucking and cargo
            movement support after customs clearance.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3">
          <img
            src={atlLogo}
            alt="ATL logistics partner"
            className="h-10 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
