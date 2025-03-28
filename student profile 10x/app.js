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
      type: "select",
      name: "country",
      select: "country",
      option: [
        {
          type: "select",
          name: "geo",
          option: "geo",
          value: "",
        },
        {
          type: "select",
          name: "usa",
          option: "usa",
          value: "",
        },
        {
          type: "select",
          name: "uk",
          option: "uk",
          value: "",
        },
      ],
    },
    {
      type: "string",
      name: "technology",
      label: "technology",
      value: "",
    },

    {
      type: "number",
      name: "experience",
      label: "experience",
      value: "",
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
};

const editor = ace.edit("editor");
editor.setTheme("ace/theme/github");
editor.session.setMode("ace/mode/json");

const jsonLdString = JSON.stringify(jsonLd, null, 2);
editor.setValue(jsonLdString);

editor.commands.addCommand({
  name: "formatCode",
  bindKey: { win: "Ctrl-Shift-F", mac: "Command-Shift-F" },
  exec: function () {
    try {
      const unformattedCode = editor.getValue();
      const formattedCode = JSON.stringify(
        JSON.parse(unformattedCode),
        null,
        2
      );
      editor.setValue(formattedCode);
    } catch (e) {
      alert("Invalid JSON");
    }
  },
});

function generateJson() {
  jsonLd.properties.forEach((field) => {
    const input = document.querySelector(`[name='${field.name}']`);
    if (input) {
      field.value = input.value;
    }
  });
  editor.setValue(JSON.stringify(jsonLd, null, 2), -1);
}

function updateInputsFromJson() {
  jsonLd.properties.forEach((field) => {
    const input = document.querySelector(`[name='${field.name}']`);
    if (input) {
      if (input.type !== field.type) {
        const newInput = document.createElement("input");
        newInput.type = field.type;
        newInput.name = field.name;
        newInput.value = field.value;
        newInput.placeholder = field.label;
        newInput.oninput = generateJson;
        input.replaceWith(newInput);
      } else {
        input.value = field.value;
      }
    }
  });
}

document.getElementById("editor").addEventListener("input", () => {
  const currentCode = editor.getValue();
  if (!currentCode) return;
  try {
    const updatedJson = JSON.parse(currentCode);
    jsonLd.properties = updatedJson.properties;
    updateInputsFromJson();
  } catch (error) {
    console.error("Invalid JSON", error);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  updateInputsFromJson();
  generateJson();
});
