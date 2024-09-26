import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { Header } from '@/payload-types'
import HeaderClient from './HeaderClient'

export default async function HeaderServer() {
    const payload = await getPayloadHMR({ config })
    const header: Header = await payload.findGlobal({
        slug: 'header',
    })

    return <HeaderClient header={header} />
}
