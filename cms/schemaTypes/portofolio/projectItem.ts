import { defineField, defineType } from "sanity";

export const projectItem = defineType({
  name: "projectItem",
  title: "Project Item",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "internationalizedArrayString",
    }),

    defineField({
      name: "role",
      title: "Role",
      type: "internationalizedArrayString",
    }),

    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
    }),

    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
    }),

    defineField({
      name: "bullets",
      title: "Bullets",
      type: "array",
      of: [{ type: "bulletItem" }],
    }),
  ],

  preview: {
    select: {
      title: "title",
      role: "role",
    },
    prepare({ title, role }) {
      const getEN = (arr: any[]) =>
        arr?.find((i: { _key: string; }) => i._key === "en")?.value ?? "—";
      const getID = (arr: any[]) =>
        arr?.find((i: { _key: string; }) => i._key === "id")?.value ?? "—";

      return {
        title: getEN(title)?.substring(0, 50),
        subtitle: getID(role)?.substring(0, 60),
      };
    },
  },
});
