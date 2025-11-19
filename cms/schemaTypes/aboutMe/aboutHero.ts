import {defineType} from 'sanity'

export const aboutHero = defineType({
  name: 'aboutHero',
  title: 'About Hero',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'internationalizedArrayText',
    },
  ],
})
