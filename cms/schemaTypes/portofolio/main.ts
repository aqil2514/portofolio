import {defineField, defineType} from 'sanity'

export const portofolioSchema = defineType({
  name: 'portofolio',
  title: 'Portofolio',
  type: 'document',
  fields: [
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'portofolioSummary',
    }),
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'portofolioExperience',
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'educationSection',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'skillsSection',
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'projectsSection',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Main CV Data',
        subtitle: 'Data for PDF CV',
      }
    },
  },
})
