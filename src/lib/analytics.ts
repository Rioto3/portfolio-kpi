// GA4の設定
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// src/lib/analytics.ts
export const pageview = (url: string) => {
  if (GA_TRACKING_ID) { // Check if GA_TRACKING_ID is defined
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  } else {
    console.warn('GA_TRACKING_ID is not defined'); // Optional: log a warning
  }
}

export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label: string
  value?: number
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}