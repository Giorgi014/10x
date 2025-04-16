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

  Array.from(CLASSIFIED_DOCUMENT).forEach((e) => {
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
    const suspects = document.getElementsByTagName('.suspect');

};
suspectIdentification();