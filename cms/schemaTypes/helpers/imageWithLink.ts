import {defineType} from 'sanity'
import { basicImage } from './basicImage'

export const imageWithLink = defineType({
  name: 'imageWithLink',
  type: 'object',
  fields: [
    ...basicImage.fields,
    {
      name: 'link',
      type: 'string',
    },
    {
      name: 'labelLink',
      type: 'string',
    },
  ],
})
