const PARKING_JAWN_ORIGIN = "https://www.parkingjawn.com"

export function resolveLegacyRoute(requestUrl) {
  const url = new URL(requestUrl)

  if (url.pathname === "/mapping-gun-violence") {
    const target = new URL("/philly-gun-violence-map/", url)
    target.search = url.search
    return { kind: "redirect", status: 301, url: target }
  }

  if (url.pathname === "/philly-gun-violence-map") {
    const target = new URL("/philly-gun-violence-map/", url)
    target.search = url.search
    return { kind: "redirect", status: 301, url: target }
  }

  if (url.pathname === "/fair-measure") {
    const target = new URL("/fair-measure/", url)
    target.search = url.search
    return { kind: "redirect", status: 301, url: target }
  }

  if (url.pathname === "/parking-jawn") {
    const target = new URL("/", PARKING_JAWN_ORIGIN)
    target.search = url.search
    return { kind: "redirect", status: 301, url: target }
  }

  return null
}

function addResponseHeaders(response, requestUrl, indexable) {
  const headers = new Headers(response.headers)
  headers.set("X-Content-Type-Options", "nosniff")
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  headers.set("Permissions-Policy", "camera=(), geolocation=(), microphone=()")
  headers.set("X-Frame-Options", "DENY")

  if (new URL(requestUrl).hostname.endsWith("nickhand.dev")) {
    headers.set("Strict-Transport-Security", "max-age=31536000")
  }

  if (!indexable) {
    headers.set("X-Robots-Tag", "noindex, nofollow")
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}

export default {
  async fetch(request, env) {
    const route = resolveLegacyRoute(request.url)

    if (route?.kind === "redirect") {
      return addResponseHeaders(
        Response.redirect(route.url, route.status),
        request.url,
        env.INDEXABLE === "true",
      )
    }

    const response = await env.ASSETS.fetch(request)

    return addResponseHeaders(response, request.url, env.INDEXABLE === "true")
  },
}
