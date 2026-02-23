import React, { useState, useEffect, useMemo } from "react"
import { setSEOTags } from "../lib/seo"
import {
  Search,
  Percent,
  Calculator,
  Boxes,
  TrendingUp,
  ChevronDown
} from "lucide-react"

type HSRow = {
  HS_Code: number
  Description: string
  Duty_Percent: number
  Remarks?: string
}

type ToolKey = "duty" | "import" | "export" | "container"

export default function HSFinder() {
  const [query, setQuery] = useState("")
  const [data, setData] = useState<HSRow[]>([])
  const [activeTool, setActiveTool] = useState<ToolKey>("duty")
  const [showSuggestions, setShowSuggestions] = useState(false)

  useEffect(() => {
    setSEOTags({
      title: "HS Code Finder & EXIM Tools | Udhay Shipping Services",
      description:
        "Professional HS Code search and EXIM planning tools."
    })

    fetch(import.meta.env.VITE_GOOGLE_SHEET_ENDPOINT)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(() => setData([]))
  }, [])

  const filtered = useMemo(() => {
    if (!query) return []
    const q = query.toLowerCase()
    return data.filter(item =>
      item.HS_Code.toString().includes(q) ||
      item.Description.toLowerCase().includes(q)
    ).slice(0, 8)
  }, [query, data])

  function highlight(text: string) {
    if (!query) return text
    const parts = text.split(new RegExp(`(${query})`, "gi"))
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase()
        ? <mark key={i} className="bg-yellow-200 px-1 rounded">{part}</mark>
        : part
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-14">

      <h1 className="text-3xl font-semibold mb-8 text-slate-900">
        HS Code Finder
      </h1>

      {/* SEARCH */}
      <div className="relative mb-12">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          value={query}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search HS code or description..."
          className="w-full pl-12 pr-4 py-3 border rounded-xl shadow-sm text-sm focus:ring-2 focus:ring-blue-900 outline-none"
        />

        {/* Animated Suggestions */}
        {showSuggestions && filtered.length > 0 && (
          <div className="absolute w-full bg-white border rounded-xl shadow-lg mt-2 z-50 max-h-72 overflow-y-auto animate-fadeIn">
            {filtered.map(item => (
              <div
                key={item.HS_Code}
                onClick={() => {
                  setQuery(item.HS_Code.toString())
                  setShowSuggestions(false)
                }}
                className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm"
              >
                <div className="font-semibold text-blue-900">
                  {highlight(item.HS_Code.toString())}
                </div>
                <div className="text-slate-600 text-xs">
                  {highlight(item.Description)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RESULTS */}
      {query && filtered.length > 0 && (
        <div className="mb-16 border rounded-xl divide-y">
          {filtered.map(item => (
            <div key={item.HS_Code} className="p-4 flex justify-between items-start">
              <div>
                <div className="text-sm font-semibold text-blue-900">
                  {highlight(item.HS_Code.toString())}
                </div>
                <div className="text-sm text-slate-600">
                  {highlight(item.Description)}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-500">Duty</div>
                <div className="text-sm font-semibold">
                  {item.Duty_Percent}%
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* EXIM DASHBOARD */}
      <h2 className="text-2xl font-semibold mb-6">EXIM Planning Tools</h2>

      <div className="grid md:grid-cols-4 gap-3 mb-8">
        {[
          { key: "duty", label: "Duty", icon: Percent },
          { key: "import", label: "Import", icon: Calculator },
          { key: "export", label: "Export", icon: TrendingUp },
          { key: "container", label: "Container", icon: Boxes }
        ].map(tool => (
          <button
            key={tool.key}
            onClick={() => setActiveTool(tool.key as ToolKey)}
            className={`flex items-center justify-center gap-2 py-3 text-sm rounded-lg border transition
            ${
              activeTool === tool.key
                ? "bg-blue-900 text-white border-blue-900"
                : "bg-white border-slate-200 hover:bg-slate-50"
            }`}
          >
            <tool.icon size={16} />
            {tool.label}
          </button>
        ))}
      </div>

      <div className="border rounded-xl p-6 shadow-sm bg-white max-w-2xl">
        {activeTool === "duty" && <DutyCalculator data={data} />}
        {activeTool === "import" && <ImportCalculator />}
        {activeTool === "export" && <ExportCalculator />}
        {activeTool === "container" && <ContainerPlanner />}
      </div>

      <div className="text-xs text-slate-500 mt-6">
        * All calculations are indicative only. For accurate classification and duty
        assessment, please contact Udhay Shipping Services.
      </div>
    </div>
  )
}

/* ================= TOOLS ================= */

function Input({ placeholder, onChange }: any) {
  return (
    <input
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-900 outline-none"
    />
  )
}

function DutyCalculator({ data }: any) {
  const [hs,setHs]=useState("")
  const [cif,setCif]=useState("")
  const [result,setResult]=useState<any>(null)

  function calc(){
    const item=data.find((d:any)=>d.HS_Code.toString()===hs)
    if(!item)return
    const basic=(parseFloat(cif)||0)*item.Duty_Percent/100
    const igstRate=item.Remarks?.toLowerCase().includes("igst")?18:0
    const igstAmt=(parseFloat(cif)+basic)*(igstRate/100)
    setResult({basic,igstRate,igstAmt,total:parseFloat(cif)+basic+igstAmt})
  }

  return(
    <div className="space-y-4">
      <Input placeholder="HS Code" onChange={e=>setHs(e.target.value)} />
      <Input placeholder="CIF Value ₹" onChange={e=>setCif(e.target.value)} />
      <button onClick={calc} className="w-full bg-blue-900 text-white py-2 rounded-lg text-sm">
        Calculate
      </button>
      {result&&(
        <div className="text-sm space-y-1">
          <div>Basic Duty: ₹{result.basic.toFixed(2)}</div>
          <div>IGST ({result.igstRate}%): ₹{result.igstAmt.toFixed(2)}</div>
          <div className="font-semibold border-t pt-2">
            Total: ₹{result.total.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  )
}

function ImportCalculator(){
  const [val,setVal]=useState("")
  const [rate,setRate]=useState("")
  const [res,setRes]=useState<number|null>(null)
  function calc(){setRes((parseFloat(val)||0)*(parseFloat(rate)||0)/100)}
  return(
    <div className="space-y-4">
      <Input placeholder="Import Value ₹" onChange={e=>setVal(e.target.value)} />
      <Input placeholder="Total Duty %" onChange={e=>setRate(e.target.value)} />
      <button onClick={calc} className="w-full bg-blue-900 text-white py-2 rounded-lg text-sm">
        Estimate
      </button>
      {res!==null&&<div className="text-sm">Estimated Cost: ₹{res.toFixed(2)}</div>}
    </div>
  )
}

function ExportCalculator(){
  const [fob,setFob]=useState("")
  const [rate,setRate]=useState("")
  const [res,setRes]=useState<number|null>(null)
  function calc(){setRes((parseFloat(fob)||0)*(parseFloat(rate)||0)/100)}
  return(
    <div className="space-y-4">
      <Input placeholder="FOB ₹" onChange={e=>setFob(e.target.value)} />
      <Input placeholder="Incentive %" onChange={e=>setRate(e.target.value)} />
      <button onClick={calc} className="w-full bg-blue-900 text-white py-2 rounded-lg text-sm">
        Estimate
      </button>
      {res!==null&&<div className="text-sm">Estimated Incentive: ₹{res.toFixed(2)}</div>}
    </div>
  )
}

function ContainerPlanner(){
  const [container,setContainer]=useState(33)
  const [l,setL]=useState("")
  const [w,setW]=useState("")
  const [h,setH]=useState("")
  const [res,setRes]=useState<number|null>(null)

  function calc(){
    const cbm=(parseFloat(l)||0)*(parseFloat(w)||0)*(parseFloat(h)||0)
    if(cbm>0)setRes(Math.floor(container/cbm))
  }

  return(
    <div className="space-y-4">
      <select onChange={e=>setContainer(parseFloat(e.target.value))}
        className="w-full border rounded-lg px-3 py-2 text-sm">
        <option value={33}>20ft (33 CBM)</option>
        <option value={67}>40ft (67 CBM)</option>
        <option value={76}>40HC (76 CBM)</option>
      </select>
      <Input placeholder="Length (m)" onChange={e=>setL(e.target.value)} />
      <Input placeholder="Width (m)" onChange={e=>setW(e.target.value)} />
      <Input placeholder="Height (m)" onChange={e=>setH(e.target.value)} />
      <button onClick={calc} className="w-full bg-blue-900 text-white py-2 rounded-lg text-sm">
        Calculate
      </button>
      {res!==null&&<div className="text-sm">Fits approx. {res} cartons</div>}
    </div>
  )
}
