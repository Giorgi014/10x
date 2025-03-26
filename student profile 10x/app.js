function generateJson() {
  const fullName = document.querySelector("[name='full-name']").value;
  const email = document.querySelector("[name='email']").value;
  const country = document.querySelector("[name='all-country']").value;
  const phone = document.querySelector("[name='phone']").value;
  const finishedUniversity = document.querySelector(
    "[name='finished-university-years']"
  ).value;

  const jsonLd = {
    type: "object",
    properties: [
      {
        type: "string",
        name: "fullName",
        label: "full-name",
        required: true,
        value: fullName,
      },
      {
        type: "string",
        name: "email",
        label: "Email",
        inputType: "email",
        required: true,
        value: email,
      },
      {
        type: "select",
        name: "country",
        label: "all-country",
        value: country,
        options: [
          {
            value: "geo",
            label: "Georgia",
          },
          {
            value: "usa",
            label: "Unaited States of America",
          },
          {
            value: "uk",
            label: "Unaited Kingdom",
          }
        ],
      },
      {
        type: "number",
        name: "phone",
        label: "Phone",
        value: phone,
      },
      {
        type: "number",
        name: "finishedUniversity",
        label: "Finished University Years",
        value: finishedUniversity,
      },
    ],
  };

  document.getElementById("output").textContent = JSON.stringify(jsonLd, null, 2);
}

window.onload = generateJson;
