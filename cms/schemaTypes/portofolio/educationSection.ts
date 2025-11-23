import { defineField, defineType } from "sanity";

export const educationSection = defineType({
  name: "educationSection",
  title: "Education Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "internationalizedArrayString",
    }),

    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [{ type: "educationItem" }],
    }),
  ],
});
