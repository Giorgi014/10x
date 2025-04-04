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
      select: "all-country",
      option: [
        {
          type: "option",
          name: "country",
          option: "country",
          value: "",
        },
        {
          type: "option",
          name: "geo",
          option: "geo",
          value: "",
        },
        {
          type: "option",
          name: "usa",
          option: "usa",
          value: "",
        },
        {
          type: "option",
          name: "uk",
          option: "uk",
          value: "",
        },
      ],
    },
    {
      type: "array",
      name: "primary",
      label: "technologies",
      item: [],
        // {
        //   type: "object",
        //   name: "technology",
        //   properties: [
        //     {
        //       type: "string",
        //       label: "technology",
        //       name: "technology",
        //       value: "",
        //     },
        //     {
        //       type: "number",
        //       label: "experience",
        //       name: "experience",
        //       value: "",
        //     },
        //   ],
        // },
      // ],
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
    // const primary = document.querySelector(`[name='${field.name}']`);
    if (input) {
      field.value = input.value;
    }
    if (field.name === "primary") {
      field.value = [];
      document.querySelectorAll(".primary").forEach((primaryDiv) => {
        const techInput = primaryDiv.querySelector("input[name='technology']");
        const expInput = primaryDiv.querySelector("input[name='experience']");

        if (techInput) {
          field.value.push({
            type: techInput.type,
            label: techInput.name,
            name: techInput.name,
            value: techInput.value,
          });
        }
        if (expInput) {
          field.value.push({
            type: expInput.type,
            label: expInput.name,
            name: expInput.name,
            value: expInput.value,
          });
        }
      });
    }
  
  });
  editor.setValue(JSON.stringify(jsonLd, null, 2), -1);
}

function selectJson() {
  jsonLd.properties.forEach((field) => {
    const select = document.querySelector(`[name='${field.name}']`);
    if (select) {
      field.option = select.option;
    }
  });
}

function updateInputsFromJson() {
  jsonLd.properties.forEach((field) => {
    const input = document.querySelector(`[name='${field.name}']`);
    // const techInput = document.querySelector(`[name='${field.name}']`);
        // const expInput = document.querySelector(`[name='${field.name}']`);
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
        input.setAttribute("type", field.type);
      }
    }
    // if (techInput) {
    //   if (techInput.type !== field.type) {
    //     const newTechInput = document.createElement("input");
    //     newTechInput.type = field.type;
    //     newTechInput.name = field.name;
    //     newTechInput.value = field.value;
    //     newTechInput.placeholder = field.label;
    //     newTechInput.oninput = generateJson;
    //     techInput.replaceWith(newTechInput);
    //   } else {
    //     techInput.value = field.value;
    //     techInput.setAttribute("type", field.type);
    //   }
    // }
  });
}
function updateSelectFromJson() {
  jsonLd.properties.forEach((field) => {
    const select = document.querySelector(`[name='${field.name}']`);
    if (select) {
      if (select.tagName === "select") {
        field.value = select.options[select.selectedIndex].value;
      } else {
        field.value = select.value;
      }
    }
  });
  editor.setValue(JSON.stringify(jsonLd, null, 2), -1);
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
  document.getElementById("add").addEventListener("click", (event) => {
    event.preventDefault();
    const technologiesContainer = document.querySelector(".primary-technologies");
    const primaryDiv = document.createElement("div");
    primaryDiv.classList.add("primary");

    const techInput = document.createElement("input");
    techInput.type = "string";
    techInput.name = "technology";
    techInput.placeholder = "Technology";
    techInput.oninput = generateJson;

    const expInput = document.createElement("input");
    expInput.type = "number";
    expInput.name = "experience";
    expInput.placeholder = "Experience";
    expInput.oninput = generateJson;

    const techLabel = document.createElement("label");
    techLabel.appendChild(techInput);

    const expLabel = document.createElement("label");
    expLabel.appendChild(expInput);

    primaryDiv.append(techLabel, expLabel);
    technologiesContainer.appendChild(primaryDiv);

    jsonLd.properties.find((field) => field.name === "primary").item.push({
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
    });

    generateJson();
  });

  // document.getElementById("remove").forEach((button) => {
  //   button.addEventListener("click", (event) => {
  //     event.preventDefault();
  //     const primaryDiv = event.target.closest(".primary");
  //     if (primaryDiv) {
  //       primaryDiv.remove();
  //       generateJson();
  //     }
  //   });
  // });
});


document.addEventListener("DOMContentLoaded", () => {
  updateInputsFromJson();
  updateSelectFromJson();
  generateJson();
  selectJson();
});