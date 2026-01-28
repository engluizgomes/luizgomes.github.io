const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
  const expanded = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", String(!expanded));
  mobileNav.setAttribute("aria-hidden", String(expanded));
  mobileNav.style.display = expanded ? "none" : "block";
});

mobileNav.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    menuBtn.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");
    mobileNav.style.display = "none";
  });
});

// Copy message to clipboard (no backend)
document.getElementById("copyBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value || "";
  const email = document.getElementById("email").value || "";
  const msg = document.getElementById("message").value || "";

  const text = `Hi Luiz,\n\nMy name is ${name} (${email}).\n\n${msg}\n\n— Sent from your portfolio site`;
  try {
    await navigator.clipboard.writeText(text);
    alert("Copied! Paste it into an email or LinkedIn message 🙂");
  } catch {
    alert("Couldn’t copy automatically. Please copy manually.");
  }
});
