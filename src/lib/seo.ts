export function setSEOTags({
  title,
  description,
  keywords,
  canonical
}: {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
}) {
  if (title) document.title = title

  const setMeta = (name: string, content?: string) => {
    if (!content) return
    let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
    if (!el) {
      el = document.createElement('meta')
      el.name = name
      document.head.appendChild(el)
    }
    el.content = content
  }

  setMeta('description', description)
  setMeta('keywords', keywords)

  if (canonical) {
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonical
  }
}
