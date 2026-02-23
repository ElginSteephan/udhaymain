import React from 'react'
import { motion } from 'framer-motion'
import { setSEOTags } from '../lib/seo'
import { ArrowRight, Shield, Globe2, Truck, Boxes, FileCheck2 } from 'lucide-react'
import PartnerStrip from '../components/PartnerStrip'
import heroWatermark from '../assets/logo-watermark.png'


export default function Home() {
  React.useEffect(() => {
    setSEOTags({
      title:
        'Best CHA in Gandhidham | Udhay Shipping Services | Customs Broker for Kandla & Mundra',
      description:
        'Udhay Shipping Services is a trusted CHA and Customs Broker in Gandhidham providing fast, transparent customs clearance and EXIM support for Kandla, Mundra, Hazira and Mumbai (JNPT). 35+ years experience, 500+ monthly shipments.',
      keywords:
        'Best CHA in Gandhidham, CHA Gandhidham Gujarat, Customs Broker Kandla, Customs Clearance Mundra, CHA near Hazira Port, Freight Forwarder Gandhidham, Import Export Documentation India, EXIM Services Kutch'
    })
  }, [])

  return (
    <>
        {/* HERO */}
<section className="relative min-h-[75vh] flex items-center overflow-hidden hero-gradient text-white">
  
  {/* Background ship texture */}
  <div className="absolute inset-0 bg-[url('/hero-ship.jpg')] bg-cover bg-center opacity-10 mix-blend-soft-light pointer-events-none"></div>

  {/* Watermark centered behind text but does NOT affect layout */}
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
    <img
      src={heroWatermark}
      alt="Udhay Shipping Services watermark"
      className="w-[70%] md:w-[55%] lg:w-[45%] object-contain"

    />
  </div>

  {/* LEFT-ALIGNED TEXT CONTENT (unchanged layout) */}
  <div className="container relative py-20 md:py-10 max-w-6xl">

    <motion.p
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-[11px] md:text-xs font-semibold tracking-[0.3em] uppercase text-teal-200 mb-3"
    >
      CHA · CUSTOMS BROKER · GANDHIDHAM · KANDLA · MUNDRA · HAZIRA
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-4xl md:text-6xl font-bold leading-tight tracking-tight max-w-3xl"
    >
      Trusted Customs Broker in Gandhidham
      <span className="block text-teal-100">
        for Kandla, Mundra & Hazira Ports
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="mt-4 text-sm md:text-lg max-w-2xl text-slate-100"
    >
      Udhay Shipping Services is a professional Customs House Agent (CHA) and customs broker based in
      Gandhidham, delivering fast, compliant and transparent customs clearance for importers and exporters
      using Kandla, Mundra, Hazira and Mumbai (JNPT).
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1 }}
      className="mt-7 flex flex-wrap gap-3"
    >
      <a href="/contact" className="btn-primary flex items-center gap-2">
        Get Customs Clearance Quote <ArrowRight size={18} />
      </a>

      <a href="/hs-finder" className="btn-outline flex items-center gap-2">
        HS Code Finder & EXIM Tools <ArrowRight size={18} />
      </a>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="mt-6 text-[11px] md:text-xs text-slate-200"
    >
      35+ years combined experience · 500+ shipments monthly · SMEs · Traders · Manufacturers · Corporates
    </motion.div>

  </div>
</section>


      {/* STATS */}
      <section className="bg-slate-50 py-10 md:py-14 border-b border-slate-100">
        <div className="container max-w-6xl grid gap-6 md:grid-cols-3">
          {[
            ['500+', 'Shipments handled monthly across ports'],
            ['35+ Years', 'Combined CHA & customs experience'],
            ['4 Ports', 'Kandla · Mundra · Hazira · Mumbai (soon)']
          ].map(([value, label], i) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 + i * 0.15 }}
              className="card p-6 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-blue-900">{value}</div>
              <div className="text-xs md:text-sm text-slate-600 mt-1">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES SNAPSHOT etc... (unchanged from previous version) */}
      {/* ... keep the rest of the component exactly as I sent earlier ... */}
      <ServicesSnapshot />
      <PartnerStrip />
      <FinalCTA />
    </>
  )
}

/* move the snapshot + final cta into small helpers to keep file shorter */

function ServicesSnapshot() {
  const tiles = [
    {
      icon: Shield,
      title: 'Customs Clearance (CHA)',
      text: 'Fast, compliant customs clearance for FCL, LCL, break-bulk, project, reefer and DG cargo at Kandla, Mundra and Hazira.'
    },
    {
      icon: FileCheck2,
      title: 'Import / Export Documentation',
      text: 'End-to-end paperwork and compliance checks for invoices, packing lists, licenses, declarations and regulatory documents.'
    },
    {
      icon: Boxes,
      title: 'FCL / LCL & Project Handling',
      text: 'Containerised, special cargo and project shipments with structured planning and port coordination.'
    },
    {
      icon: Truck,
      title: 'Logistics & Transport Coordination',
      text: 'Coordination with reliable transport partners including ATL for yard, factory and warehouse deliveries.'
    },
    {
      icon: Globe2,
      title: 'Freight & EXIM Support',
      text: 'Support with freight planning, export scheduling and EXIM advisory for new and existing trade lanes.'
    },
    {
      icon: ArrowRight,
      title: 'Compliance & Duty Planning',
      text: 'Guidance on HS classification, duty structure and documentation to reduce delays, penalties and surprises.'
    }
  ]

  return (
    <section className="container max-w-6xl py-14 md:py-20">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3"
      >
        End-to-End Customs &amp; Logistics Support
      </motion.h2>
      <p className="text-sm md:text-base text-slate-600 text-center max-w-3xl mx-auto mb-10">
        As a full-service CHA in Gandhidham, we simplify import and export operations with complete
        support — from HS code classification and documentation to customs clearance, port handling
        and transport coordination.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {tiles.map(({ icon: Icon, title, text }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-6"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
              <Icon size={22} className="text-blue-900" />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-1">{title}</h3>
            <p className="text-xs md:text-sm text-slate-600">{text}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="/services"
          className="inline-flex items-center text-sm font-semibold text-blue-800 hover:underline"
        >
          View detailed CHA &amp; logistics service list <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-14 md:py-18 mt-10">
      <div className="container max-w-5xl text-center">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
          Need a reliable CHA near Kandla, Mundra or Hazira?
        </h2>
        <p className="text-sm md:text-base text-blue-100 max-w-2xl mx-auto mb-7">
          Share your upcoming import or export shipment. Our team will review your documents, suggest
          HS codes and duty structure, and propose a clear customs clearance plan.
        </p>
        <a href="/contact" className="btn-primary inline-flex items-center gap-2">
          Talk to Udhay Shipping today <ArrowRight size={18} />
        </a>
      </div>
    </section>
  )
}
