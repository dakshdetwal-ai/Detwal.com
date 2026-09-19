document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // SMOOTH NAVIGATION
  // =========================

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

      const targetId = this.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });

  });


  // =========================
  // LOGIN FORM
  // =========================

  const loginForm = document.getElementById("loginForm");

  if (loginForm) {

    loginForm.addEventListener("submit", event => {

      event.preventDefault();

      const message =
        document.getElementById("loginMessage");

      if (message) {

        message.textContent =
          "Demo login only — the production version will connect this form to the DETwal backend.";

      }

    });

  }


  // =========================
  // ACCESS / CUSTOMER FORM
  // =========================

  const accessForm =
    document.getElementById("accessForm");

  if (accessForm) {

    accessForm.addEventListener("submit", event => {

      event.preventDefault();

      const message =
        document.getElementById("accessMessage");

      if (message) {

        message.textContent =
          "Your inquiry has been submitted. Customer support will contact you.";

      }

    });

  }


  // =========================
  // SUPPORT CHAT
  // =========================

  const supportForm =
    document.getElementById("supportForm");

  if (supportForm) {

    supportForm.addEventListener("submit", event => {

      event.preventDefault();

      const input =
        document.getElementById("supportInput");

      if (!input || !input.value.trim()) {
        return;
      }

      const chatHistory =
        document.querySelector(".chat-history");

      if (!chatHistory) {
        return;
      }

      const message =
        document.createElement("div");

      message.className = "message user";

      const time =
        document.createElement("small");

      time.textContent = "You · Just now";

      const text =
        document.createElement("p");

      text.textContent =
        input.value.trim();

      message.appendChild(time);
      message.appendChild(text);

      chatHistory.appendChild(message);

      input.value = "";

      chatHistory.scrollTop =
        chatHistory.scrollHeight;

    });

  }


  // =========================
  // FILE ATTACHMENT
  // =========================

  const fileInput =
    document.querySelector(".file-btn input");

  if (fileInput) {

    fileInput.addEventListener("change", () => {

      if (fileInput.files.length > 0) {

        const file =
          fileInput.files[0];

        console.log(
          "Selected file:",
          file.name
        );

      }

    });

  }


  // =========================
  // DEMO COUNTDOWN
  // =========================

  const countdownElements =
    document.querySelectorAll(
      ".countdown, .timer, .mini-count"
    );

  countdownElements.forEach(element => {

    let totalSeconds =
      2 * 60 * 60 + 18 * 60 + 42;

    setInterval(() => {

      if (totalSeconds <= 0) {
        return;
      }

      totalSeconds--;

      const hours =
        Math.floor(totalSeconds / 3600);

      const minutes =
        Math.floor((totalSeconds % 3600) / 60);

      const seconds =
        totalSeconds % 60;

      element.textContent =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;

    }, 1000);

  });


  // =========================
  // CONSOLE
  // =========================

  console.log(
    "DETwal frontend loaded successfully."
  );

});
