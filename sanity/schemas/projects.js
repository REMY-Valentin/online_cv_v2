export default {
  name: "projects",
  title: "projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "name",
      type: "string",
    },
    {
      name: "technos",
      title: "technos",
      type: "array",
      of: [{ title: "name", type: "string" }],
    },
    {
      name: "text",
      title: "text",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "image",
      title: "image",
      type: "image",
      option: {
        hotspot: true,
      },
    },
  ],
};
