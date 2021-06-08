export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60bf934b3bced800d44c9c37",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-4o9kwvp9",
                  apiId: "535d4973-6b0a-4a34-86c2-e6bc8a787d93",
                },
                {
                  buildHookId: "60bf934b17ad6e0092e8c9c9",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-cr95koj8",
                  apiId: "80aee1bf-9b8d-41cd-b6cc-d83e45c64f66",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/cindyolivier/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-cr95koj8.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
