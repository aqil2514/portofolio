import {defineField, defineType} from 'sanity'

export const projectsType = defineType({
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (val) => val.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'basicImage',
      validation: (val) => val.required(),
    }),
    defineField({
      name: 'mainDemo',
      title: 'Main Demo Video',
      type: 'url',
      description: 'Link Vimeo/YouTube atau embed video utama',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {
            value: 'live',
            title: 'Live',
          },
          {
            value: 'archived',
            title: 'Archived',
          },
          {
            value: 'on-progress',
            title: 'On Progress',
          },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: 'Frontend', value: 'Frontend'},
              {title: 'Backend', value: 'Backend'},
              {title: 'Database', value: 'Database'},
              {title: 'DevOps', value: 'DevOps'},
              {title: 'Automation', value: 'Automation'},
              {title: 'AI Integration', value: 'AI Integration'},
              {title: 'Product Engineering', value: 'Product Engineering'},
            ],
            layout: 'dropdown',
          },
        },
      ],
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'internationalizedArrayText',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'projectsFeatures',
    }),
    defineField({
      name: 'subDemos',
      title: 'Sub Demo',
      type: 'projectSubDemos',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    }),
    defineField({
      name: 'sourceCode',
      title: 'Source Code',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      media: 'mainImage.imageSrc',
      title: 'title',
    },
    prepare: ({media, title}) => {
      return {
        media,
        title,
      }
    },
  },
})
