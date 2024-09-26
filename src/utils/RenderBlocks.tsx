import CoverBlockServer from '@/blocks/cover/Server'
import ImageBlockServer from '@/blocks/image/Server'
import RichTextBlockServer from '@/blocks/richText/Server'
import { Page } from '@/payload-types'

const blockComponents = {
  cover: CoverBlockServer,
  image: ImageBlockServer,
  richText: RichTextBlockServer,
}

export const RenderBlocks: React.FC<{ blocks: Page['layout'][0][] }> = (
  props,
) => {
  const { blocks } = props
  const hasBlock = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlock) {
    return (
      <>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block
          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16 flex justify-center" key={index}>
                  {/* @ts-expect-error */}
                  <Block id={blockName} {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </>
    )
  }
  return null
}
