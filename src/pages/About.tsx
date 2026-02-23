import React from 'react'
import { motion } from 'framer-motion'
import { setSEOTags } from '../lib/seo'
import { Users, HeartHandshake, Award, Building2 } from 'lucide-react'

export default function About() {
  React.useEffect(() => {
    setSEOTags({
      title:
        'About Udhay Shipping Services | Experienced CHA & Customs Broker in Gandhidham',
      description:
        'Udhay Shipping Services is a Gandhidham-based CHA and Customs Broker established in May 2024 with 35+ years combined experience, handling 500+ shipments monthly for SMEs, traders, manufacturers and corporates.',
      keywords:
        'About Udhay Shipping Services, CHA Gandhidham, Customs Broker Kandla, Customs Clearance Mundra, Hazira customs broker, EXIM experts Gujarat'
    })
  }, [])

  return (
    <div className="container max-w-6xl py-14 md:py-20">
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-slate-900 mb-3"
      >
        About Udhay Shipping Services
      </motion.h1>
      <p className="text-sm md:text-base text-slate-700 max-w-3xl mb-6">
        Udhay Shipping Services is a professionally managed{' '}
        <strong>Customs House Agent (CHA)</strong> and <strong>customs broker</strong> based in
        Gandhidham, Gujarat. Established in <strong>May 2024</strong>, the company is powered by a
        senior team with <strong>35+ years of combined experience</strong> in customs clearance,
        port operations, documentation and logistics coordination.
      </p>

      <div className="grid gap-8 md:grid-cols-2 mt-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="card p-6"
        >
          <h2 className="text-lg font-semibold text-slate-900 mb-2">Who We Serve</h2>
          <p className="text-sm text-slate-700 mb-3">
            We support a wide range of customers requiring reliable customs clearance and CHA
            support at <strong>Kandla, Mundra, Hazira and Mumbai (JNPT)</strong>.
          </p>
          <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
            <li>SME importers and exporters</li>
            <li>Large corporates and industrial groups</li>
            <li>Manufacturing companies and project owners</li>
            <li>Domestic and international traders</li>
          </ul>
          <p className="text-xs text-slate-500 mt-3">
            With <strong>500+ shipments handled every month</strong>, Udhay Shipping combines
            personal attention with robust operational capacity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="card p-6"
        >
          <h2 className="text-lg font-semibold text-slate-900 mb-2">Ports &amp; Locations</h2>
          <p className="text-sm text-slate-700 mb-3">
            Our team is based in <strong>Gandhidham</strong> and manages clearances and
            coordination across:
          </p>
          <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
            <li>Kandla Port</li>
            <li>Mundra Port</li>
            <li>Hazira Port</li>
            <li>Mumbai (JNPT) – operations opening soon</li>
          </ul>
          <p className="text-xs text-slate-500 mt-3">
            This west-coast coverage allows us to support clients with flexible routing and port
            options without changing their CHA partner.
          </p>
        </motion.div>
      </div>

      {/* FOUNDERS & VALUES */}
      <div className="grid gap-8 md:grid-cols-2 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="card p-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <Users className="text-blue-900" size={24} />
            <h2 className="text-lg font-semibold text-slate-900">Founders &amp; Leadership</h2>
          </div>
          <p className="text-sm text-slate-700 mb-3">
            Udhay Shipping Services is led by a team of experienced professionals with decades of
            experience in customs and port operations:
          </p>
          <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
            <li>
              <strong>Thomas Varghese</strong>
            </li>
            <li>
              <strong>Byju Govindan Kutty</strong>
            </li>
            <li>
              <strong>Anas Mattackad Kochumuhammed</strong>
            </li>
            <li>
              <strong>Mahesh Rajabhai Jaru</strong>
            </li>
          </ul>
          <p className="text-xs text-slate-500 mt-3">
            Together, they bring long-standing expertise across documentation, operations, CFS
            coordination, inspections and logistics planning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="card p-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <HeartHandshake className="text-blue-900" size={24} />
            <h2 className="text-lg font-semibold text-slate-900">People &amp; Culture</h2>
          </div>
          <p className="text-sm text-slate-700 mb-3">
            Udhay Shipping Services believes that strong, ethical operations start with how we treat
            people. The company is built on respect for both <strong>clients</strong> and{' '}
            <strong>employees</strong>.
          </p>
          <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
            <li>Every worker is treated with dignity and fairness</li>
            <li>Commitment to safe, ethical working conditions</li>
            <li>Encouragement of long-term careers and growth</li>
            <li>Open communication and transparent practices</li>
          </ul>
          <p className="text-xs text-slate-500 mt-3">
            A people-first approach ensures that the service delivered to customers is consistent,
            reliable and responsible.
          </p>
        </motion.div>
      </div>

      {/* VALUES STRIP */}
      <div className="grid gap-6 md:grid-cols-3 mt-10">
        {[
          {
            Icon: Award,
            title: 'Experience & Reliability',
            text: '35+ years of hands-on customs clearance and CHA experience with thousands of shipments handled.'
          },
          {
            Icon: Building2,
            title: 'Compliance & Transparency',
            text: 'Clear documentation, honest advice and a compliance-first mindset in every shipment handled.'
          },
          {
            Icon: HeartHandshake,
            title: 'Trust & Long-Term Relations',
            text: 'Focus on building long-term partnerships with clients, partners and employees based on trust.'
          }
        ].map(({ Icon, title, text }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="card p-5"
          >
            <Icon size={24} className="text-blue-900 mb-2" />
            <h3 className="text-base font-semibold text-slate-900 mb-1">{title}</h3>
            <p className="text-xs md:text-sm text-slate-600">{text}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-12 bg-slate-900 text-white rounded-2xl px-6 py-7 md:px-10 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
      >
        <div>
          <h2 className="text-lg md:text-2xl font-semibold mb-1">
            Planning imports or exports via Kandla, Mundra or Hazira?
          </h2>
          <p className="text-xs md:text-sm text-slate-200 max-w-xl">
            Share your upcoming shipment details and our team will review your documents, suggest
            HS codes, and outline a clear customs clearance and logistics plan.
          </p>
        </div>
        <a href="/contact" className="btn-primary bg-white text-blue-900">
          Contact Udhay Shipping
        </a>
      </motion.div>
    </div>
  )
}
