import { Cover } from "@/blocks/cover/schema";
import { Image } from "@/blocks/image/schema";
import { RichText } from "@/blocks/richText/schema";
import { GlobalConfig } from "payload";

export const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'nav',
      label: 'Navigation',
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
        },
      ],
      minRows: 1,
      maxRows: 5,
      required: true
    },
    {
      name: "headerTitle",
      label: "Header Title",
      type: "text",
      required: true
    },
    {
      name: "secondHeaderTitle",
      label: "Second Header Title",
      type: "text",
    },
    {
      name: "thirdHeaderTitle",
      label: "Third Header Title",
      type: "text",
    },
  ]
}