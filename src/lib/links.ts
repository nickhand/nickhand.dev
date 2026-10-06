// Links to the apps hosted under nickhand.dev are same-site; everything else leaves the site.
export function isExternal(href?: string): boolean {
  if (!href) return false
  return /^https?:\/\//.test(href) && !/^https?:\/\/(www\.)?nickhand\.dev(\/|$)/.test(href)
}
