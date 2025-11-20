import {defineField, defineType} from 'sanity'

export const projectSubDemo = defineType({
  name: 'projectSubDemos',
  title: 'Sub Demos',
  type: 'array',
  of: [
    {
      type: 'object',
      name: 'subDemo',
      title: 'Sub Demo',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'videoUrl',
          title: 'Demo Video URL',
          type: 'url',
        }),
        defineField({
          name: 'description',
          title: 'Explanation',
          type: 'internationalizedArrayText',
        }),
      ],
      preview: {
        select: {title: 'title'},
        prepare: ({title}) => ({title}),
      },
    },
  ],
})
