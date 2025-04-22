// Case #1: The Hidden Message

const revealMessage = () => {
  const HIDDEN_MESSAGE = document.getElementById("hidden-message");
  const DECODED_MESSAGE = document.getElementById("decoded-message");
  const btn = document.querySelector("button");

  HIDDEN_MESSAGE.style.display = "block";

  btn.addEventListener("click", () => {
    const reversed = HIDDEN_MESSAGE.innerText.split("").reverse().join("");
    DECODED_MESSAGE.innerText = reversed;
  });
};
revealMessage();

// Case #2: Classified Files

const securityLevel = () => {
  const CLASSIFIED_DOCUMENT = document.getElementsByClassName("classified");
  const btn = document.getElementById("classified-btn");

  Array.from(CLASSIFIED_DOCUMENT).filter((e) => {
    const level = e.getAttribute("data-security");

    btn.addEventListener("click", () => {
      if (level === "high") {
        e.style.backgroundColor = "red";
        e.innerText = "Hight Security Level";
      } else if (level === "medium") {
        e.style.backgroundColor = "yellow";
        e.innerText = "Medium Security Level";
      } else if (level === "low") {
        e.style.backgroundColor = "green";
        e.innerText = "Low Security Level";
      }
    });
  });
};
securityLevel();

// Case #3: Suspect Identification

const suspectIdentification = () => {
  const suspects = document.getElementsByTagName("suspect");
  const evidence = "blue-scarf";

  Array.from(suspects).forEach((e) => {
    const identify = e.getAttribute("data-clue");
    if (identify === evidence) {
      e.classList.add("prime-suspect");

      const identified = document.createElement("suspect");
      identified.innerText = "IDENTIFIED";
      e.after(identified);
    }
  });
};
suspectIdentification();

// Case #4: Digital Evidence Collection

const digitalEvidenceCollection = () => {
  const evidence = document.querySelectorAll('[data-evidence="true"]');
  const evidenceLog = document.getElementById("evidence-log");
  const evidenceCount = document.getElementById("evidence-count");

  let remaining = evidence.length;
  evidenceCount.textContent = remaining;

  evidence.forEach((e) => {
    const li = document.createElement("li");
    li.textContent = e.textContent;

    li.addEventListener("click", () => {
      if (!li.classList.contains("collected")) {
        li.classList.add("collected");
        remaining--;
        evidenceCount.textContent = remaining;
      }
    });

    evidenceLog.appendChild(li);
  });
};
digitalEvidenceCollection();

// Case #5: The Disappearing Records

const form = document.getElementById("allow-data");
const input = document.getElementById("text-data");
const add = document.getElementById("add");
const records = document.getElementById("records");
const auditLog = document.getElementById("audit-log");

let addedTable = [];
let removedTable = [];

const disappearingRecords = () => {
  add.addEventListener("click", (e) => {
    e.preventDefault();
    const value = input.value.trim();
    if (value) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
          <td>${value}</td>
          <td><button onclick="deleteEntry(this)">Delete</button></td>
        `;
      records.appendChild(tr);
      addedTable.push(value);
      logAction(`Added: ${value}`);
      input.value = "";
    }
  });
};
const logAction = (message) => {
  const ul = document.createElement("ul");
  ul.textContent = `${message}`;
  auditLog.appendChild(ul);
};

function deleteEntry(btn) {
  const remove = btn.closest("tr");

  if (remove) {
    const text = remove.querySelector("td").textContent;

    const logItems = auditLog.querySelectorAll("ul");
    logItems.forEach((item) => {
      if (item.textContent === text) {
        item.remove();
      }
    });

    addedTable = addedTable.filter((item) => item !== text);
    removedTable.push(text);

    remove.remove();
  }
}
const recoverLast = () => {
  const lastRemoved = removedTable.pop();
  if (lastRemoved) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${lastRemoved}</td>
      <td><button onclick="deleteEntry(this)">Delete</button></td>
    `;
    records.appendChild(tr);
    addedTable.push(lastRemoved);

    const ul = document.createElement("ul");
    ul.textContent = `Recovered: "${lastRemoved}"`;
    auditLog.appendChild(ul);
  }
};
disappearingRecords();

// Case #6: The Code Breaker

const codeBreaker = () => {
  const codeContainer = document.getElementById("code-container");
  const draggable = document.querySelectorAll(".draggable");
  const decoded = document.getElementById("decoded-text");

  decoded.addEventListener("click", () => {});
};
codeBreaker();
