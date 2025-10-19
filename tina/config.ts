import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: "feac59a4-19f3-4687-8c07-c28a42af87e3",
  // Get this from tina.io
  token: "cbbf62ab8b4959b1d637839c43f05039750516ad",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "projects",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "project",
        label: "Projects",
        path: "content/projects",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
          {
            type: "string",
            name: "tech",
            label: "Technologies",
            required: true,
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "string",
            name: "liveUrl",
            label: "Live URL",
            required: true,
          },
          {
            type: "string",
            name: "githubUrl",
            label: "GitHub URL",
            required: true,
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured",
            description: "Mark this project as featured",
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
            description: "Order in which projects appear (lower numbers first)",
          },
        ],
        ui: {
          router: () => "/projects",
        },
      },
    ],
  },
});
