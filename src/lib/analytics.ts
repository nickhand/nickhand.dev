import posthog from 'posthog-js'

const key = import.meta.env.VITE_POSTHOG_KEY as string | undefined

if (key) {
  posthog.init(key, {
    api_host: 'https://us.i.posthog.com',
    autocapture: false,
    capture_pageview: true,
    capture_pageleave: false,
    request_batching: false,
  })
}

export function capture(event: string, props?: Record<string, unknown>) {
  if (key) posthog.capture(event, props)
}
