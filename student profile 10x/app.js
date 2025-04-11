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
    if (field.type === "select") {
      const select = document.querySelector(`[name='${field.select}']`);
      if (select) {
        field.value = select.value;
      }
    }
    if (field.name === "technologies") {
      field.item = [];
      const techInputs = document.querySelectorAll(
        ".primary input[name='technology']"
      );
      const expInputs = document.querySelectorAll(
        ".primary input[name='experience']"
      );

      techInputs.forEach((techInput, index) => {
        field.item.push({
          type: "object",
          name: "technology",
          properties: [
            {
              type: "string",
              label: "technology",
              name: "technology",
              value: techInput.value,
            },
            {
              type: "number",
              label: "experience",
              name: "experience",
              value: expInputs[index]?.value || "",
            },
          ],
        });
      });
    }
    if (field.name === "links") {
      field.properties = [];
      const linkInputs = document.querySelectorAll(".links input[name='github']");
      const linkedin = document.querySelectorAll(".links input[name='linkedin']");
      const publicWebsite = document.querySelectorAll(".links input[name='public-website']");
      const cv = document.querySelectorAll(".links input[name='cv']");

      linkInputs.forEach((values, index) => {
        field.properties.push({
          type: "object",
          name: "links",
          label: "Links",
          properties: [
            {
              type: "string",
              name: "github",
              label: "github-profile",
              value: values.value,
            },
            {
              type: "string",
              name: "linkedin",
              label: "linkedin-profile",
              value: linkedin[index]?.value || "",
            },
            {
              type: "string",
              name: "public-website",
              label: "public-website",
              value: publicWebsite[index]?.value || "",
            },
            {
              type: "string",
              name: "cv",
              label: "link-cv",
              value: cv[index]?.value || "",
            },
          ],
        });
      });
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
        input.setAttribute("type", field.type);
      }
    }
    if (field.name === "technologies") {
      const container = document.querySelector(".primary");
      container.innerHTML = "";

      field.item.forEach((techObj) => {
        techObj.properties.forEach((techField) => {
          const primaryDiv = document.createElement("div");
          primaryDiv.classList.add("primary-technologies");

          const input = document.createElement("input");
          input.type = techField.type;
          input.name = techField.name;
          input.value = techField.value || "";
          input.placeholder = techField.label || "";
          input.oninput = generateJson;

          const label = document.createElement("label");
          label.appendChild(input);
          primaryDiv.appendChild(label);
          container.appendChild(primaryDiv);
        });
      });
    }
    // if (field.name === "links") {
    //   const container = document.querySelector(".links");
    //   container.innerHTML = "";
    
    //   field.properties.forEach((field) => {
    //     field.properties.forEach((linkField) => {
    //       const linkDiv = document.createElement("div");
    //       linkDiv.classList.add("link-field");
    
    //       const input = document.createElement("input");
    //       input.type = linkField.type;
    //       input.name = linkField.name;
    //       input.value = linkField.value || "";
    //       input.placeholder = linkField.label || "";
    //       input.oninput = generateJson;
    
    //       const label = document.createElement("label");
    //       label.appendChild(input);
    //       linkDiv.appendChild(label);
    //       container.appendChild(linkDiv);
    //     });
    //   });
    // }
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

function addButton(event) {
  event.preventDefault();
  const technologiesContainer = document.querySelector(
    ".primary-and-technologies"
  );
  const wrapperDiv = document.createElement("div");
  wrapperDiv.classList.add("primary-technologies");

  const primaryDiv = document.createElement("label");
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
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "REMOVE";
  removeBtn.onclick = removeButton;

  wrapperDiv.appendChild(primaryDiv);
  wrapperDiv.appendChild(removeBtn);

  technologiesContainer.insertBefore(
    wrapperDiv,
    document.getElementById("add")
  );
  generateJson();
}
function removeButton(event) {
  event.preventDefault();
  const button = event.target;
  const primaryTechnologiesDiv = button.closest(".primary-technologies");

  if (primaryTechnologiesDiv) {
    primaryTechnologiesDiv.remove();
    generateJson();
  }
}
document.addEventListener("DOMContentLoaded", () => {
  updateInputsFromJson();
  generateJson();
});
