'use client'
import { Caveat } from 'next/font/google'
const font = Caveat({
  weight: ['400', '700'],
  subsets: ['latin'],
})

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/payload-types'

type HeaderClientProps = {
  header: Header
}

export default function HeaderClient({ header }: HeaderClientProps) {
  return (
    <>
      <div
        className={`bg-white py-5 shadow-md flex items-center justify-between`}
      >
        <div className={`relative w-64 h-32`}>
          <Link href="/">
            {typeof header.logo !== 'number' && header.logo ? (
              <Image
                alt={header.logo.alt || ''} // Accès sécurisé à 'alt'
                src={header.logo.url || ''} // Accès sécurisé à 'url'
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              // Optionnel : un placeholder ou autre traitement si 'header.logo' est un number ou null
              <span>Logo indisponible</span>
            )}
          </Link>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className={`text-6xl font-bold ${font.className}`}>
            {header.headerTitle}
          </h1>
        </div>
      </div>
      <div className="sticky top-0">
        <div className="bg-white h-12 flex justify-end space-x-10 pr-10 shadow-md border-b-2 border-indigo-200 active:text-violet-700">
          {header.nav?.map((item, index) => (
            <Link
              target={item.label !== 'Calculateur' ? '_blank' : ''}
              key={index}
              href={item.link || ''}
              className="text-black pt-2 text-lg font-semibold hover:border-b-4 border-indigo-500 pb-2"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
