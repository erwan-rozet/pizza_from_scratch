import { serializeLexical } from '@/utils/serialize'
import React from 'react'

function RichTextBlockServer({ content }: { content: any }) {
    return (
        <div>
            <div id="specialRichText" className="richText max-w-5xl mx-auto">
                {serializeLexical({ nodes: content.root.children })}
            </div>
        </div>
    )
}

export default RichTextBlockServer
