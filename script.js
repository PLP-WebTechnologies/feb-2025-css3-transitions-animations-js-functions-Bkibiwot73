// Load saved color from localStorage on page load
window.onload = () => {
  const savedColor = localStorage.getItem("bgColor");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    document.getElementById("colorSelect").value = savedColor;
  }
};

// Save preference and animate box
document.getElementById("saveBtn").addEventListener("click", () => {
  const selectedColor = document.getElementById("colorSelect").value;

  if (selectedColor) {
    localStorage.setItem("bgColor", selectedColor);
    document.body.style.backgroundColor = selectedColor;

    // Add animation to box
    const box = document.getElementById("animatedBox");
    box.classList.remove("animate"); // reset animation
    void box.offsetWidth; // reflow trick
    box.classList.add("animate");
  } else {
    alert("Please select a color!");
  }
});
