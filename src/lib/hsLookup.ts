export async function hsLookup(query: string) {
  const EP = import.meta.env.VITE_GOOGLE_SHEET_ENDPOINT || ''
  if (!EP) throw new Error('HS lookup endpoint not configured')
  const url = `${EP}?action=hs_lookup&query=${encodeURIComponent(query)}`
  const res = await fetch(url)
  if (!res.ok) throw new Error('HS lookup failed')
  const json = await res.json()
  return json.results || []
}
