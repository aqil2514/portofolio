import {defineField, defineType} from 'sanity'

export const aboutWhoAmI = defineType({
  name: 'aboutWhoAmI',
  type: 'object',
  title: 'Who Am I',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'internationalizedArrayText',
    }),
    defineField({
      name: 'imageSrc',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'imageAlt',
      title: 'Image Alternative',
      type: 'string',
    }),
    defineField({
      name: 'ctaButtonId',
      title: 'CTA Button Id',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {
            value: 'none',
            title: 'None',
          },
          {
            value: 'download-cv',
            title: 'Download CV',
          },
        ],
      },
    }),
  ],
})
