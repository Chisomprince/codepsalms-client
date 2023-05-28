// import { TagIcon } from "@sanity/icons";

export default {
  name: "category",
  title: "Category",
  //   icon: TagIcon,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
