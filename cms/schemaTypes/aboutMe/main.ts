import {defineType} from 'sanity'

export const aboutPageSchema = defineType({
  name: 'about-page',
  title: 'About Me Page',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'aboutHero',
    },
    {
      name: 'whoAmI',
      title: 'Who Am I Section',
      type: 'array',
      of: [{type: 'aboutWhoAmI'}],
    },
    {
      name: 'coreSkill',
      title: 'About Core Section',
      type: 'array',
      of: [{type: 'aboutCoreSkill'}],
    },
    {
      name: 'productPhilosophy',
      title: 'About Product Philosophy',
      type: 'array',
      of: [{type: 'aboutProductPhilosophy'}],
    },
    {
      name: 'roadmapTimeline',
      title: 'About Roadmap Timeline',
      type: 'array',
      of: [{type: 'aboutRoadmap'}],
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {title: 'About Page'}
    },
  },
})
