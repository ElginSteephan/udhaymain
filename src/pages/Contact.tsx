import React from 'react'
import { motion } from 'framer-motion'
import { setSEOTags } from '../lib/seo'
import { Phone, MapPin, ExternalLink, Mail } from 'lucide-react'

export default function Contact() {
  React.useEffect(() => {
    setSEOTags({
      title:
        'Contact Udhay Shipping Services | CHA & Customs Broker for Kandla, Mundra, Hazira',
      description:
        'Contact Udhay Shipping Services for customs clearance, CHA services, documentation and logistics coordination at Kandla, Mundra, Hazira and Mumbai (JNPT). Get fast, expert support from an experienced team.',
      keywords:
        'contact CHA Gandhidham, contact customs broker Kandla, Mundra customs clearance contact, Hazira CHA contact, import export help Gandhidham'
    })
  }, [])

  const emailLink =
    'mailto:kandla.uss@gmail.com' +
    '?subject=Customs%20Clearance%20Request%20-%20Import%20Export' +
    '&body=' +
    'Company%20Name:%0A' +
    'Contact%20Person:%0A' +
    'Phone%20Number:%0A' +
    'Port%20(Kandla/Mundra/Hazira/JNPT):%0A' +
    'Import%20or%20Export:%0A' +
    'Cargo%20Description:%0A' +
    'HS%20Code%20(if%20known):%0A' +
    'FCL/LCL/Break-bulk/Project/DG/Reefer:%0A' +
    'Expected%20Shipment%20Date:%0A%0A' +
    'Regards,'

  return (
    <div className="container max-w-6xl py-14 md:py-20">
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-slate-900 mb-3"
      >
        Contact / Get in Touch
      </motion.h1>

      <p className="text-sm md:text-base text-slate-700 max-w-3xl mb-10">
        Planning an import or export shipment? Get in touch with our CHA experts for fast and
        reliable customs clearance support at <strong>Kandla, Mundra, Hazira</strong> and
        <strong> Mumbai (JNPT)</strong>.
      </p>

      <div className="grid gap-10 md:grid-cols-2 items-start">
        {/* LEFT: CONTACT INFO */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Udhay Shipping Services – Head Office
            </h2>

            <div className="flex items-start gap-3 text-sm text-slate-700 mb-4">
              <MapPin className="mt-1 text-blue-900" size={18} />
              <p>
                Plot No.101, Sector - 8, Unit No.13, Ground Floor, Iconic Business Center,
                Gandhidham-Kutch, 370201, Gujarat, India
              </p>
            </div>

            <div className="flex items-start gap-3 text-sm text-slate-700 mb-4">
              <Phone className="mt-1 text-blue-900" size={18} />
              <div>
                <p>+91 9429001570</p>
                <p>+91 7041520054</p>
              </div>
            </div>

            <div className="text-xs text-slate-600 mt-2">
              <div className="font-semibold mb-1">Ports & Locations Served</div>
              <p>Kandla · Mundra · Hazira · Gandhidham · Mumbai (JNPT – opening soon)</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-xs">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Udhay+Shipping+Services+Gandhidham"
              target="_blank"
              rel="noreferrer"
              className="btn-outline flex items-center gap-2"
            >
              <MapPin size={14} />
              Open in Google Maps
            </a>
            <a
              href="https://www.google.com/search?q=Udhay+Shipping+Services+Gandhidham+reviews"
              target="_blank"
              rel="noreferrer"
              className="btn-outline flex items-center gap-2"
            >
              <ExternalLink size={14} />
              View / Leave Google Review
            </a>
          </div>

          <div className="text-xs text-slate-600">
            <div className="font-semibold mb-1">Helpful details to include</div>
            <ul className="list-disc list-inside space-y-1">
              <li>Port and type of shipment (Kandla, Mundra, Hazira or JNPT)</li>
              <li>Import or export, cargo description and HS code (if known)</li>
              <li>Estimated arrival or stuffing date</li>
            </ul>
          </div>
        </motion.section>

        {/* RIGHT: EMAIL CTA + MAP */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="card p-8 text-center">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Contact Our CHA Team
            </h2>

            <p className="text-sm text-slate-600 mb-6">
              Click below to open a structured customs enquiry in your email app. This helps
              our team understand your shipment faster and respond accurately.
            </p>

            <a
              href={emailLink}
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3"
            >
              <Mail size={18} />
              Contact Our CHA Team
            </a>

            <p className="text-[11px] text-slate-500 mt-4">
              Your email app (Gmail, Outlook or mobile mail) will open with a pre-filled enquiry
              format.
            </p>
          </div>

          <div className="h-64 md:h-72 rounded-2xl overflow-hidden border border-slate-200">
  <iframe
    title="Udhay Shipping Services Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.735581231715!2d70.13169744122874!3d23.064699452977557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950b94603ebb7ef%3A0xb0614da66fcbffa2!2sUdhay%20Shipping%20Services!5e0!3m2!1sen!2sin!4v1768152627491!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

        </motion.section>
      </div>
    </div>
  )
}
