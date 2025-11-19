import {defineField, defineType} from 'sanity'

export const aboutRoadmap = defineType({
  name: 'aboutRoadmap',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'internationalizedArrayText',
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
  preview: {
    select: {
      title: 'title',
      desc: 'description',
      skillImg: 'learningSkill.0.imageSrc',
      certImg: 'certificates.0.imageSrc',
    },
    prepare({title, desc, skillImg, certImg}) {
      const titleValue = title?.[0]?.value || 'No title'
      const descValue = desc?.[0]?.value?.slice(0, 50) || ''

      const media = skillImg || certImg || undefined

      return {
        title: titleValue,
        subtitle: descValue ? descValue + '…' : '',
        media,
      }
    },
  },
})
