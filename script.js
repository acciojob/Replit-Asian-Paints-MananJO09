//your JS code here. If required.
const gridItems = document.querySelectorAll('.grid-item');
const blockIdInput = document.getElementById('block_id');
const colorInput = document.getElementById('colour_id');
const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('reset_button');

let selectedBlockId = null;

// Add click event listener to each grid item
gridItems.forEach(item => {
  item.addEventListener('click', () => {
    selectedBlockId = item.id;
    resetGridItems();
    item.style.backgroundColor = 'transparent';
  });
});

// Add click event listener to change button
changeButton.addEventListener('click', () => {
  const color = colorInput.value;
  if (selectedBlockId) {
    const selectedBlock = document.getElementById(selectedBlockId);
    selectedBlock.style.backgroundColor = color;
  }
});

// Add click event listener to reset button
resetButton.addEventListener('click', () => {
  resetGridItems();
  blockIdInput.value = '';
  colorInput.value = '#000000';
});

// Reset the background color of all grid items
function resetGridItems() {
  gridItems.forEach(item => {
    item.style.backgroundColor = 'transparent';
  });
}
