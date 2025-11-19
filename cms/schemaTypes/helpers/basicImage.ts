import {defineType} from 'sanity'

export const basicImage = defineType({
  name: 'basicImage',
  title: 'Basic Image',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'imageSrc',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'imageAlt',
      title: 'Image Alternative',
      type: 'string',
    },
  ],
})
