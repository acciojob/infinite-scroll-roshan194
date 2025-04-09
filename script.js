const list = document.getElementById("infi-list");
let itemCount = 0;

// Function to add list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    itemCount++;
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// Add initial 10 items
addItems(10);

// Scroll event on the list itself
list.addEventListener("scroll", () => {
  // Check if scrolled to bottom
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 5) {
    addItems(2); // Add 2 more items
  }
});
