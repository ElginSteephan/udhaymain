import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-12 bg-gradient-to-r from-blue-900 to-blue-950 text-white">
      <div className="container py-10 grid gap-5 md:grid-cols-4 text-sm">
        <div>
          <img src="/logo.png" alt="Udhay Shipping logo" className="h-14 mb-5" />
          <p>
            Trusted CHA & Customs Broker providing compliant customs clearance and logistics
            coordination for Kandla, Mundra, Hazira and Mumbai (JNPT).
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="space-y-1 text-slate-100/90">
            <li>Customs Clearance (CHA)</li>
            <li>Import / Export Documentation</li>
            <li>Freight Coordination</li>
            <li>Logistics & Transport Support</li>
            <li>Compliance & Advisory</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Ports & Locations</h4>
          <ul className="space-y-1 text-slate-100/90">
            <li>Gandhidham, Gujarat</li>
            <li>Kandla Port</li>
            <li>Mundra Port</li>
            <li>Hazira Port</li>
            <li>Mumbai (JNPT) – soon</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p>+91 9429001570</p>
          <p>+91 7041520054</p>
          <p className="mt-2">
            <a href="mailto:kandla.uss@gmail.com" className="underline">
              kandla.uss@gmail.com
            </a>
          </p>
          <p className="mt-2 text-slate-100/90">
            Plot No.101, Sector - 8, Unit No.13, Ground Floor, Iconic Business Center,
            Gandhidham-Kutch, 370201, Gujarat, India
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 text-xs text-center py-5 text-slate-200">
        © {new Date().getFullYear()} Udhay Shipping Services. All rights reserved. | CHA Gandhidham,
        Customs Broker Kandla, Customs Clearance Mundra, CHA Hazira.
      </div>
    </footer>
  )
}
