import React from 'react'
import { motion } from 'framer-motion'
import { setSEOTags } from '../lib/seo'
import { Ship, FileText, Truck, ClipboardList, ShieldCheck, PackageCheck } from 'lucide-react'

export default function Services() {
  React.useEffect(() => {
    setSEOTags({
      title:
        'CHA & Customs Clearance Services | Kandla, Mundra, Hazira | Udhay Shipping Services',
      description:
        'Explore CHA and customs clearance services from Udhay Shipping Services – including import/export documentation, port handling, freight coordination and compliance advisory for Kandla, Mundra, Hazira and Mumbai (JNPT).',
      keywords:
        'customs clearance Kandla, customs clearance Mundra, CHA Hazira, freight forwarding Gandhidham, import export documentation, DG cargo clearance, machinery import clearance, EXIM services'
    })
  }, [])

  const services = [
    {
      Icon: ShieldCheck,
      title: 'Customs Clearing & Forwarding (CHA)',
      text: 'End-to-end CHA operations for import and export shipments including document checks, filing, assessment follow-up, examinations and out-of-charge at Kandla, Mundra and Hazira.',
      img: '/cha-gandhidham-customs-clearance.jpg',
      alt: 'Customs clearing CHA in Gandhidham for Kandla, Mundra and Hazira ports'
    },
    {
      Icon: FileText,
      title: 'Import Clearance & Documentation',
      text: 'Support from pre-arrival to final delivery – document scrutiny, HS classification, valuation support and duty estimation for a wide range of commodities.',
      img: '/freight-forwarding-kandla.jpg',
      alt: 'Import clearance and documentation support near Kandla port'
    },
    {
      Icon: FileText,
      title: 'Export Clearance & Procedures',
      text: 'Shipping bill filing, export documentation, scheme mapping and coordination with carriers and terminals to keep exports running on schedule.',
      img: '/clearing-forwarding.jpg',
      alt: 'Export customs clearance and forwarding services'
    },
    {
      Icon: PackageCheck,
      title: 'FCL, LCL & Special Cargo Handling',
      text: 'Handling of FCL, LCL, break bulk, project cargo, reefer containers and DG cargo with special attention to documentation and operational requirements.',
      img: '/logistics-gandhidham.jpg',
      alt: 'FCL, LCL and special cargo handling at Kandla and Mundra ports'
    },
    {
      Icon: Truck,
      title: 'Logistics & Transport Coordination',
      text: 'Coordination with trusted logistics partners including Ahir Trans for container and cargo movement to factories, warehouses and project sites.',
      img: '/infrastructure-development.jpg',
      alt: 'Logistics and trucking support for containers at Gandhidham'
    },
    {
      Icon: ClipboardList,
      title: 'Compliance & Advisory Services',
      text: 'Consultation on HS codes, notifications, duty structures, documentation and process planning for new projects, plants and trade flows.',
      img: '/cargo-handling-hazira.jpg',
      alt: 'Compliance and customs advisory for importers and exporters'
    }
  ]

  return (
    <div className="container max-w-6xl py-14 md:py-20">
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-slate-900 mb-3"
      >
        Customs Clearance &amp; CHA Services
      </motion.h1>
      <p className="text-sm md:text-base text-slate-700 max-w-3xl mb-8">
        Udhay Shipping Services acts as a single-window{' '}
        <strong>CHA and customs clearance partner</strong> for businesses operating through Kandla,
        Mundra, Hazira and soon Mumbai (JNPT). Our team manages the complete customs lifecycle from
        documentation and HS classification to on-ground port coordination and logistics support.
      </p>

      <div className="grid gap-7 md:grid-cols-2">
        {services.map(({ Icon, title, text, img, alt }) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="card overflow-hidden flex flex-col"
          >
            <img src={img} alt={alt} className="h-40 w-full object-cover" />
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <Icon className="text-blue-900" size={22} />
                <h2 className="text-base md:text-lg font-semibold text-slate-900">{title}</h2>
              </div>
              <p className="text-xs md:text-sm text-slate-700 flex-1">{text}</p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* SUMMARY STRIP */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-10 bg-slate-900 text-white rounded-2xl px-6 py-7 md:px-10 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
      >
        <div>
          <h2 className="text-lg md:text-2xl font-semibold mb-1">
            End-to-end customs clearance for west-coast ports
          </h2>
          <p className="text-xs md:text-sm text-slate-200 max-w-xl">
            From document checklists and HS code guidance to port coordination and trucking,
            Udhay Shipping Services provides a complete CHA solution for Kandla, Mundra, Hazira and
            Mumbai (JNPT).
          </p>
        </div>
        <a href="/contact" className="btn-primary bg-white text-blue-900">
          Share your shipment details
        </a>
      </motion.section>
    </div>
  )
}
