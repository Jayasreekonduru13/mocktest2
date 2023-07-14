const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
const userList = document.getElementById('userList');

submitBtn.addEventListener('click', () => {
  const text = userInput.value;
  if (text.trim() !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = text;
    userList.appendChild(listItem);
    userInput.value = '';
  }
});

userInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    submitBtn.click();
  }
});
