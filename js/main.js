function formatTitle(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

window.onload = function() {
  const platform = localStorage.getItem("platform");

  if (platform && document.getElementById("platformTitle")) {
    document.getElementById("platformTitle").innerText = formatTitle(platform);
  }
};

/* new shit */
function setProgress(page, percent) {
  localStorage.setItem(page + "-progress", percent);
}

function loadProgress() {
  const el = document.getElementById("progress-overview");
  if (el) {
    const saved = localStorage.getItem("overview-progress") || 30;
    el.style.width = saved + "%";
  }
}

window.onload = function() {
  loadProgress();

  const platform = localStorage.getItem("platform");
  if (platform && document.getElementById("platformTitle")) {
    document.getElementById("platformTitle").innerText =
      platform.charAt(0).toUpperCase() + platform.slice(1);
  }
};

/*new*/
setTimeout(() => {
  const modal = document.getElementById("stillPayingModal");
  if (modal) {
    modal.classList.remove("hidden");
  }
}, 8000);

function closeModal() {
  document.getElementById("stillPayingModal").classList.add("hidden");
}


function scrollToContent() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
}


document.querySelectorAll(".plan button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("You have been automatically upgraded.");
  });
});



