const jsonLd = {
  type: "object",
  properties: [
    {
      type: "string",
      name: "full-name",
      label: "Full Name",
      required: true,
      value: "",
    },
    { type: "email", name: "email", label: "Email", required: true, value: "" },
    { type: "string", name: "phone", label: "Phone", value: "" },
    {
      type: "select",
      name: "country",
      select: "country",
      value: "",
    },
    { type: "select", name: "geo", select: "country", value: "" },
    { type: "select", name: "usa", select: "country", value: "" },
    { type: "select", name: "uk", select: "country", value: "" },
    {
      type: "number",
      name: "finished-university-years",
      label: "Finished University Years",
      value: "",
    },
    { type: "string", name: "technology", label: "Technology", value: "" },
    { type: "number", name: "experience", label: "Experience", value: "" },
    {
      type: "string",
      name: "current-job",
      label: "Current Job Position",
      value: "",
    },
    {
      type: "string",
      name: "plans-for-the-next-year",
      label: "Plans for the next year",
      value: "",
    },
    { type: "string", name: "github", label: "GitHub", value: "" },
    { type: "string", name: "linkedin", label: "LinkedIn", value: "" },
    {
      type: "string",
      name: "public-website",
      label: "Public Website",
      value: "",
    },
    { type: "string", name: "cv", label: "CV Link", value: "" },
    { type: "string", name: "name", label: "Project Name", value: "" },
    { type: "string", name: "link", label: "Project Link", value: "" },
  ],
};

const editor = ace.edit("editor");
editor.setTheme("ace/theme/github");
editor.session.setMode("ace/mode/json");

const jsonLdString = JSON.stringify(jsonLd, null, 2);
editor.setValue(jsonLdString, -1);

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

// editor.on("change", function () {
document.getElementById('editor').addEventListener('input', () =>{
  const currentCode = editor.getValue();
  // if (!currentCode) return;
  try {
    const updatedJson = JSON.parse(currentCode);
    jsonLd.properties = updatedJson.properties;
    updateInputsFromJson();
  } catch (error) {
    console.error("Invalid JSON", error);
  }
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

document.addEventListener("DOMContentLoaded", () => {
  updateInputsFromJson();
  generateJson();
});
