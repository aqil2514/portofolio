import {defineField, defineType} from 'sanity'

export const aboutCoreSkill = defineType({
  name: 'aboutCoreSkill',
  title: 'About Core Skill',
  type: 'object',
  fields: [
    defineField({
      name: 'skillField',
      title: 'Skill Field',
      type: 'string',
    }),
    defineField({
      name: 'skillLevel',
      title: 'Skill Level',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {
            value: 'beginner',
            title: 'Beginner',
          },
          {
            value: 'intermediate',
            title: 'Intermediate',
          },
          {
            value: 'advanced',
            title: 'Advanced',
          },
        ],
      },
    }),
    defineField({
      name: 'skillList',
      title: 'Skill List',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
