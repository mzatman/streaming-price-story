function formatTitle(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

window.onload = function() {
  const platform = localStorage.getItem("platform");

  if (platform && document.getElementById("platformTitle")) {
    document.getElementById("platformTitle").innerText = formatTitle(platform);
  }
};
