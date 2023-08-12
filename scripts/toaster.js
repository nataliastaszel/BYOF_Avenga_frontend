const toast = document.querySelector(".toast");

export function showErrorToaster(message, code) {
  toast.innerHTML = `ERROR: ${message} (${code})`;
  toast.style.visibility = "visible";
  vanishToaster();
}

function vanishToaster() {
  setTimeout(() => {
    toast.style.visibility = "hidden";
  }, 2000);
}
