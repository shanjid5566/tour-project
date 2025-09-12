const profileBtn = document.getElementById("profileBtn");
const dropdownMenu = document.getElementById("profileDropdownMenu");
const buttons = document.querySelectorAll(".settings-btn");
const dropdowns = document.querySelectorAll(".dropdown-menu");
const notifyBtn = document.getElementById("notifyBtn");
const notifyPanel = document.getElementById("notifyPanel");
const closePanel = document.getElementById("closePanel");

// Toggle dropdown with animation
profileBtn.addEventListener("click", () => {
  if (dropdownMenu.classList.contains("hidden")) {
    dropdownMenu.classList.remove("hidden");
    setTimeout(() => {
      dropdownMenu.classList.remove("scale-95", "opacity-0");
      dropdownMenu.classList.add("scale-100", "opacity-100");
    }, 10);
  } else {
    dropdownMenu.classList.add("scale-95", "opacity-0");
    dropdownMenu.classList.remove("scale-100", "opacity-100");
    setTimeout(() => dropdownMenu.classList.add("hidden"), 200);
  }
});

// Close dropdown when clicking outside
window.addEventListener("click", (e) => {
  if (!profileBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.add("scale-95", "opacity-0");
    dropdownMenu.classList.remove("scale-100", "opacity-100");
    setTimeout(() => dropdownMenu.classList.add("hidden"), 200);
  }
});
// function for dashboard settings dropdowns

buttons.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // Close all dropdowns first
    dropdowns.forEach((menu) => menu.classList.add("hidden"));

    // Toggle this one
    dropdowns[index].classList.toggle("hidden");
  });
});

// Close dropdown if clicked outside
document.addEventListener("click", () => {
  dropdowns.forEach((menu) => menu.classList.add("hidden"));
});
// Toggle panel
notifyBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  notifyPanel.classList.toggle("hidden");
  notifyPanel.classList.toggle("flex");
});

// Close button
closePanel.addEventListener("click", () => {
  notifyPanel.classList.add("hidden");
  notifyPanel.classList.remove("flex");
});

// Click outside to close
document.addEventListener("click", (e) => {
  if (!notifyPanel.contains(e.target) && !notifyBtn.contains(e.target)) {
    notifyPanel.classList.add("hidden");
    notifyPanel.classList.remove("flex");
  }
});
