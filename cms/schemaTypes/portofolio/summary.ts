import {defineField, defineType} from 'sanity'

export const summary = defineType({
  name: 'portofolioSummary',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'item',
      type: 'internationalizedArrayText',
    }),
  ],
})
