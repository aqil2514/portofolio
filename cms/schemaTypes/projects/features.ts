import { defineField, defineType } from "sanity";

export const projectsFeatures = defineType({
      name: 'projectsFeatures',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'feature',
          title: 'Feature',
          fields: [
            defineField({
              name: 'id',
              title: 'Feature (ID)',
              type: 'text',
            }),
            defineField({
              name: 'en',
              title: 'Feature (EN)',
              type: 'text',
            }),
          ],
          preview: {
            select: {
              title: 'id',
            },
            prepare:({title}) => ({title})
          },
        },
      ],
    })