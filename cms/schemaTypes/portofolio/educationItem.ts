import { defineField, defineType } from "sanity";

export const educationItem = defineType({
  name: "educationItem",
  title: "Education Item",
  type: "object",
  fields: [
    defineField({
      name: "degree",
      title: "Degree",
      type: "internationalizedArrayString",
    }),
    defineField({
      name: "major",
      title: "Major",
      type: "internationalizedArrayString",
    }),
    defineField({
      name: "university",
      title: "University",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
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
      name: "gpa",
      title: "GPA",
      type: "string",
    }),
  ],

  preview: {
    select: { degree: "degree", major: "major" },
    prepare({ degree, major }) {
      const getEN = (arr: any[]) =>
        arr?.find((t: { _key: string; }) => t._key === "en")?.value ?? "—";
      const getID = (arr: any[]) =>
        arr?.find((t: { _key: string; }) => t._key === "id")?.value ?? "—";

      return {
        title: getEN(degree)?.substring(0, 50),
        subtitle: getID(major)?.substring(0, 60),
      };
    },
  },
});
