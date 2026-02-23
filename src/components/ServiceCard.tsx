import React from 'react'

export default function ServiceCard({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="card p-6">
      <h3 className="text-xl font-semibold mb-2 text-slate-900">{title}</h3>
      <div className="text-sm text-slate-600">{children}</div>
    </div>
  )
}
