import { getPayloadHMR } from '@payloadcms/next/utilities'
import { cache } from 'react'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { RenderBlocks } from '@/utils/RenderBlocks'

import { Page as PageType } from '../../../payload-types'

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
    const parsedSlug = decodeURIComponent(slug)
    const payload = await getPayloadHMR({ config })
    const result = await payload.find({
        collection: 'pages',
        limit: 1,
        where: {
            slug: {
                equals: parsedSlug,
            },
        },
    })

    return result.docs?.[0] || null
})

export async function generateStaticParams() {
    const payload = await getPayloadHMR({ config })
    const pages = await payload.find({
        collection: 'pages',
        draft: false,
        limit: 1000,
    })
    return pages.docs
        ?.filter((doc) => {
            return doc.slug !== 'index'
        })
        .map(({ slug }) => slug)
}

export default async function Page({ params: { slug = 'index' } }) {
    let page: PageType | null
    page = await queryPageBySlug({ slug })
    if (!page) {
        return notFound()
    }
    return (
        // <div className="pt-16 pb-24">
        <div>
            <RenderBlocks blocks={page.layout} />
        </div>
    )
}
