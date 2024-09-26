import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  devIndicators: {
    appIsrStatus: false,
  },
}

export default withPayload(nextConfig)
