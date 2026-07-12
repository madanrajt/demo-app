// Demo-only auth: hardcoded credentials, no backend needed.
const VALID_USER = "demo";
const VALID_PASS = "demo123";

const loginScreen = document.getElementById("login-screen");
const homeScreen = document.getElementById("home-screen");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const loginError = document.getElementById("login-error");

function showHome() {
  loginScreen.hidden = true;
  homeScreen.hidden = false;
}

function showLogin() {
  homeScreen.hidden = true;
  loginScreen.hidden = false;
}

loginBtn.addEventListener("click", () => {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === VALID_USER && pass === VALID_PASS) {
    loginError.hidden = true;
    showHome();
  } else {
    loginError.hidden = false;
  }
});

logoutBtn.addEventListener("click", showLogin);

// If a search feature has been injected, wire up its (non-functional,
// demo-only) button so it doesn't throw errors.
document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.querySelector('[data-testid="search-button"]');
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      const term = document.querySelector('[data-testid="search-input"]').value;
      console.log("Searching for:", term);
    });
  }
});
