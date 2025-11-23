import { defineField, defineType } from "sanity";

export const skillsSection = defineType({
  name: "skillsSection",
  title: "Skills Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "internationalizedArrayString",
    }),

    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "skillItem" }],
    }),
  ],

  preview: {
    select: {
      title: "title",
      skills: "skills",
    },
    prepare({ title, skills }) {
      return {
        title: title ? "Skills Section" : "Untitled",
        subtitle: skills?.length
          ? `${skills.length} categories`
          : "No skills added",
      };
    },
  },
});
