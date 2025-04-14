export function jsonLd() {
    const jsonLd = {
        type: "object",
        properties: [
          {
            type: "string",
            name: "full-name",
            label: "full-name",
            required: true,
            value: "",
          },
          {
            type: "email",
            name: "email",
            label: "Email",
            required: true,
            value: "",
          },
          {
            type: "select",
            name: "country",
            select: "all-country",
            option: [
              {
                value: "geo",
                label: "Georgia",
              },
              {
                value: "usa",
                label: "United States",
              },
              {
                value: "uk",
                label: "United Kingdom",
              },
            ],
          },
          {
            type: "tel",
            name: "phone",
            label: "phone",
            value: "",
          },
          {
            type: "number",
            name: "finished-university-years",
            label: "finished-university",
            value: "",
          },
          {
            type: "array",
            name: "technologies",
            label: "primary",
            item: [
              {
                type: "object",
                name: "technology",
                properties: [
                  {
                    type: "string",
                    label: "technology",
                    name: "technology",
                    value: "",
                  },
                  {
                    type: "number",
                    label: "experience",
                    name: "experience",
                    value: "",
                  },
                ],
              },
            ],
          },
          {
            type: "string",
            name: "current-job",
            label: "current-job-position",
            value: "",
          },
          {
            type: "string",
            name: "plans-for-the-next-year",
            label: "plans-for-the-next-year",
            value: "",
          },
          {
            type: "object",
            name: "links",
            label: "Links",
            properties: [
              {
                type: "string",
                name: "github",
                label: "github-profile",
                value: "",
              },
              {
                type: "string",
                name: "linkedin",
                label: "linkedin-profile",
                value: "",
              },
              {
                type: "string",
                name: "public-website",
                label: "public-website",
                value: "",
              },
              {
                type: "string",
                name: "cv",
                label: "link-cv",
                value: "",
              },
            ],
          },
          {
            type: "array",
            name: "projects",
            label: "Links to your projects",
            item: [
              {
                type: "object",
                name: "project",
                properties: [
                  {
                    type: "string",
                    name: "name",
                    label: "name",
                    value: "",
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "link",
                    value: "",
                  },
                ],
              },
            ],
          },
          {
            type: "boolean",
            name: "haveComputer",
            label: "Have a computer and internet",
            value: "",
          },
        ],
      };
}