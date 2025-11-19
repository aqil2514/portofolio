import {defineField, defineType} from 'sanity'

export const aboutProductPhilosophy = defineType({
  name: 'aboutProductPhilosophy',
  title: 'About Product Philosophy',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'description',
      type: 'internationalizedArrayText',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      desc: 'description',
    },
    prepare({title, desc}) {
      const titleValue = title?.[0]?.value || 'No title'
      const descValue = desc?.[0]?.value?.slice(0, 50) || ''

      return {
        title: titleValue,
        subtitle: descValue + (descValue ? '…' : ''),
      }
    },
  },
})
