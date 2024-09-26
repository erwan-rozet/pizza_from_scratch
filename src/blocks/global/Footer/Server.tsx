import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/payload-types'

export default async function FooterServer() {
  const paylaod = await getPayloadHMR({ config })
  const footer: Footer = await paylaod.findGlobal({
    slug: 'footer',
    depth: 2,
  })
  return (
    <div
      className="bg-gray-300 border-t-2 border-t-green-300 opacity-90"
      style={{ borderTop: '1px solid #A0A0A0' }}
    >
      <div className="py-6 max-h-10 max-w-5xl mx-auto flex justify-between w-full items-center ">
        <div className="relative w-64 h-20">
          <Image
            alt={
              (typeof footer.logo !== 'number' &&
                footer.logo &&
                footer.logo.alt) ||
              ''
            }
            src={
              (typeof footer.logo !== 'number' &&
                footer.logo &&
                footer.logo.url) ||
              ''
            }
            fill
            className="object-contain"
          />
        </div>
        <div className="">{footer.copyright}</div>
        <div>
          {footer.nav?.map((item, index) => {
            return (
              <Link
                target="_blank"
                key={index}
                href={item.link || ''}
                className="text-white text-lg px-10"
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
