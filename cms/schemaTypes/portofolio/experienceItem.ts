import {defineField, defineType} from 'sanity'

export const experienceItem = defineType({
  name: 'experienceItem',
  title: 'Experience Item',
  type: 'object',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'isCurrent',
      title: 'Still Working Here?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      hidden: ({parent}) => parent?.isCurrent === true,
    }),
    defineField({
      name: 'bullets',
      title: 'Bullets',
      type: 'array',
      of: [{type: 'bulletItem'}],
    }),
  ],
})
