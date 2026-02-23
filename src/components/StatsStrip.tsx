import React from 'react'

export default function StatsStrip() {
  return (
    <section className="bg-slate-50 border-y border-slate-100">
      <div className="container py-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <div>
          <div className="text-2xl font-bold text-blue-900">15+ Years</div>
          <div className="text-sm text-slate-600">Experience in customs & CHA</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-900">500+ Clients</div>
          <div className="text-sm text-slate-600">Served across sectors</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-900">85+ Countries</div>
          <div className="text-sm text-slate-600">Global cargo footprint</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-900">24/7 Support</div>
          <div className="text-sm text-slate-600">For urgent shipments</div>
        </div>
      </div>
    </section>
  )
}
