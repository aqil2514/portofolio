import { defineField, defineType } from 'sanity'

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
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
    defineField({
      name: 'bullets',
      title: 'Bullets',
      type: 'array',
      of: [{ type: 'bulletItem' }],
    }),
  ],
});
