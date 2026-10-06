const key = import.meta.env.VITE_POSTHOG_KEY as string | undefined

// Analytics is a browser enhancement, never part of the static render or a
// prerequisite for hydrating the page. Early events wait for initialization.
const client = !import.meta.env.SSR && key
  ? import('posthog-js').then(({ default: posthog }) => {
      posthog.init(key, {
        api_host: 'https://us.i.posthog.com',
        autocapture: false,
        capture_pageview: true,
        capture_pageleave: false,
        request_batching: false,
      })
      return posthog
    }).catch(() => undefined)
  : Promise.resolve(undefined)

export function capture(event: string, props?: Record<string, unknown>) {
  void client.then(posthog => posthog?.capture(event, props))
}
