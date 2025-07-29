document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#container");
  const resizeButton = document.querySelector(".btn");
  const gridSizeInput = document.querySelector("#grid-size");

  const makeGrid = (size) => {
    container.innerText = "";

    for (i = 0; i < size; i++) {
      const row = document.createElement("div");
      row.className = "row";
      container.appendChild(row);

      for (j = 0; j < size; j++) {
        const col = document.createElement("div");
        col.className = "col";
        row.appendChild(col);
        col.addEventListener("mouseover", () => {
          col.classList.add("permahover");
        });
      }
    }
  };
  makeGrid(16);

  resizeButton.addEventListener("click", () => {
    const newSize = parseInt(gridSizeInput.value);

    if (isNaN(newSize) || newSize < 16 || newSize > 64) {
      alert("Please enter a number between 16 and 64");
      return;
    }
    makeGrid(newSize);
  });
});
