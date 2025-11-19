import {defineField, defineType} from 'sanity'

export const aboutProductPhilosophy = defineType({
  name: 'aboutProductPhilosophy',
  title: 'About Product Philosophy',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})
