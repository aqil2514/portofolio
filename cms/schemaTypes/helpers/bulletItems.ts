import { defineField, defineType } from "sanity";

export const bulletItem = defineType({
  name: "bulletItem",
  title: "Bullet Item",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "internationalizedArrayString",
    }),
  ],

  preview: {
    select: {
      text: "text",
    },
    prepare({ text }) {
      if (!text || !Array.isArray(text)) {
        return {
          title: "No text",
          subtitle: "",
        };
      }

      const en = text.find((t) => t._key === "en")?.value ?? "—";
      const id = text.find((t) => t._key === "id")?.value ?? "—";

      return {
        title: en.substring(0, 40), // English → title
        subtitle: id.substring(0, 60), // Indonesian → subtitle
      };
    },
  },
});
