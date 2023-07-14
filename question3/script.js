const dataContainer = document.getElementById('dataContainer');


function showSkeletonLoader() {
  for (let i = 0; i < 5; i++) {
    const skeletonElement = document.createElement('div');
    skeletonElement.classList.add('skeleton');
    dataContainer.appendChild(skeletonElement);
  }
}

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    dataContainer.innerHTML = '';

    data.forEach((item) => {
      const itemElement = document.createElement('div');
      itemElement.textContent = item.title;
      dataContainer.appendChild(itemElement);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

showSkeletonLoader();
fetchData();
