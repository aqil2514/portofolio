import { defineField, defineType } from "sanity";

export const techType = defineType({
  name: 'tech',
  title: 'Tech Stack List',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})