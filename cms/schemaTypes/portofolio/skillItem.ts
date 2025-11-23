import { defineField, defineType } from "sanity";

export const skillItem = defineType({
  name: "skillItem",
  title: "Skill Item",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Skill Label",
      type: "string",
    }),
    defineField({
      name: "value",
      title: "Skill Value",
      type: "string",
      description: "Example: Next.js, React.js, TypeScript, Tailwind, Redux",
    }),
  ],

  preview: {
    select: {
      label: "label",
      value: "value",
    },
    prepare({ label, value }) {
      return {
        title: label,
        subtitle: value?.substring(0, 100),
      };
    },
  },
});
