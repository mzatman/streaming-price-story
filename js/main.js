function login(event) {
  event.preventDefault();
  window.location.href = "pages/dashboard.html";
}
function goToPlatform(name) {
  localStorage.setItem("platform", name);
  window.location.href = "platform.html";
}

window.onload = function() {
  const platform = localStorage.getItem("platform");
  if (platform) {
    document.getElementById("platformTitle").innerText = platform.toUpperCase();
  }
};
