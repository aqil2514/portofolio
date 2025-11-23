import { defineField, defineType } from "sanity";

export const projectsSection = defineType({
  name: "projectsSection",
  title: "Projects Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "internationalizedArrayString",
    }),
    defineField({
      name: "items",
      title: "Project Items",
      type: "array",
      of: [{ type: "projectItem" }],
    }),
  ],

  preview: {
    select: {
      items: "items",
    },
    prepare({ items }) {
      return {
        title: "Projects Section",
        subtitle: items?.length
          ? `${items.length} project(s)`
          : "No project added",
      };
    },
  },
});
