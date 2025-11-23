import {defineField, defineType} from 'sanity'

export const experience = defineType({
  name: 'portofolioExperience',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'item',
      type: 'array',
      of: [{type: 'experienceItem'}],
    }),
  ],
})
