import {defineField, defineType} from 'sanity'

export const aboutRoadmap = defineType({
  name: 'aboutRoadmap',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'learningSkill',
      title: 'Learning Skill',
      type: 'array',
      of: [{type: 'basicImage'}],
    }),
    defineField({
      name: 'certificates',
      title: 'Certificates',
      type: 'array',
      of: [{type: 'imageWithLink'}],
    }),
  ],
})
